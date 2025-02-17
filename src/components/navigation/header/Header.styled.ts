import styled from "styled-components";

export const HeaderWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 4rem;
  padding: 1rem;
  max-width: 560px;
  justify-content: center;
  position: relative;
`;

export const HeaderContainer = styled.div`
  display: flex;
  width: 80%;
  justify-content: space-between;
  align-items: center;
  margin-top: 1.5rem;
`;

export const HeaderLogoImg = styled.img`
  cursor: pointer;

  &:first-child {
    width: 20px;
    height: 22px;
  }
  &:nth-child(2) {
    width: 72px;
    height: 40px;
  }
  &:nth-child(3) {
    width: 24px;
    height: 14px;
  }
`;
export const Overlay = styled.div`
  position: absolute;
  height: 100vh;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background-color: rgba(0, 0, 0, 0.5);
  z-index: 50;
`;
export const Navbar = styled.div`
  position: absolute;
  right: 0;
  top: 0;
  width: 200px;
  height: 100vh;
  background-color: #726688;
  flex-direction: column;
  padding-top: 20px;
  z-index: 100;
`;

export const HeaderNavLogo = styled.img`
  width: 10%;
  display: flex;
  justify-content: end;
  align-items: end;
  right: 0;
  position: absolute;
  margin-right: 1rem;
`;

export const NavItemContainer = styled.section`
  display: flex;
  flex-direction: column;
  margin-top: 1.5rem;
`;

export const NavItem = styled.div`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 15px;
  font-size: 20px;
  text-shadow: 2px 2px 5px white;
  cursor: pointer;

  &:hover {
    background-color: white;
  }

  img {
    width: 24px;
  }
`;
