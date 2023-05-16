import { PokemonEntry } from "./interfaces/PokemonEntry";

interface FetchPokemonResponse {
  pokemon_entries: PokemonEntry[];
}

export const fetchPokemon = () =>
  fetch("https://pokeapi.co/api/v2/pokedex/2", {
    method: "get",
  }).then((response) => response.json() as Promise<FetchPokemonResponse>);
