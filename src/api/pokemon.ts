import axios from "axios";
import { useState } from "react";

// Define PokemonDetail type
export type PokemonDetail = {
    name: string;
    id: number;
    height: number;
    weight: number;
    base_experience: number;
    sprites: {
        front_default: string;
    };
};

// Custom hook to fetch Pokemon data
export function usePokemon() {
    const [isLoading, setIsLoading] = useState(false);
    const [data, setData] = useState<PokemonDetail | null>(null);
    const [error, setError] = useState<boolean>(false);


    const fetchPokemon = async (search: string) => {
        setIsLoading(true);
        try {
            const response = await axios.get(`${import.meta.env.VITE_POKEMON_API}${search}`);
            setTimeout(() => {
                setData(response.data);
                setIsLoading(false);
            }, 3000);
        } catch (error) {
            setTimeout(() => {
                console.error(error);
                setError(true);
                setIsLoading(false);
            }, 2000)

        }
    };

    return { data, fetchPokemon, isLoading, error };
}
