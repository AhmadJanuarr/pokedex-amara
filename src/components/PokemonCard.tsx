import { CardPokemon } from "./Card";
import { PokemonDetail } from "../api/pokemon";
import { Box } from "@chakra-ui/react";

interface PokemonCardProps {
    data: PokemonDetail;
}

export const PokemonCard = ({ data }: PokemonCardProps) => {
    return (
        <Box key={data.id} w={"32em"} >
            <CardPokemon
                id={data.id}
                sprites={data.sprites}
                name={data.name}
                height={data.height}
                weight={data.weight}
                base_experience={data.base_experience}
            />
        </Box>
    );
};