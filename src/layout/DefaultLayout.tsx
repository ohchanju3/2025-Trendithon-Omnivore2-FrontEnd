import Footer from "@components/navigation/footer/Footer";
import Header from "@components/navigation/header/Header";
import { Outlet } from "react-router-dom";

const DefalutLayout = () => {
  return (
    <>
      <Header />
      <Outlet />
      <Footer />
    </>
  );
};

export default DefalutLayout;
