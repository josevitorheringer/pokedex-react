import React, { createContext, useState } from "react";

export const PokemonContext = createContext({
  pokemon: {},
});

const PokemonProvider = ({ children }) => {
  const [pokemonState, setPokemonState] = useState({
    name: undefined,
    pokedexNumber: undefined,
    pokedexDescription: undefined,
    types: [],
    img: undefined,
    stats: [],
  });

  const contextValue = {};

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
