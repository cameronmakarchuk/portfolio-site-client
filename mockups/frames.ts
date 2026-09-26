// HTML for each frame. generate.ts loads one into a headless browser and screenshots its `.stage` element with a
// transparent background. Colors follow src/styles/partials/_theme.scss.

/** Screen sizes in CSS pixels. Page captures use them as the browser viewport. */
export const laptopViewport = { width: 1440, height: 900 };
export const phoneViewport = { width: 390, height: 844 };

const baseStyles = `
	html, body { margin: 0; background: transparent; }
	.stage { display: inline-block; }
`;

function laptopStyles(screenAspectRatio: number): string {
	return `
	.laptop { width: 1000px; display: flex; flex-direction: column; align-items: center; filter: drop-shadow(0 22px 26px rgba(0, 0, 0, 0.5)); }
	.lid { width: 840px; padding: 3px; border-radius: 24px 24px 4px 4px; background: linear-gradient(180deg, #55555e, #26262b 40%, #1b1b20); box-sizing: border-box; }
	.bezel { position: relative; padding: 16px 14px 14px; border-radius: 21px 21px 2px 2px; background: #0b0b0d; }
	.camera { position: absolute; top: 6px; left: 50%; width: 5px; height: 5px; margin-left: -2.5px; border-radius: 50%; background: #25252c; box-shadow: inset 0 0 0 1px #34343c; }
	.laptop .screen { position: relative; aspect-ratio: ${screenAspectRatio}; overflow: hidden; border-radius: 3px; background: #111114; }
	.laptop .screen img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: top center; }
	.laptop .screen::after { content: ""; position: absolute; inset: 0; background: linear-gradient(115deg, rgba(255, 255, 255, 0.07) 0%, rgba(255, 255, 255, 0.02) 38%, transparent 38.2%); }
	.base { position: relative; width: 1000px; height: 20px; border-radius: 3px 3px 16px 16px / 3px 3px 12px 12px; background: linear-gradient(180deg, #6a6a73 0%, #3a3a42 18%, #26262b 60%, #151518 100%); }
	.notch { position: absolute; top: 0; left: 50%; width: 150px; height: 7px; margin-left: -75px; border-radius: 0 0 9px 9px; background: linear-gradient(180deg, #1b1b20, #2a2a30); }
`;
}

function laptopMarkup(screenImageUrl: string): string {
	return `<div class="laptop">
		<div class="lid"><div class="bezel"><span class="camera"></span><div class="screen"><img src="${screenImageUrl}" alt=""></div></div></div>
		<div class="base"><span class="notch"></span></div>
	</div>`;
}

export function laptopFrameHtml(screenImageUrl: string, screenAspectRatio: number): string {
	return `<!doctype html>
<html>
<head>
<style>
	${baseStyles}
	${laptopStyles(screenAspectRatio)}
	.stage { padding: 12px 30px 56px; }
</style>
</head>
<body>
	<div class="stage">${laptopMarkup(screenImageUrl)}</div>
</body>
</html>`;
}

/** Text on a share card. `taglineAccent` follows the tagline in coral, the brand's color for the career pivot. */
export type ShareCardText = {
	title: string;
	subtitle: string;
	tagline: string;
	taglineAccent?: string;
};

/**
 * The 1200×630 image link previews use (LinkedIn, Slack, iMessage…): the text on the left and the screen on a laptop
 * running off the right edge. Unlike the other frames it has its own dark background.
 */
