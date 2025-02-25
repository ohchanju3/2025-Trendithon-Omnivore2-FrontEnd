import { createBrowserRouter } from "react-router-dom";
import RootLayout from "@layout/RootLayout";
import DefaultLayout from "@layout/DefaultLayout";
import ProtectedRoute from "./ProtectedRoute";

// Pages
import Login from "@pages/login/Login";
import DigitalCake from "@pages/digitalCake/DigitalCake";
import DailyCake from "@pages/dailyCake/DailyCake";
import Mypage from "@pages/mypage/Mypage";
import OAuthRedirectHandler from "@pages/login/OAuthRedirectHandler";
import Intro from "@pages/intro/Intro";
import Question from "@pages/intro/Question";
import Result from "@pages/intro/Result";
import { DetailFriends } from "@pages/mypage/detailFriends/DetailFriends";
import { Social } from "@pages/social/Social";
import SseTest from "@pages/test/SseTest";
import { FriendReqeust } from "@pages/mypage/friendRequest/FriendRequest";
import SocialCakePage from "@pages/social/SocialCakePage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <RootLayout />,
    children: [
      { path: "login", element: <Login /> },
      {
        path: "/api/oauth2/callback/:provider",
        element: <OAuthRedirectHandler />,
      },

      // cakeId 없는 사람만 /intro, /result 접근 가능
      {
        element: <ProtectedRoute requireCakeId={true} />,
        children: [
          { path: "/intro", element: <Intro /> },
          { path: "/question", element: <Question /> },
          { path: "/result", element: <Result /> },
        ],
      },

      // 로그인한 유저만 접근 가능 (cakeId 검사 포함)
      {
        element: <ProtectedRoute />,
        children: [
          {
            element: <DefaultLayout />,
            children: [
              { path: "mypage", element: <Mypage /> },
              { path: "detailfriends", element: <DetailFriends /> },
              { path: "friendrequest", element: <FriendReqeust /> },
              { path: "digitalCake", element: <DigitalCake /> },
              { path: "dailyCake", element: <DailyCake /> },
              { path: "social", element: <Social /> },
              { path: "socialCake", element: <SocialCakePage /> },
              { path: "test", element: <SseTest /> },
            ],
          },
        ],
      },
    ],
  },
]);

export default router;
