import { Box, Text } from "@chakra-ui/react";

export function Footer() {
    return (
        <Box as="footer" py={4} color="black" textAlign="center" >
            <Text>
                &copy; {new Date().getFullYear()} Pokedex amara. All rights reserved.
            </Text>
        </Box>
    );
}
