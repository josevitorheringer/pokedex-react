import axios from "axios";

export const apiPokemon = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon",
});

export const apiPokemonSpecies = axios.create({
  baseURL: "https://pokeapi.co/api/v2/pokemon-species",
});
