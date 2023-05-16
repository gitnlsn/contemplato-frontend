import type { Meta, StoryObj } from "@storybook/react";

import { PokemonCard } from "../packages/components/PokemonCard/PokemonCard";

const meta: Meta<typeof PokemonCard> = {
  title: "PokemonCard",
  component: PokemonCard,
};

export default meta;
type Story = StoryObj<typeof PokemonCard>;

export const Primary: Story = {
  args: {
    pokemonEntry: {
      entry_number: 1,
      pokemon_species: {
        name: "Pikachu",
        url: "",
      },
    },
  },
};
