import { Outlet } from "react-router-dom";
import Footer from "../../shared/Footer/Footer";
import Nav from "../../shared/Nav/Nav";

const Main = () => {
  return (
    <div className="mx-4">
      <Nav />
      <Outlet />
      <Footer />
    </div>
  );
};

export default Main;
