import type { ShareCardText } from './frames.ts';

// The images `npm run mockups` generates. Add an entry here to create a new one; see generate.ts for how it works.

/** A rectangle in source-image pixels, used to cut one screen out of a larger design board. */
export type Region = { left: number; top: number; width: number; height: number };

/** Where a device mockup's screen content comes from. */
export type ScreenSource =
	/**
	 * An existing screenshot or design image, relative to the mockups/ folder. `crop` cuts out one screen. In phone
	 * frames the image is fitted to the phone's shape by extending or trimming its sides, and `addStatusBar` adds a
	 * band in the screen's top color so the app header isn't hidden behind the camera cutout (useful for design mockups
	 * drawn without one).
	 */
	| { kind: 'file'; path: string; crop?: Region; addStatusBar?: boolean }
	/**
	 * A live page, captured at the device's screen size. A path such as `/about` is served from this site;
	 * a full URL (`https://…`) is captured as-is. `scrollY` captures further down the page, in CSS pixels.
	 */
	| { kind: 'page'; url: string; scrollY?: number };

export type Mockup =
	| { name: string; frame: 'laptop' | 'phone'; screen: ScreenSource }
	/** Several screens side by side: phones, or desktop screens in browser windows. */
	| { name: string; frame: 'phones' | 'browsers'; screens: ScreenSource[] }
	/** An SVG diagram in mockups/diagrams, drawn with the classes defined in frames.ts. */
	| { name: string; frame: 'diagram'; svg: string }
	/** The link preview image, written as public/<name>.png so index.html can point to it at a fixed URL. */
	| { name: string; frame: 'share-card'; screen: ScreenSource; text: ShareCardText };

/**
 * Each entry is written to src/assets/images/<name>.webp (share cards go to public/). Order matters when one mockup captures a page that shows
 * another (the portfolio home page shows the Homelab and pet care images), so list those dependencies first.
 */
export const mockups: Mockup[] = [
	{ name: 'homelab-laptop', frame: 'laptop', screen: { kind: 'file', path: 'sources/homelab-dashboard.png' } },
	{ name: 'homelab-stack', frame: 'diagram', svg: 'diagrams/homelab-stack.svg' },
	{ name: 'homelab-services', frame: 'diagram', svg: 'diagrams/homelab-services.svg' },
	{
		name: 'pet-care-roles',
		frame: 'phones',
		screens: [
			{
				kind: 'file',
				path: 'sources/pet-care-client-mobile.webp',
				crop: { left: 808, top: 86, width: 441, height: 903 },
				addStatusBar: true,
			},
			{
				kind: 'file',
				path: 'sources/pet-care-team-mobile.webp',
				crop: { left: 395, top: 142, width: 353, height: 827 },
				addStatusBar: true,
			},
			{
				kind: 'file',
				path: 'sources/pet-care-team-mobile.webp',
				crop: { left: 790, top: 142, width: 353, height: 827 },
				addStatusBar: true,
			},
		],
	},
	{
		name: 'pet-care-admin-web',
		frame: 'browsers',
		screens: [
			{
				kind: 'file',
				path: 'sources/pet-care-web-screens.webp',
				crop: { left: 17, top: 107, width: 442, height: 860 },
			},
			{
				kind: 'file',
				path: 'sources/pet-care-web-screens.webp',
				crop: { left: 474, top: 107, width: 530, height: 860 },
			},
			{
				kind: 'file',
				path: 'sources/pet-care-web-screens.webp',
				crop: { left: 1018, top: 107, width: 502, height: 860 },
			},
		],
	},
	{ name: 'pet-care-request-flow', frame: 'diagram', svg: 'diagrams/pet-care-request-flow.svg' },
	{ name: 'portfolio-site-laptop', frame: 'laptop', screen: { kind: 'page', url: '/' } },
	{ name: 'portfolio-mobile-home', frame: 'phone', screen: { kind: 'page', url: '/' } },
	{
		name: 'portfolio-mobile-case-study',
		frame: 'phone',
		screen: { kind: 'page', url: '/projects/recleague', scrollY: 790 },
	},
	{ name: 'recleague-schema', frame: 'diagram', svg: 'diagrams/recleague-schema.svg' },
	{ name: 'recleague-architecture', frame: 'diagram', svg: 'diagrams/recleague-architecture.svg' },
	{ name: 'brainstorm-idea-loop', frame: 'diagram', svg: 'diagrams/brainstorm-idea-loop.svg' },
	{ name: 'brainstorm-points', frame: 'diagram', svg: 'diagrams/brainstorm-points.svg' },
	{
		name: 'og-image',
		frame: 'share-card',
		screen: { kind: 'page', url: '/' },
		text: {
			title: 'Cameron Makarchuk',
			subtitle: 'Software developer · Toronto',
			tagline: 'Fifteen years coaching.',
			taglineAccent: 'Then software, at 38.',
		},
	},
];
