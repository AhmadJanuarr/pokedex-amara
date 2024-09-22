import { CardBody, Heading, Image, Stack, Card, CardFooter, Button, Divider, Text } from "@chakra-ui/react";
import { PokemonDetail } from "../../api/pokemon";

export function CardPokemon({ id, sprites, name, height, weight, base_experience }: PokemonDetail) {
    return (
        <Card id={id.toString()} align='center' variant={"outline"}>
            <CardBody>
                <Image
                    src={sprites.front_default}
                    w='200px' h='200px' border={"1px"}
                />
                <Stack mt='6' spacing='3'>
                    <Heading size='md'> Pokemon name : {name}</Heading>

                    <Text color='teal'>
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

                <Button variant='solid' colorScheme='teal'>
                    Check details
                </Button>
            </CardFooter>
        </Card>
    )
}