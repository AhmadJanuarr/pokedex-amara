import { createFileRoute } from "@tanstack/react-router";
import {
  Container,
  Box,
  Flex,
  Heading,
  Spinner,
  Center,
  Button,
  useDisclosure,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Text,
  useBreakpointValue, // Tambahkan ini
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { SearchForm } from "../../components/SearchForm";
import { PokemonCard } from "../../components/PokemonCard";
import { usePokemon } from "../../api/pokemon";
import axios from "axios";

export const Route = createFileRoute("/pokemon/")({
  component: Pokemon,
});

function Pokemon() {
  const [isMove, setIsMove] = useState(false);
  const [name, setName] = useState<{ name: string }[]>([]);
  const { data, fetchPokemon, isLoading, error } = usePokemon();
  const { isOpen, onOpen, onClose } = useDisclosure();
  const size = "xl";


  const yValue = useBreakpointValue({
    base: "-100%",
    md: "-200%",
    xl: "-300%",
  });

  const variants = {
    move: { y: yValue, transition: { duration: 0.4 } },
    stop: { y: 0 },
  };

  const handleSearchSubmit = (search: string) => {
    setIsMove((isMove) => !isMove);
    fetchPokemon(search);
  };

  const fetchingDataName = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_POKEMON_API}?limit=100&offset=0`);
      const data = await response.data;
      setName(data.results);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchingDataName();
  }, []);

  return (
    <Container maxW="container.lg">
      <Flex justifyContent="center" alignItems="center" position="relative" minHeight="85vh">
        <Box
          w={{ base: "360px", xl: "580px" }} // Responsive width
          position="absolute"
          top={{ base: "30%", xl: "45%" }} // Responsive positioning
        >
          {/* Responsive animasi menggunakan framer motion */}
          <motion.div animate={isMove && "move"} variants={variants}>
            <Flex>
              <Heading size="lg" color="gray" mr={2}>
                Search your favorite Pokémon
              </Heading>
              <Button onClick={onOpen} variant="outline" size="sm">
                Pokemon list
              </Button>
              <Modal isOpen={isOpen} onClose={onClose} size={size}>
                <ModalOverlay />
                <ModalContent>
                  <ModalHeader>Pokemon list</ModalHeader>
                  <ModalCloseButton />
                  <ModalBody>
                    <Text>
                      {name &&
                        name.map((item) => (
                          <span key={item.name}>
                            {item.name}
                            {", "}
                          </span>
                        ))}
                    </Text>
                  </ModalBody>
                  <ModalFooter>
                    <Button colorScheme="gray" mr={3} onClick={onClose}>
                      Close
                    </Button>
                  </ModalFooter>
                </ModalContent>
              </Modal>
            </Flex>
            <SearchForm onSubmit={handleSearchSubmit} />
          </motion.div>
        </Box>
        <Center w={{ base: "100%", md: "700px" }} pt={{ base: "70%", md: "0" }}> {/* Responsive width */}
          {isLoading ? (
            <Spinner thickness="4px" speed="0.65s" emptyColor="gray.200" color="blue.500" size="xl" />
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
