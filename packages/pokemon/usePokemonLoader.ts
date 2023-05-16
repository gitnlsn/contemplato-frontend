import { useCallback, useEffect, useState } from "react";
import { PokemonEntry } from "./interfaces/PokemonEntry";
import { LoadingState } from "../utils/LoadingState";
import { fetchPokemon } from "./fetchPokemon";

interface HookState {
  pokemonEntries: PokemonEntry[];
  loadingState: LoadingState;
}

interface UsePokemonLoaderProps {
  shouldLoad?: boolean;
}

export const usePokemonLoader = ({
  shouldLoad = true,
}: UsePokemonLoaderProps) => {
  const [data, setData] = useState<HookState>({
    pokemonEntries: [],
    loadingState: LoadingState.idle,
  });

  const forceLoad: typeof fetchPokemon = useCallback(() => {
    setData((current) => ({
      pokemonEntries: current.pokemonEntries,
      loadingState: LoadingState.loading,
    }));

    const promise = fetchPokemon();

    promise
      .then((data) => {
        setData({
          pokemonEntries: data.pokemon_entries,
          loadingState: LoadingState.success,
        });
      })
      .catch((error) => {
        console.error(error);
        setData({
          pokemonEntries: [],
          loadingState: LoadingState.error,
        });
      });

    return promise;
  }, []);

  useEffect(() => {
    if (shouldLoad) {
      forceLoad().catch(null);
    }
  }, [forceLoad, shouldLoad]);

  return {
    ...data,
    forceLoad,
  };
};
