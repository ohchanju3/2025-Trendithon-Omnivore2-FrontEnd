import * as S from "./Header.styled";

const Header = () => {
  return (
    <S.HeaderWrapper>
      <S.HeaderLogoImg src="/images/header/HeaderLogoLeft.png" />
      <S.HeaderLogoImg src="/images/header/HeaderLogo.png" />
      <S.HeaderLogoImg src="/images/header/HeaderLogoRight.png" />
    </S.HeaderWrapper>
  );
};

export default Header;
