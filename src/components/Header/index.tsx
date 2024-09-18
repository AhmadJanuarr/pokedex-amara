"use client";

import {
    Box,
    Flex,
    Avatar,
    Button,
    Menu,
    MenuButton,
    Stack,
    useColorMode,
    Container,
    Heading,
    Link,
} from "@chakra-ui/react";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";

export function Header() {
    const { colorMode, toggleColorMode } = useColorMode();
    return (
        <Container maxW={"container.sm"}>
            <Box px={4}>
                <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
                    <Heading fontSize={"xl"}>Pokedex amara</Heading>

                    <Flex alignItems={"center"}>
                        <Stack direction={"row"} spacing={7}>
                            <Button onClick={toggleColorMode}>
                                {colorMode === "light" ? <MoonIcon /> : <SunIcon />}
                            </Button>

                            <Menu>
                                <Link href="https://github.com/AhmadJanuarr" isExternal>
                                    <MenuButton
                                        as={Button}
                                        rounded={"full"}
                                        variant={"link"}
                                        cursor={"pointer"}
                                        minW={0}
                                    >
                                        <Avatar size={"sm"} src={"/public/github.png"} />
                                    </MenuButton>
                                </Link>
                            </Menu>
                        </Stack>
                    </Flex>
                </Flex>
            </Box>
        </Container>
    );
}
