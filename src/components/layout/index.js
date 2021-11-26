//import api from "../../services/api";
import Header from "../header/header";

const Layout = ({ children }) => {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
};

export default Layout;
