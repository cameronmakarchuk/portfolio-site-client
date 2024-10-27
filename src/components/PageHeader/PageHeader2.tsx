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
		<Center position="relative">
			<Flex
				position="fixed"
				top={{ base: "6", tablet: "10", desktop: "20" }}
				zIndex="999999"
				justifyContent="space-evenly"
				bgGradient="to-t"
				gradientFrom="primary.purple"
				gradientTo="primary.lightblue"
				backdropBlur="30px"
				width={{
					base: "190px",
					mobile: "50vw",
					desktop: "60vw",
				}}
				paddingY={{ base: "0.25rem", tablet: "0.5rem" }}
				paddingX={{ base: "0.5rem", tablet: "0.75rem", desktop: "1.5rem" }}
				borderRadius="1.25rem"
				marginBottom="2rem"
			>
				<ChakraLink
					_hover={{ color: "primary.white", textDecoration: "none" }}
					m={0}
					color="primary.grey"
					fontWeight={400}
					fontSize={{ base: "0.95rem", tablet: "1.15rem", desktop: "1.5rem" }}
					asChild
				>
					<RouterLink to="/">Home</RouterLink>
				</ChakraLink>
				<ChakraLink
					_hover={{ color: "primary.white", textDecoration: "none" }}
					m={0}
					color="primary.grey"
					fontWeight={400}
					fontSize={{ base: "0.95rem", tablet: "1.15rem", desktop: "1.5rem" }}
					asChild
				>
					<RouterLink to="/about">About</RouterLink>
				</ChakraLink>
				<ChakraLink
					_hover={{ color: "primary.white", textDecoration: "none" }}
					m={0}
					color="primary.grey"
					fontWeight={400}
					fontSize={{ base: "0.95rem", tablet: "1.15rem", desktop: "1.5rem" }}
					asChild
				>
					<RouterLink to="/contact">Contact</RouterLink>
				</ChakraLink>
			</Flex>
		</Center>
	);
}
