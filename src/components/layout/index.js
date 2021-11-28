import Header from "../header/header";
import * as S from "./styled";

const Layout = ({ children }) => {
  return (
    <>
      <S.WrapperHeader>
        <Header />
      </S.WrapperHeader>
      {children}
    </>
  );
};

export default Layout;
