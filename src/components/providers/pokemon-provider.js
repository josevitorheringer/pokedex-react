import React, { createContext, useCallback, useState } from "react";
import { apiPokemon, apiPokemonSpecies } from "../../services/api";

export const PokemonContext = createContext({
  pokemon: [],
});

const PokemonProvider = ({ children }) => {
  const [pokemonState, setPokemonState] = useState({
    loading: true,
    pokemonVarieties: [],
  });

  const getPokemon = (pokemon) => {
    var pokeData = [];
    apiPokemonSpecies
      .get(`/${pokemon}`)
      .then((response) => {
        response.data.varieties.map(async (i) => {
          return await apiPokemon.get(i.pokemon.name).then(async (res) => {
            let { id, name, abilities, types, sprites } = res.data;
            pokeData.push({ id, name, abilities, types, sprites });
            setPokemonState({ loading: true, pokemonVarieties: pokeData });
          });
        });
      })
      .catch((err) => {
        console.log(err);
      });
    setPokemonState({ loading: false, pokemonVarieties: pokeData });
  };

  const contextValue = {
    pokemonState,
    getPokemon: useCallback((pokemon) => {
      getPokemon(pokemon);
    }, []),
  };

  return (
    <PokemonContext.Provider value={contextValue}>
      {children}
    </PokemonContext.Provider>
  );
};

export default PokemonProvider;
