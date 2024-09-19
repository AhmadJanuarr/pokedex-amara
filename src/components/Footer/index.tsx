import { Box, Text } from "@chakra-ui/react";

export function Footer() {
    return (
        <Box
            as="footer"
            width="100%"
            padding="4"
            backgroundColor="gray.100"
            color="black"
            textAlign="center"
        >
            <Text>
                &copy; {new Date().getFullYear()} Pokedex amara. All rights reserved.
            </Text>
        </Box>
    );
}
