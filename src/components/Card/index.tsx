import { CardBody, Heading, Image, Stack, Card, CardFooter, Button, Divider, Text } from "@chakra-ui/react";
import { PokemonDetail } from "../../api/pokemon";
import { Link } from '@tanstack/react-router';

export function CardPokemon({ id, sprites, name, height, weight, base_experience }: PokemonDetail) {
    return (
        <Card id={id.toString()} variant={"outline"}>
            <CardBody display='flex' justifyContent='center' flexDirection={"column"}>
                <Image
                    src={sprites.front_default}
                    w='200px' h='200px' alignSelf={"center"}
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'> Pokemon name : {name}</Heading>

                    <Text>
                        Height : {height}
                    </Text>
                    <Text>
                        Weight : {weight}
                    </Text>
                    <Text>
                        Base Experience : {base_experience}
                    </Text>
                </Stack>
            </CardBody>
            <Divider />
            <CardFooter>
                <Link to={`/pokemon/${name}`}>
                    <Button variant='solid' colorScheme='teal'>
                        Check details
                    </Button>
                </Link>

            </CardFooter>
        </Card>
    )
}