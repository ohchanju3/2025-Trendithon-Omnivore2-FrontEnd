import { Outlet, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 100%;
  max-width: 560px;
  background: linear-gradient(#4e4376, #f5e1c8);
`;

const RootLayout = () => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  console.log;

  useEffect(() => {
    if (!accessToken) {
      navigate("/login", { replace: true });
    } else navigate("/digitalCake");
  }, [accessToken, navigate]);

  return (
    <Wrapper>
      <Outlet />
    </Wrapper>
  );
};

export default RootLayout;
