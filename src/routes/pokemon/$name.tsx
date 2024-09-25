import { createFileRoute } from "@tanstack/react-router";
import { useEffect } from "react";
import { usePokemon } from "../../api/pokemon";
import { Link } from "@tanstack/react-router";
import {
    Breadcrumb,
    BreadcrumbItem,
    BreadcrumbLink,
    Button,
    Card,
    CardBody,
    CardFooter,
    Center,
    Container,
    Heading,
    Image,
    Spinner,
    Stack,
    Table,
    TableContainer,
    Td,
    Th,
    Tr,
} from "@chakra-ui/react";

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
        return (
            <Center w={{ base: "100%" }} pt={{ base: "70%", xl: "20%" }}>
                <Spinner
                    thickness="4px"
                    speed="0.65s"
                    emptyColor="gray.200"
                    color="blue.500"
                    size="xl"
                />
            </Center>
        );
    }

    if (!data) {
        return <Heading size="lg">No data found</Heading>;
    }

    return (
        <Container maxW="container.md">
            <Heading size="lg" py={5}>
                You are looking for: {name}
            </Heading>
            <Breadcrumb py={5}>
                <BreadcrumbItem>
                    <Link to="/">
                        <BreadcrumbLink>home</BreadcrumbLink>
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem>
                    <Link to="/pokemon">
                        <BreadcrumbLink href="#">pokemon</BreadcrumbLink>
                    </Link>
                </BreadcrumbItem>
                <BreadcrumbItem isCurrentPage>
                    <BreadcrumbLink href="#">{name}</BreadcrumbLink>
                </BreadcrumbItem>
            </Breadcrumb>
            <Card
                p={5}
                direction={{ base: "column", sm: "row" }}
                overflow="hidden"
                variant="outline"
            >
                <Image
                    objectFit="cover"
                    boxSize="20em"
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
