import { createFileRoute } from "@tanstack/react-router";
import {
  Container,
  Box,
  Flex,
  Heading,
  Spinner,
  Center,
  Popover,
  PopoverTrigger,
  Button,
  PopoverContent,
  PopoverArrow,
  PopoverCloseButton,
  PopoverHeader,
  PopoverBody,
} from "@chakra-ui/react";
import { useState } from "react";
import { motion } from "framer-motion";
import { SearchForm } from "../../components/SearchForm";
import { PokemonCard } from "../../components/PokemonCard";
import { FiBookOpen } from "react-icons/fi";
import { Icon } from "@chakra-ui/react";
import { usePokemon } from "../../api/pokemon";

export const Route = createFileRoute("/pokemon/")({
  component: Pokemon,
});

const variants = {
  open: { y: "-350%", transition: { duration: 0.4 } },
  closed: { y: 0 },
};

function Pokemon() {
  const [isOpen, setIsOpen] = useState(false);
  const { data, fetchPokemon, isLoading, error } = usePokemon();


  const handleSearchSubmit = (search: string) => {
    setIsOpen((isOpen) => !isOpen);
    fetchPokemon(search);
  };


  return (
    <Container maxW="container.lg">
      <Flex
        justifyContent="center"
        alignItems="center"
        position={"relative"}
        minHeight={"85vh"}
      >
        <Box w="580px" position={"absolute"} top="45%">
          <motion.div animate={isOpen && "open"} variants={variants}>
            <Flex>
              <Heading size="lg" color="gray" mr={2} >
                Search your favorite Pokémon
              </Heading>
              <Popover  >
                <PopoverTrigger>
                  <Button size={"sm"} variant={"none"} color={"gray"} ><Icon as={FiBookOpen} px={1} w={6} h={6} />info pokemon</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Pokemon list</PopoverHeader>
                  <PopoverBody>w</PopoverBody>
                </PopoverContent>
              </Popover>
            </Flex>
            <SearchForm onSubmit={handleSearchSubmit} />
          </motion.div>
        </Box>{" "}
        <Center w={"700px"}>
          {isLoading ? (
            <Spinner
              thickness="4px"
              speed="0.65s"
              emptyColor="gray.200"
              color="blue.500"
              size="xl"
            />
          ) : error ? (
            <Heading size="lg" color="red.500">
              Pokemon not found
            </Heading>
          ) : data ? (
            <PokemonCard data={data} />
          ) : null}
        </Center>
      </Flex>
    </Container>
  );
}
