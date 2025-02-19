import Footer from "@components/navigation/footer/Footer";
import Header from "@components/navigation/header/Header";
import { Outlet } from "react-router-dom";
import * as S from "./Layout.styled";

const DefalutLayout = () => {
  return (
    <S.LayoutWrapper>
      <Header />
      <S.ContentWrapper>
        <Outlet />
      </S.ContentWrapper>
      <Footer />
    </S.LayoutWrapper>
  );
};

export default DefalutLayout;
