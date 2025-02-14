import * as S from "./Login.styled";

const Login = () => {
  return (
    <>
      <S.LoginWrapper>
        <S.LoginLogoTextContainer>
          <S.LoginIntroText>반가워요!</S.LoginIntroText>
          <S.LoginLogoDes>
            내 안의 <span className="purple">반전</span>을 담다
          </S.LoginLogoDes>
          <S.LoginLogo>"Hear Me Out"</S.LoginLogo>
        </S.LoginLogoTextContainer>
        <S.LoginCakeImg src="/images/Login/cake.png" />
        <S.LoginImgContainer>
          {/* Todo: 로그인 link 연결 필요 */}
          <S.LoginBtn src="/images/Login/kakao.png" />
          <S.LoginBtn src="/images/Login/google.png" />
        </S.LoginImgContainer>
      </S.LoginWrapper>
    </>
  );
};

export default Login;
