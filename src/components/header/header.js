import * as S from "./styled";
import usePokemon from "../hooks/pokemon-hooks";
import { useState } from "react/cjs/react.development";

const Header = () => {
  const { getPokemon } = usePokemon();
  const [pokemonForSearch, setPokemonForSearch] = useState();

  const submitGetPokemon = () => {
    if (!pokemonForSearch) return;
    return getPokemon(pokemonForSearch);
  };
  return (
    <header>
      <S.WrapperInput
        type="text"
        placeholder="Search pokemon"
        onChange={(e) => setPokemonForSearch(e.target.value.toLowerCase())}
      ></S.WrapperInput>
      <S.WrapperButton onClick={submitGetPokemon}> search</S.WrapperButton>
    </header>
  );
};

export default Header;
