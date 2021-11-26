import * as S from "./styled";
import PokemonInfo from "../pokemon-info/pokemon-info";

const PokemonVariety = () => {
  return (
    <>
      <S.WrapperTabs>
        <S.WrapperTabList>
          <S.WrapperTab>Normal</S.WrapperTab>
          <S.WrapperTab>Mega</S.WrapperTab>
          <S.WrapperTab>Gigantamax</S.WrapperTab>
        </S.WrapperTabList>

        <S.WrapperTabPanels>
          <S.WrapperTabPanel>
            <PokemonInfo
              image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/94.png"
              name="Gengar"
            />
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <PokemonInfo
              image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10038.png"
              name="Mega Gengar"
            />
          </S.WrapperTabPanel>
          <S.WrapperTabPanel>
            <PokemonInfo
              image="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/10193.png"
              name="Gengar Gmax"
            />
          </S.WrapperTabPanel>
        </S.WrapperTabPanels>
      </S.WrapperTabs>
    </>
  );
};
export default PokemonVariety;
