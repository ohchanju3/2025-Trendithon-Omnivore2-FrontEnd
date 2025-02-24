import { useNavigate } from "react-router-dom";
import { useState } from "react";
import * as S from "./Header.styled";

const Header = () => {
  const navigate = useNavigate();
  const [isNavOpen, setIsNavOpen] = useState(false);
  const [hasNotification, setHasNotification] = useState(true);

  const handleLeftLogoClick = () => {
    navigate("/mypage");
  };

  const handleLogoClick = () => {
    navigate("/dailyCake");
  };

  const handleRightLogoClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  const handleNavItemClick = (path: string) => {
    setIsNavOpen(false);
    navigate(path);
  };

  return (
    <S.HeaderWrapper>
      <S.HeaderContainer>
        {/* <S.HeaderLogoImgWrapper> */}
        <S.HeaderLogoImg
          src="/images/header/HeaderLogoLeft.png"
          onClick={handleLeftLogoClick}
        />
        <S.HeaderLogoImg
          src="/images/header/HeaderLogo.png"
          onClick={handleLogoClick}
        />
        <S.HeaderLogoImg
          src="/images/header/HeaderLogoRight.png"
          onClick={handleRightLogoClick}
        />
        {hasNotification && <S.NotificationDot />}
        {/* </S.HeaderLogoImgWrapper> */}
      </S.HeaderContainer>

      {isNavOpen && <S.Overlay onClick={handleRightLogoClick} />}
      {isNavOpen && (
        <S.Navbar>
          <S.HeaderNavLogo
            src="/images/header/HeaderLogoRight.png"
            onClick={handleRightLogoClick}
          />
          <S.NavItemContainer>
            <S.NavItem onClick={() => handleNavItemClick("/digitalCake")}>
              <img src="/images/header/navlogo1.png" />
              <span>My Cake</span>
            </S.NavItem>
            <S.NavItem onClick={() => handleNavItemClick("/dailyCake")}>
              <img src="/images/header/navlogo2.png" />
              <span>My Cupcake</span>
            </S.NavItem>
            <S.NavItem onClick={() => handleNavItemClick("/social")}>
              <img src="/images/header/navlogo3.png" />
              <span>Social</span>
            </S.NavItem>
          </S.NavItemContainer>
        </S.Navbar>
      )}
    </S.HeaderWrapper>
  );
};

export default Header;
