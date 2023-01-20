import { Outlet } from "react-router-dom";
import Footer from "../components/helpers/Footer";
import Header from "../components/helpers/Header";

const Layout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  )
};

export default Layout;