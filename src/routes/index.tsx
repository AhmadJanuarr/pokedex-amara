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
      <Center h={"800px"} >
        <Flex
          direction={"column"}
          justifyContent={"center"}
          alignItems={"center"}
          gap={5}
        >
          <Image src="https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExbDQ0Yzl6ZWNkZTh0anppOGk3eDMzZmt0ZWtsdHRrMmg0NG1xYzh3aiZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9cw/ntCOvylMDQ2g8/giphy.gif" w={"300px"} />
          <Heading>Welcome to Pokedex</Heading>
          <Text fontSize={"lg"}>Find your favorite pokemon</Text>
          <Link to="/pokemon">
            <Button colorScheme="teal">Get Started</Button>
          </Link>
        </Flex>
      </Center>
    </Container>
  );
}
