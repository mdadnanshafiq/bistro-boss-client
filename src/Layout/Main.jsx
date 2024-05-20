import { Outlet } from "react-router-dom";
import Footer from "../Pages/Home/Shared/Footer";
import Nav from "../Pages/Home/Shared/Nav";

const Main = () => {
  return (
    <div>
      <Nav></Nav>
      <Outlet></Outlet>
      <Footer></Footer>
    </div>
  );
};

export default Main;
