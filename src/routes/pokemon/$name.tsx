import { createFileRoute } from "@tanstack/react-router";
import { getPokemon } from "../../api/pokemon";
import { Button, Card, CardBody, CardFooter, Container, Heading, Image, Stack, Table, TableContainer, Td, Th, Tr } from "@chakra-ui/react";

export const Route = createFileRoute("/pokemon/$name")({
    component: Pokemon,
    loader: async ({ params }) => await getPokemon(params.name),
});

function Pokemon() {
    const { name } = Route.useParams();
    const data = Route.useLoaderData();
    return (
        <Container maxW="container.md " >
            <Heading size="lg" p={5}>You are looking for :{name}</Heading>
            <Card p={5}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
            >
                <Image
                    objectFit="cover"
                    boxSize='20em'
                    src={data.sprites.front_default}
                />
                <Stack >
                    <CardBody >
                        <TableContainer maxWidth="300px" >
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
