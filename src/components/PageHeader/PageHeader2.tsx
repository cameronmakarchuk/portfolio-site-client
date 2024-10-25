import {
	Box,
	Center,
	Link as ChakraLink,
	Container,
	Flex,
} from "@chakra-ui/react";
import { NavLink as RouterLink } from "react-router-dom";

export default function PageHeader2() {
	return (
		<Center>
			<Flex
				justifyContent="space-around"
				bgColor="green"
				width={{ lg: "lg", md: "md", sm: "sm" }}
				paddingY="0.5rem"
				paddingX="0.75rem"
				borderRadius="1.25rem"
			>
				<ChakraLink fontSize="1.25rem" as={RouterLink}>
					Home
				</ChakraLink>
				<ChakraLink fontSize="1.25rem" as={RouterLink}>
					About
				</ChakraLink>
				<ChakraLink fontSize="1.25rem" as={RouterLink}>
					Contact
				</ChakraLink>
			</Flex>
		</Center>
	);
}