export function shareCardHtml(screenImageUrl: string, screenAspectRatio: number, text: ShareCardText): string {
	const accent = text.taglineAccent ? ` <span class="accent">${text.taglineAccent}</span>` : '';

	return `<!doctype html>
<html>
<head>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400&family=Source+Serif+4:ital,opsz,wght@0,8..60,300;0,8..60,400;1,8..60,300&display=swap" rel="stylesheet">
<style>
	${baseStyles}
	${laptopStyles(screenAspectRatio)}
	.stage { position: relative; width: 1200px; height: 630px; overflow: hidden; background: #111114; }
	.text { position: absolute; top: 0; bottom: 0; left: 72px; width: 470px; display: flex; flex-direction: column; justify-content: center; gap: 20px; }
	.title { margin: 0; font: 400 58px/1.05 'Source Serif 4', serif; letter-spacing: -0.01em; color: #f0e9df; }
	.subtitle { font: 400 19px/1.4 'IBM Plex Mono', monospace; color: #a39cad; }
	.rule { width: 64px; height: 1px; background: #3a3a42; }
	.tagline { margin: 0; font: italic 300 27px/1.4 'Source Serif 4', serif; color: #d9d1c7; }
	.accent { display: block; color: #ef8354; }
	.device { position: absolute; left: 590px; top: 118px; transform: scale(0.7); transform-origin: top left; }
</style>
</head>
<body>
	<div class="stage">
		<div class="text">
			<h1 class="title">${text.title}</h1>
			<span class="subtitle">${text.subtitle}</span>
			<span class="rule"></span>
			<p class="tagline">${text.tagline}${accent}</p>
		</div>
		<div class="device">${laptopMarkup(screenImageUrl)}</div>
	</div>
</body>
</html>`;
}

const phoneStyles = `
	.phone { position: relative; padding: 3px; border-radius: 64px; background: linear-gradient(160deg, #6a6a73, #2a2a30 30%, #1b1b20 70%, #4a4a52); filter: drop-shadow(0 20px 24px rgba(0, 0, 0, 0.5)); }
	.bezel { padding: 13px; border-radius: 61px; background: #050506; }
	.screen { position: relative; width: ${phoneViewport.width}px; height: ${phoneViewport.height}px; overflow: hidden; border-radius: 48px; background: #111114; }
	.screen img { display: block; width: 100%; height: 100%; object-fit: cover; object-position: top center; }
	.island { position: absolute; top: 11px; left: 50%; width: 118px; height: 34px; margin-left: -59px; border-radius: 17px; background: #000; z-index: 2; }
	.screen::after { content: ""; position: absolute; inset: 0; z-index: 3; background: linear-gradient(120deg, rgba(255, 255, 255, 0.06) 0%, rgba(255, 255, 255, 0.015) 42%, transparent 42.2%); }
	.button { position: absolute; width: 4px; border-radius: 2px; background: linear-gradient(90deg, #2a2a30, #55555e); }
	.button--action { left: -3px; top: 150px; height: 34px; }
	.button--volume-up { left: -3px; top: 210px; height: 62px; }
	.button--volume-down { left: -3px; top: 286px; height: 62px; }
	.button--power { right: -3px; top: 230px; height: 96px; background: linear-gradient(270deg, #2a2a30, #55555e); }
`;

function phoneMarkup(screenImageUrl: string): string {
	return `<div class="phone">
		<span class="button button--action"></span>
		<span class="button button--volume-up"></span>
		<span class="button button--volume-down"></span>
		<span class="button button--power"></span>
		<div class="bezel"><div class="screen"><span class="island"></span><img src="${screenImageUrl}" alt=""></div></div>
	</div>`;
}

export function phoneFrameHtml(screenImageUrl: string): string {
	return `<!doctype html>
<html>
<head>
<style>
	${baseStyles}
	${phoneStyles}
	.stage { padding: 16px 28px 48px; }
</style>
</head>
<body>
	<div class="stage">${phoneMarkup(screenImageUrl)}</div>
</body>
</html>`;
}

export function phoneGroupHtml(screenImageUrls: string[]): string {
	return `<!doctype html>
<html>
<head>
<style>
	${baseStyles}
	${phoneStyles}
	.stage { padding: 16px 28px 48px; }
	.group { display: flex; gap: 56px; }
</style>
</head>
<body>
	<div class="stage"><div class="group">${screenImageUrls.map(phoneMarkup).join('')}</div></div>
</body>
</html>`;
}

