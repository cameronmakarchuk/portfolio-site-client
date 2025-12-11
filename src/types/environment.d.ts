/// <reference types="vite/client" />

interface ImportMetaEnv {
	readonly VITE_FORMSPREE_CONTACT_KEY: string;
	// add other env variables here
}

export interface ImportMeta {
	readonly env: ImportMetaEnv;
}
