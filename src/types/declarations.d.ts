declare module "*.scss" {
	const content: { [className: string]: string };
	export default content;
}

// For images
declare module "*.png" {
	const src: string;
	export default src;
}

declare module "*.jpg" {
	const src: string;
	export default src;
}

declare module "*.jpeg" {
	const src: string;
	export default src;
}

declare module "*.gif" {
	const src: string;
	export default src;
}

// For SVG (can be used as URLs or React components)
declare module "*.svg" {
	const src: string;
	export default src;
}

// For fonts
declare module "*.woff" {
	const src: string;
	export default src;
}

declare module "*.woff2" {
	const src: string;
	export default src;
}
