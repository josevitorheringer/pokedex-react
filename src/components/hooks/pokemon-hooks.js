import { useContext } from "react";
import { PokemonContext } from "../providers/pokemon-provider";

const usePokemon = () => {
  const { pokemonState, getPokemon } = useContext(PokemonContext);

  return { pokemonState, getPokemon };
};

export default usePokemon;
