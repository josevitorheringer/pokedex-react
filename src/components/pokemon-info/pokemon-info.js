import React from "react";
import * as S from "./styled";

const PokemonInfo = (props) => {
  return (
    <>
      <S.WrapperPokeMain>
        <S.WrapperPokeImg src={props.image} />
        <section>
          <p>94</p>
          <p>{props.name}</p>
        </section>
        <div>
          <h3>Types</h3>
          <S.WrapperPokeTypes>
            <li>Ghost</li>
            <li>Poison</li>
          </S.WrapperPokeTypes>
        </div>
        <div>
          <h3>Abilities</h3>
          <S.WrapperPokeTypes>
            <li>Cursed Body</li>
          </S.WrapperPokeTypes>
        </div>
      </S.WrapperPokeMain>
    </>
  );
};
export default PokemonInfo;
