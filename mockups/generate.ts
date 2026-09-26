/**
 * Generates the device mockups and diagrams used on project pages, as transparent WebP images in src/assets/images.
 *
 * Usage:
 *   npm run mockups                       Regenerate every image listed in mockups/config.ts
 *   npm run mockups -- homelab-laptop     Regenerate only the named image(s)
 *
 * For each entry in config.ts:
 *   - laptop / phone: gets the screen image (an existing screenshot, optionally cropped out of a design board, or a
 *     capture of a live page at the device's screen size), places it in the device frame from frames.ts, and
 *     screenshots the result.
 *   - phones / browsers: the same for several screens, shown side by side as phones or as browser windows.
 *   - diagram: renders the SVG in mockups/diagrams with the site's fonts and diagram styles.
 *   - share-card: the 1200×630 link preview image, written as a PNG to public/ rather than src/assets/images.
 * Pages given as a path (e.g. `/about`) are served by starting this site's Vite dev server for the run.
 *
 * To add a mockup for a new project: add an entry to config.ts (and drop any screenshot into mockups/sources),
 * run the command above, then import src/assets/images/<name>.webp in src/data/projects.ts.
 *
 * First-time setup on a new machine: `npx playwright install chromium`.
 */
import { mkdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { type Browser, chromium } from 'playwright';
import sharp from 'sharp';
import { createServer, type ViteDevServer } from 'vite';
import { type Mockup, mockups, type ScreenSource } from './config.ts';
import {
	browserGroupHtml,
	diagramFrameHtml,
	laptopFrameHtml,
	laptopViewport,
	phoneFrameHtml,
	phoneGroupHtml,
	phoneViewport,
	shareCardHtml,
} from './frames.ts';

/** The kind of device a screen is shown on, which sets the viewport for page captures. */
type Device = 'desktop' | 'phone';

type ScreenImage = {
	png: Buffer;
	aspectRatio: number;
};

const mockupsDirectory = import.meta.dirname;
const projectRoot = path.resolve(mockupsDirectory, '..');
const outputDirectory = path.join(projectRoot, 'src/assets/images');
const shareCardDirectory = path.join(projectRoot, 'public');

// Pixel density of the final images, chosen so each stays sharp at its largest size on the site.
// Share cards stay at exactly 1200×630, the size link preview services expect.
const frameScale = { laptop: 2, phone: 2.5, phones: 1.5, browsers: 1.25, diagram: 3, 'share-card': 1 };

// Pixel density of live page captures; higher than the frame scale so the screen content stays crisp once framed.
const captureScale = { desktop: 2, phone: 3 };

// Height of the phone status bar added by `addStatusBar`, in CSS pixels; clears the camera cutout drawn in frames.ts.
const statusBarHeight = 47;

async function main(): Promise<void> {
	const selectedMockups = selectMockups(process.argv.slice(2));
	const site = needsLocalSite(selectedMockups) ? await startSite() : undefined;
	const browser = await chromium.launch();

	try {
		await mkdir(outputDirectory, { recursive: true });

		for (const mockup of selectedMockups) {
			const framedPng = await renderMockup(browser, mockup, site?.baseUrl);
			const outputPath = await writeImage(mockup, framedPng);

			console.log(`✓ ${path.relative(projectRoot, outputPath)}`);
		}
	} finally {
		await browser.close();
		await site?.server.close();
	}
}

// Share cards stay PNG because not every link preview service reads WebP.
async function writeImage(mockup: Mockup, png: Buffer): Promise<string> {
	if (mockup.frame === 'share-card') {
		const outputPath = path.join(shareCardDirectory, `${mockup.name}.png`);
		await sharp(png).png({ compressionLevel: 9 }).toFile(outputPath);

		return outputPath;
	}

	const outputPath = path.join(outputDirectory, `${mockup.name}.webp`);
	await sharp(png).webp({ quality: 90, alphaQuality: 100 }).toFile(outputPath);

	return outputPath;
}

function selectMockups(requestedNames: string[]): Mockup[] {
	if (requestedNames.length === 0) {
		return mockups;
	}

	const knownNames = new Set(mockups.map((mockup) => mockup.name));
	const unknownNames = requestedNames.filter((name) => !knownNames.has(name));

	if (unknownNames.length > 0) {
		throw new Error(`Unknown mockup(s): ${unknownNames.join(', ')}. Available: ${[...knownNames].join(', ')}`);
	}

	return mockups.filter((mockup) => requestedNames.includes(mockup.name));
}

function needsLocalSite(selectedMockups: Mockup[]): boolean {
	return selectedMockups
		.flatMap(screenSourcesOf)
		.some((source) => source.kind === 'page' && !isAbsoluteUrl(source.url));
}

function screenSourcesOf(mockup: Mockup): ScreenSource[] {
	switch (mockup.frame) {
		case 'laptop':
		case 'phone':
		case 'share-card':
			return [mockup.screen];
		case 'phones':
		case 'browsers':
			return mockup.screens;
		case 'diagram':
			return [];
	}
}

async function startSite(): Promise<{ server: ViteDevServer; baseUrl: string }> {
	const server = await createServer({ root: projectRoot, logLevel: 'error' });
	await server.listen();

	const baseUrl = server.resolvedUrls?.local[0];

	if (!baseUrl) {
		await server.close();
		throw new Error('The Vite dev server started without a local URL.');
	}

	return { server, baseUrl };
}

async function renderMockup(browser: Browser, mockup: Mockup, siteBaseUrl: string | undefined): Promise<Buffer> {
	const frameHtml = await buildFrameHtml(browser, mockup, siteBaseUrl);

	return renderFrame(browser, frameHtml, frameScale[mockup.frame]);
}

async function buildFrameHtml(browser: Browser, mockup: Mockup, siteBaseUrl: string | undefined): Promise<string> {
	switch (mockup.frame) {
		case 'laptop': {
			const screen = await getScreenImage(browser, mockup.screen, 'desktop', siteBaseUrl);

			return laptopFrameHtml(toDataUrl(screen.png), screen.aspectRatio);
		}

		case 'phone': {
			const screen = await getScreenImage(browser, mockup.screen, 'phone', siteBaseUrl);

			return phoneFrameHtml(toDataUrl(screen.png));
		}

		case 'phones': {
			const screens = await getScreenImages(browser, mockup.screens, 'phone', siteBaseUrl);

			return phoneGroupHtml(screens.map((screen) => toDataUrl(screen.png)));
		}

		case 'browsers': {
			const screens = await getScreenImages(browser, mockup.screens, 'desktop', siteBaseUrl);

			return browserGroupHtml(
				screens.map((screen) => ({ imageUrl: toDataUrl(screen.png), aspectRatio: screen.aspectRatio })),
			);
		}

		case 'share-card': {
			const screen = await getScreenImage(browser, mockup.screen, 'desktop', siteBaseUrl);

			return shareCardHtml(toDataUrl(screen.png), screen.aspectRatio, mockup.text);
		}

		case 'diagram': {
			const svgMarkup = await readFile(path.join(mockupsDirectory, mockup.svg), 'utf8');

			return diagramFrameHtml(svgMarkup);
		}
	}
}

async function getScreenImages(
	browser: Browser,
	sources: ScreenSource[],
	device: Device,
	siteBaseUrl: string | undefined,
): Promise<ScreenImage[]> {
	const screens: ScreenImage[] = [];

	for (const source of sources) {
		screens.push(await getScreenImage(browser, source, device, siteBaseUrl));
	}

	return screens;
}

async function getScreenImage(
	browser: Browser,
	source: ScreenSource,
	device: Device,
	siteBaseUrl: string | undefined,
): Promise<ScreenImage> {
	const viewport = device === 'desktop' ? laptopViewport : phoneViewport;

	if (source.kind === 'page') {
		const pageUrl = isAbsoluteUrl(source.url) ? source.url : new URL(source.url, siteBaseUrl).href;
		const png = await capturePage(browser, pageUrl, device, source.scrollY ?? 0);

		return { png, aspectRatio: viewport.width / viewport.height };
	}

	const sourceImage = sharp(path.join(mockupsDirectory, source.path));
	const croppedPng = await (source.crop ? sourceImage.extract(source.crop) : sourceImage).png().toBuffer();

	if (device === 'phone') {
		const png = await fitToPhoneScreen(croppedPng, source.addStatusBar ?? false);

		return { png, aspectRatio: viewport.width / viewport.height };
	}

	const { width, height } = await readDimensions(croppedPng);

	return { png: croppedPng, aspectRatio: width / height };
}

/**
 * Makes a screenshot exactly the phone's shape: sides are trimmed if it's too wide, or extended by repeating their
 * edge pixels if it's too narrow (design mockups are often drawn narrower than a real phone). With `addStatusBar`,
 * a band in the screenshot's top color is added above it for the phone's status bar.
 */
async function fitToPhoneScreen(png: Buffer, addStatusBar: boolean): Promise<Buffer> {
	const { width, height } = await readDimensions(png);
	const contentHeight = phoneViewport.height - (addStatusBar ? statusBarHeight : 0);
	const targetWidth = Math.round((height * phoneViewport.width) / contentHeight);
	const widthDifference = targetWidth - width;

	let fittedPng = png;

	if (widthDifference > 0) {
		fittedPng = await sharp(png)
			.extend({
				left: Math.floor(widthDifference / 2),
				right: Math.ceil(widthDifference / 2),
				extendWith: 'copy',
			})
			.png()
			.toBuffer();
	}

	if (widthDifference < 0) {
		fittedPng = await sharp(png)
			.extract({ left: Math.floor(-widthDifference / 2), top: 0, width: targetWidth, height })
			.png()
			.toBuffer();
	}

	if (!addStatusBar) {
		return fittedPng;
	}

	const barHeight = Math.round((statusBarHeight * targetWidth) / phoneViewport.width);
	const barColor = await readPixel(fittedPng, Math.floor(targetWidth / 2), 1);

	return sharp(fittedPng).extend({ top: barHeight, background: barColor }).png().toBuffer();
}

async function readDimensions(png: Buffer): Promise<{ width: number; height: number }> {
	const { width, height } = await sharp(png).metadata();

	if (!width || !height) {
		throw new Error('Could not read the dimensions of a screen image.');
	}

	return { width, height };
}

async function readPixel(png: Buffer, left: number, top: number): Promise<{ r: number; g: number; b: number }> {
	const [r = 0, g = 0, b = 0] = await sharp(png)
		.extract({ left, top, width: 1, height: 1 })
		.removeAlpha()
		.raw()
		.toBuffer();

	return { r, g, b };
}

async function capturePage(browser: Browser, pageUrl: string, device: Device, scrollY: number): Promise<Buffer> {
	const context = await browser.newContext({
		viewport: device === 'desktop' ? laptopViewport : phoneViewport,
		deviceScaleFactor: captureScale[device],
		isMobile: device === 'phone',
		hasTouch: device === 'phone',
		// Stops animations (like the home page's rotating "Now" item) so every run captures the same frame.
		reducedMotion: 'reduce',
	});

	try {
		const page = await context.newPage();
		await page.goto(pageUrl, { waitUntil: 'networkidle' });
		await page.evaluate(async (top) => {
			await document.fonts.ready;
			window.scrollTo({ top, behavior: 'instant' });
		}, scrollY);

		return await page.screenshot({ type: 'png' });
	} finally {
		await context.close();
	}
}

async function renderFrame(browser: Browser, frameHtml: string, scale: number): Promise<Buffer> {
	// Large enough to hold any frame, including side-by-side groups, so the screenshot never has to scroll.
	const context = await browser.newContext({ viewport: { width: 2400, height: 1400 }, deviceScaleFactor: scale });

	try {
		const page = await context.newPage();
		await page.setContent(frameHtml, { waitUntil: 'networkidle' });
		await page.evaluate(() => document.fonts.ready);

		return await page.locator('.stage').screenshot({ type: 'png', omitBackground: true });
	} finally {
		await context.close();
	}
}

function toDataUrl(png: Buffer): string {
	return `data:image/png;base64,${png.toString('base64')}`;
}

function isAbsoluteUrl(url: string): boolean {
	return /^https?:\/\//.test(url);
}

try {
	await main();
} catch (error) {
	console.error(error instanceof Error ? error.message : error);
	process.exitCode = 1;
}
