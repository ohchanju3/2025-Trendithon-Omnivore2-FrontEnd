import * as S from "./Login.styled";

const Login = () => {
  const handleLogin = (provider: "kakao" | "google") => {
    const backendLoginUrl =
      provider === "kakao"
        ? ` https://kauth.kakao.com/oauth/authorize?response_type=code&client_id=${
            import.meta.env.VITE_KAKAO_CLIENT_ID
          }&redirect_uri=${import.meta.env.VITE_KAKAO_REDIRECT_URI}`
        : ` https://accounts.google.com/o/oauth2/v2/auth?client_id=${
            import.meta.env.VITE_GOOGLE_CLIENT_URL
          }&redirect_uri=${
            import.meta.env.VITE_GOOGlE_REDIRECT_URI
          }&response_type=code&scope=https://www.googleapis.com/auth/userinfo.profile https://www.googleapis.com/auth/userinfo.email`;

    window.location.href = backendLoginUrl;
  };
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
          <S.LoginBtn
            src="/images/Login/kakao.png"
            onClick={() => handleLogin("kakao")}
          />
          <S.LoginBtn
            src="/images/Login/google.png"
            onClick={() => handleLogin("google")}
          />
        </S.LoginImgContainer>
      </S.LoginWrapper>
    </>
  );
};

export default Login;
