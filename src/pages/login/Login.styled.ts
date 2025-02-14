import styled from "styled-components";

export const LoginWrapper = styled.div`
  display: flex;
  flex-direction: column;
  color: white;
  border: 1px solid red;
  height: 100%;
  align-items: center;
  line-height: 22px;
`;

export const LoginLogoTextContainer = styled.section`
  margin-top: 3rem;
  gap: 1.25rem;
  display: flex;
  flex-direction: column;
  text-align: center;
`;

export const LoginIntroText = styled.p`
  font-size: 1.5rem;
`;

export const LoginLogoDes = styled.h1`
  font-size: 2.25rem;

  span.purple {
    color: #d7b0ff;
  }
`;

export const LoginLogo = styled.h1`
  font-size: 2.25rem;
  color: #d7b0ff;
`;

export const LoginCakeImg = styled.img`
  width: 250px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate3d(-50%, -50%, 0);
`;

export const LoginImgContainer = styled.section`
  display: flex;
  flex-direction: column;
  position: absolute;
  align-items: center;
  bottom: 0;
  margin-bottom: 3rem;
  gap: 5px;
`;

export const LoginBtn = styled.img`
  cursor: pointer;
  width: 280px;
`;
