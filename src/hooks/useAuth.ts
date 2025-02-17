import { useAtom } from "jotai";
import { useMemo } from "react";
import { AuthProps, authAtom } from "@atoms/auth";

const useAuth = () => {
  const [auth, setAuth] = useAtom(authAtom);

  const login = ({ accessToken, refreshToken }: AuthProps) => {
    localStorage.setItem("accessToken", accessToken);
    localStorage.setItem("refreshToken", refreshToken);

    setAuth({ accessToken, refreshToken });
  };

  const logout = () => {
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");

    setAuth(null);
  };

  const isLogin = useMemo(() => auth !== null, [auth]);

  return {
    isLogin,
    auth,
    login,
    logout,
  };
};

export default useAuth;
