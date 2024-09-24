import { Box, Text, useColorModeValue } from "@chakra-ui/react";

export function Footer() {
    const textColor = useColorModeValue("black", "white"); // Warna hitam untuk light mode, putih untuk dark mode

    return (
        <Box as="footer" py={4} color={textColor} textAlign="center">
            <Text>
                &copy; {new Date().getFullYear()} Pokedex amara. All rights reserved.
            </Text>
        </Box>
    );
}