import * as S from "./styled";

const Header = () => {
  return (
    <div>
      <S.WrapperInput type="text" placeholder="Search pokemon"></S.WrapperInput>
      <S.WrapperButton> search</S.WrapperButton>
    </div>
  );
};

export default Header;
