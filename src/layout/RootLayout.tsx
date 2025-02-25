import { Outlet } from "react-router-dom";
import styled from "styled-components";
import ScrollToTop from "@hooks/scrollToTop";

const Wrapper = styled.div`
  width: 100%;
  max-width: 560px;
  background: linear-gradient(#4e4376, #f5e1c8);
`;

const RootLayout = () => {
  return (
    <Wrapper>
      <ScrollToTop />
      <Outlet />
    </Wrapper>
  );
};

export default RootLayout;
