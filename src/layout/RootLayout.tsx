import { Outlet } from "react-router-dom";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  // Todo: 추후 화면 최대 너비 확인 후 변경 필요
  max-width: 560px;
  height: 100vh;
  background: linear-gradient(#4e4376, #f5e1c8);
`;

const RootLayout = () => {
  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

export default RootLayout;
