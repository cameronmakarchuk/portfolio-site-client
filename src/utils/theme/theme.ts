import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
	theme: {
		tokens: {
			fonts: {
				heading: { value: "Mona Sans" },
				body: { value: "Mona Sans" },
			},
			colors: {
				primary: {
					orange: { value: "#de5f54" },
					pink: { value: "#c75ab4" },
					purple: { value: "#c75ab4" },
					blue: { value: "#8296ea" },
					lightblue: { value: "#aebdf1" },
					grey: { value: "#dde3f9" },
					white: { value: "#f6f8fe" },
					black: { value: "#2f2d2e" },
				},
			},
		},
		breakpoints: {
			base: "0px",
			mobile: "320px",
			tablet: "768px",
			desktop: "1280px",
			wide: "1400px",
		},
	},
});
