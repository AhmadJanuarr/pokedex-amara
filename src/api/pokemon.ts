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

export async function getPokemon(name: string) {
    try {
        const response = await fetch(`${import.meta.env.VITE_POKEMON_API}${name}`);
        const data = await response.json();
        return data;
    } catch (error) {
        console.log(error);
    }

}