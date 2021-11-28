import styled from "styled-components";

export const WrapperPokeImg = styled.img`
  width: 300px;
`;

export const WrapperPokeTypes = styled.ul``;

export const WrapperPokeType = styled.li`
  text-align: center;
  text-transform: uppercase;
  padding: 5px;
  border-radius: 6px;
  color: #f2f2f2;

  &.ghost {
    background-color: #66b;
  }
  &.poison {
    background-color: #a59;
  }
  &.normal {
    background-color: #aa9;
  }
  &.fire {
    background-color: #f42;
  }
  &.water {
    background-color: #39f;
  }
  &.electric {
    background-color: #fc3;
  }
  &.grass {
    background-color: #7c5;
  }
  &.ice {
    background-color: #6cf;
  }
  &.fighting {
    background-color: #b54;
  }
  &.ground {
    background-color: #db5;
  }
  &.flying {
    background-color: #89f;
  }
  &.psychic {
    background-color: #f59;
  }
  &.bug {
    background-color: #ab2;
  }
  &.rock {
    background-color: #ba6;
  }
  &.dragon {
    background-color: #76e;
  }
  &.dark {
    background-color: #754;
  }
  &.steel {
    background-color: #aab;
  }
  &.fairy {
    background-color: #e9e;
  }
`;

export const WrapperPokeAbilitie = styled.li``;

export const WrapperPokeMain = styled.div`
  display: flex;
`;

export const WrapperTypeAbilitie = styled.div`
  width: 200px;
  display: flex;
  margin: 10px 10px 10px 30px;
  justify-content: space-between;

  li {
    margin: 5px 0px 0px 0px;
  }
`;

export const WrapperName = styled.div`
  display: flex;
  p {
    margin: 10px;
  }
`;

export const WrapperNameTA = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;
