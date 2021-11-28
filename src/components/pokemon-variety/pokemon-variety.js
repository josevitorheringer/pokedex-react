import * as S from "./styled";
import PokemonInfo from "../pokemon-info/pokemon-info";
import usePokemon from "../hooks/pokemon-hooks";

const PokemonVariety = () => {
  const { pokemonState } = usePokemon();
  const { pokemonVarieties } = pokemonState;

  return (
    <S.WrapperPokeInformations>
      <S.WrapperCard>
        <S.WrapperTabs
          selectedTabClassName="is-selected"
          selectedTabPanelClassName="is-selected"
        >
          <S.WrapperTabList>
            {pokemonVarieties.map((pokemonData) => (
              <S.WrapperTab key={pokemonData.id}>
                {pokemonData.name}
              </S.WrapperTab>
            ))}
          </S.WrapperTabList>

          {pokemonVarieties.map((pokemonData) => (
            <S.WrapperTabPanel key={pokemonData.id}>
              <PokemonInfo pokemonData={pokemonData} />
            </S.WrapperTabPanel>
          ))}
        </S.WrapperTabs>
      </S.WrapperCard>
    </S.WrapperPokeInformations>
  );
};
export default PokemonVariety;
