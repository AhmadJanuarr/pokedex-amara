import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react"; // Tambahkan useEffect untuk memanggil fetching data
import { usePokemon } from "../../api/pokemon"; // Import hook untuk fetch data
import { Button, Card, CardBody, CardFooter, Container, Heading, Image, Stack, Table, TableContainer, Td, Th, Tr } from "@chakra-ui/react";

export const Route = createFileRoute("/pokemon/$name")({
    component: Pokemon,
});

function Pokemon() {
    const { name } = Route.useParams();
    const { data, fetchPokemon, isLoading } = usePokemon();

    useEffect(() => {
        if (name) {
            fetchPokemon(name);
        }
    }, [name]);

    if (isLoading) {
        return <Heading size="lg">Loading...</Heading>;
    }

    if (!data) {
        return <Heading size="lg">No data found</Heading>;
    }

    return (
        <Container maxW="container.md">
            <Heading size="lg" p={5}>You are looking for: {name}</Heading>
            <Card p={5}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
            >
                <Image
                    objectFit="cover"
                    boxSize='20em'
                    src={data.sprites.front_default}
                    alt={data.name}
                />
                <Stack>
                    <CardBody>
                        <TableContainer maxWidth="300px">
                            <Table border={1}>
                                <Tr>
                                    <Th>Name</Th>
                                    <Td>{data.name}</Td>
                                </Tr>
                                <Tr>
                                    <Th>Height</Th>
                                    <Td>{data.height}</Td>
                                </Tr>
                                <Tr>
                                    <Th>Weight</Th>
                                    <Td>{data.weight}</Td>
                                </Tr>
                                <Tr>
                                    <Th>Base Experience</Th>
                                    <Td>{data.base_experience}</Td>
                                </Tr>
                            </Table>
                        </TableContainer>
                    </CardBody>

                    <CardFooter>
                        <Button variant="solid" colorScheme="green">
                            Check Stats
                        </Button>
                    </CardFooter>
                </Stack>
            </Card>
        </Container>
    );
}

export default Pokemon;
