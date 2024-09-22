"use client";

import {
    Box,
    Flex,
    Button,
    Menu,
    MenuButton,
    Stack,
    useColorMode,
    Heading,
    Link
} from "@chakra-ui/react";
import { MoonIcon, SunIcon, Icon } from "@chakra-ui/icons";
import { BiLogoGithub } from "react-icons/bi";
import { Link as RouterLink } from "@tanstack/react-router";

export function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Box px={4}>
            <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                <Heading fontSize={"xl"}>
                    <RouterLink to="/">Pokedex amara </RouterLink>
                </Heading>

                <Flex alignItems={"center"}>
                    <Stack direction={"row"} spacing={7}>
                        <Button onClick={toggleColorMode} variant="ghost">
                            {colorMode === "light" ? (
                                <MoonIcon w={6} h={6} />
                            ) : (
                                <SunIcon w={6} h={6} />
                            )}
                        </Button>

                        <Menu>
                            <Link href="https://github.com/AhmadJanuarr" isExternal>
                                <MenuButton>
                                    <Icon as={BiLogoGithub} w={10} h={10} />
                                </MenuButton>
                            </Link>
                        </Menu>
                    </Stack>
                </Flex>
            </Flex>
        </Box>
    );
}
