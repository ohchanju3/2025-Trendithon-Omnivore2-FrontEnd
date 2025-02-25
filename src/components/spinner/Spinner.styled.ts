import styled from "styled-components";

export const SpinnerBackground = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;

  position: absolute;
  transform: translate(-50%, -50%);
  top: 50%;
  left: 50%;
  z-index: 40;
  width: 100%;
  height: 100vh;
  background-color: rgb(15 15 15 / 70%);
`;

export const SpinerContent = styled.div`
  width: 48px;
  height: 48px;
  border: 5px solid;
  border-color: #fff;
  border-bottom-color: #4e4376;
  border-radius: 50%;
  animation: rotation 1s linear infinite;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
`;
