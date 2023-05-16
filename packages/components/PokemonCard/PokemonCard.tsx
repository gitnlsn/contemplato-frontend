import { PokemonEntry } from "@/packages/pokemon/interfaces/PokemonEntry";
import React from "react";
import styles from "./PokemonCard.module.css";

interface PokemonCardProps {
  pokemonEntry: PokemonEntry;
}

export const PokemonCard: React.FC<PokemonCardProps> = ({ pokemonEntry }) => {
  return (
    <article className={styles["pokemon-card"]}>
      <p className={styles["pokemon-card-title"]}>
        {pokemonEntry.pokemon_species.name}
      </p>
    </article>
  );
};
