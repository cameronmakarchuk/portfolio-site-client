"use client";

import { ChakraProvider, defaultSystem } from "@chakra-ui/react";
import { system } from "../../utils/theme/theme";
import { ColorModeProvider } from "./color-mode";

export function Provider(props: React.PropsWithChildren) {
	return (
		<ChakraProvider value={system}>
			<ColorModeProvider>{props.children}</ColorModeProvider>
		</ChakraProvider>
	);
}
