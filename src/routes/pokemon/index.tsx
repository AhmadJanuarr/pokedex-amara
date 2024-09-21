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

  const { data, fetchPokemon, isLoading } = usePokemon();

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
          <motion.div animate={isOpen ? "open" : "closed"} variants={variants}>

            <Flex>
              <Heading size="lg" color="gray" mr={2} >
                Search your favorite Pokémon
              </Heading>
              <Popover >
                <PopoverTrigger>
                  <Button size={"sm"} variant={"outline"} ><Icon as={FiBookOpen} px={1} w={6} h={6} />info pokemon</Button>
                </PopoverTrigger>
                <PopoverContent>
                  <PopoverArrow />
                  <PopoverCloseButton />
                  <PopoverHeader>Confirmation!</PopoverHeader>
                  <PopoverBody>Are you sure you want to have that milkshake?</PopoverBody>
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
          ) : (
            data && <PokemonCard data={data} />
          )}
        </Center>
      </Flex>
    </Container>
  );
}
