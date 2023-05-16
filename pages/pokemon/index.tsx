import React, { useContext } from "react";
import { NavHeader } from "@/packages/components/NavHeader/NavHeader";
import { NavPages } from "@/packages/config/NavPages";
import { useRedirectOnSessionExpired } from "@/packages/login/useRedirectOnSessionExpired";
import { usePokemonLoader } from "@/packages/pokemon/usePokemonLoader";
import { LoadingBar } from "@/packages/components/LoadingBar/LoadingBar";
import { LoadingState } from "@/packages/utils/LoadingState";
import styles from "./index.module.css";
import { PokemonCard } from "@/packages/components/PokemonCard/PokemonCard";
import { LoginContext } from "@/packages/login/LoginContext";

const Pokemon: React.FC = () => {
  const { token } = useContext(LoginContext);
  useRedirectOnSessionExpired("/");

  const { pokemonEntries, loadingState } = usePokemonLoader({
    shouldLoad: token !== null,
  });

  return (
    <main>
      <NavHeader navItems={NavPages} />
      <section className={styles["pokemon-section"]}>
        <LoadingBar height={2} active={loadingState === LoadingState.loading} />
        <div className={styles["pokemon-cards-container"]}>
          {pokemonEntries.map((entry) => (
            <PokemonCard key={entry.entry_number} pokemonEntry={entry} />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Pokemon;
