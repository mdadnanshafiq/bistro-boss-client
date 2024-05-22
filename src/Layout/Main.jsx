import { Outlet, useLocation } from "react-router-dom";
import Footer from "../Pages/Home/Shared/Footer";
import Nav from "../Pages/Home/Shared/Nav";

const Main = () => {
  const location = useLocation();
  const noHF = location.pathname.includes("signin");
  return (
    <div>
      {noHF || <Nav></Nav>}
      <Outlet></Outlet>
      {noHF || <Footer></Footer>}
    </div>
  );
};

export default Main;
