import React from "react";
import * as S from "./styled";

const PokemonInfo = (props) => {
  const { id, name, abilities, types, sprites } = props.pokemonData;

  return (
    <>
      <S.WrapperPokeMain>
        <S.WrapperPokeImg src={sprites.front_default} />
        <S.WrapperNameTA>
          <S.WrapperName>
            <p>{`#${id}`}</p>
            <p>{name}</p>
          </S.WrapperName>
          <S.WrapperTypeAbilitie>
            <div>
              <h3>Type</h3>
              <S.WrapperPokeTypes>
                {types.map((i) => (
                  <S.WrapperPokeType key={i.slot} className={i.type.name}>
                    {i.type.name}
                  </S.WrapperPokeType>
                ))}
              </S.WrapperPokeTypes>
            </div>
            <div>
              <h3>Abilities</h3>
              <S.WrapperPokeTypes>
                {abilities.map((i, index) => (
                  <S.WrapperPokeAbilitie key={index}>
                    {i.ability.name}
                  </S.WrapperPokeAbilitie>
                ))}
              </S.WrapperPokeTypes>
            </div>
          </S.WrapperTypeAbilitie>
        </S.WrapperNameTA>
      </S.WrapperPokeMain>
    </>
  );
};
export default PokemonInfo;
