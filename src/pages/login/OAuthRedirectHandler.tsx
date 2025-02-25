import { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

interface LoginToken {
  accessToken: string;
  refreshToken: string;
}

const OAuthRedirectHandler = () => {
  const { provider } = useParams();
  const navigate = useNavigate();
  const [loginToken, setLoginToken] = useState<LoginToken>({
    accessToken: "",
    refreshToken: "",
  });

  useEffect(() => {
    const urlParams = new URLSearchParams(window.location.search);
    const code = urlParams.get("code");

    if (code && provider) {
      getToken(code, provider);
    }
  }, [provider]);

  useEffect(() => {
    if (loginToken.accessToken) {
      localStorage.setItem("accessToken", loginToken.accessToken);
      localStorage.setItem("refreshToken", loginToken.refreshToken);

      navigate("/intro");
      window.location.reload();
    }
  }, [loginToken, navigate]);

  const getToken = async (authCode: string, provider: string) => {
    try {
      const idTokenResponse = await axios.get(
        `${
          import.meta.env.VITE_API_BASE_URL
        }/api/oauth2/callback/${provider}?code=${authCode}`
      );

      const tokenResponse = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/${provider}/token`,
        {
          authCode: idTokenResponse.data.idToken,
        }
      );

      if (tokenResponse.data) {
        setLoginToken(tokenResponse.data.data);
      }
    } catch (error) {
      console.error("토큰을 가져오는데 실패했습니다:", error);
    }
  };
  //Todo: 로딩 컴포넌트 생성
  return <div>로딩 중</div>;
};

export default OAuthRedirectHandler;
