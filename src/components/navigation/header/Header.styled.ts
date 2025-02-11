import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  height: 4rem;
  justify-content: space-around;
  padding: 0.5rem;
  align-items: center;
`;

export const HeaderLogoImg = styled.img`
  &:first-child {
    width: 20px;
    height: 22px;
  }
  &:nth-child(2) {
    width: 86px;
    height: 41px;
  }
  &:nth-child(3) {
    width: 24px;
    height: 14px;
  }
`;
