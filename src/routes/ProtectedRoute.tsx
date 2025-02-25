import { useEffect } from "react";
import { Navigate, Outlet, useNavigate } from "react-router-dom";

const ProtectedRoute = ({ requireCakeId }: { requireCakeId?: boolean }) => {
  const navigate = useNavigate();
  const accessToken = localStorage.getItem("accessToken");
  const cakeId = localStorage.getItem("cakeId");

  useEffect(() => {
    if (!accessToken) {
      // accessToken이 없으면 /login 페이지로 리다이렉트
      navigate("/login", { replace: true });
    }
  }, [accessToken, navigate]);

  // cakeId가 없으면 /intro로 이동, 하지만 requireCakeId가 있는 경우 Outlet 반환
  if (!accessToken) {
    return null;
  }

  if (!cakeId) {
    return requireCakeId ? <Outlet /> : <Navigate to="/intro" replace />;
  }

  // cakeId가 있는 경우 /intro, /result 접근 차단
  if (requireCakeId && cakeId) {
    return <Navigate to="/digitalCake" replace />;
  }

  return <Outlet />;
};

export default ProtectedRoute;