/** Desktop screens in plain browser windows, all the same height, with each window as wide as its screen needs. */
export function browserGroupHtml(screens: { imageUrl: string; aspectRatio: number }[]): string {
	const windowHeight = 860;
	const windows = screens
		.map(
			(screen) => `<div class="window" style="width: ${Math.round(windowHeight * screen.aspectRatio)}px">
			<div class="toolbar"><span class="dot"></span><span class="dot"></span><span class="dot"></span><span class="address"></span></div>
			<img src="${screen.imageUrl}" alt="" style="height: ${windowHeight}px">
		</div>`,
		)
		.join('');

	return `<!doctype html>
<html>
<head>
<style>
	${baseStyles}
	.stage { padding: 12px 30px 56px; }
	.group { display: flex; align-items: flex-start; gap: 36px; }
	.window { position: relative; overflow: hidden; border: 1px solid #3a3a42; border-radius: 12px; background: #111114; filter: drop-shadow(0 22px 26px rgba(0, 0, 0, 0.5)); }
	.window::after { content: ""; position: absolute; inset: 0; background: linear-gradient(115deg, rgba(255, 255, 255, 0.05) 0%, rgba(255, 255, 255, 0.015) 40%, transparent 40.2%); }
	.toolbar { display: flex; align-items: center; gap: 8px; height: 36px; padding: 0 14px; background: linear-gradient(180deg, #2a2a30, #202026); border-bottom: 1px solid #111114; }
	.dot { width: 11px; height: 11px; border-radius: 50%; background: #3a3a42; }
	.address { flex: 1; height: 18px; margin-left: 12px; border-radius: 9px; background: #151518; }
	.window img { display: block; width: 100%; object-fit: cover; object-position: top left; }
</style>
</head>
<body>
	<div class="stage"><div class="group">${windows}</div></div>
</body>
</html>`;
}

/**
 * Diagrams are 400×300 SVGs. Style them with these classes rather than inline colors so they stay on brand:
 * text: title, body, field, field-sm, meta, tag (+ mint / coral / strong); shapes: box, rule, link, link-mint, link-coral.
 */
export function diagramFrameHtml(svgMarkup: string): string {
	return `<!doctype html>
<html>
<head>
<link href="https://fonts.googleapis.com/css2?family=IBM+Plex+Mono:wght@400;500&family=IBM+Plex+Sans:wght@400;500&display=swap" rel="stylesheet">
<style>
	${baseStyles}
	.stage svg { display: block; }
	.title { font: 500 14px 'IBM Plex Sans', sans-serif; fill: #f0e9df; }
	.body { font: 400 12px 'IBM Plex Sans', sans-serif; fill: #a39cad; }
	.field { font: 400 11.5px 'IBM Plex Mono', monospace; fill: #d9d1c7; }
	.field-sm { font: 400 10.5px 'IBM Plex Mono', monospace; fill: #d9d1c7; }
	.meta { font: 400 11px 'IBM Plex Mono', monospace; fill: #8c8596; }
	.tag { font: 500 9.5px 'IBM Plex Mono', monospace; letter-spacing: .04em; }
	.strong { fill: #f0e9df; }
	.mint { fill: #b8f2e6; }
	.coral { fill: #ef8354; }
	.box { fill: #111114; stroke: #3a3a42; stroke-width: 1; }
	.rule { stroke: #2a2a30; stroke-width: 1; }
	.link { fill: none; stroke: #5a5463; stroke-width: 1.25; }
	.link-mint { fill: none; stroke: #b8f2e6; stroke-width: 1.25; opacity: .7; }
	.link-coral { fill: none; stroke: #ef8354; stroke-width: 1.25; opacity: .8; }
</style>
</head>
<body>
	<div class="stage">${svgMarkup}</div>
</body>
</html>`;
}
