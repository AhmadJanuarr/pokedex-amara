import {
  Button,
  Center,
  Container,
  Flex,
  Heading,
  Image,
  Text,
} from "@chakra-ui/react";
import { createFileRoute, Link } from "@tanstack/react-router";

export const Route = createFileRoute("/")({
  component: HomePage,
});

function HomePage() {
  // const navigate = useNavigate()

  return (
    <Container maxW={"container.sm"}>
      <Center h={{ base: "550px", lg: "800px" }} >
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={2}
        >
          <Image src="/image/pikachu.png" w={{ base: "200px", lg: "300px" }} />
          <Heading color={"gray.800"}>Welcome to Pokedex</Heading>
          <Text fontSize={"lg"}>Find your favorite pokemon</Text>
          <Link to="/pokemon">
            <Button colorScheme="gray">Get Started</Button>
          </Link>
        </Flex>
      </Center>
    </Container>
  );
}
