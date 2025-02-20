import { createBrowserRouter } from "react-router-dom";

//layout
import RootLayout from "@layout/RootLayout";
import DefalutLayout from "@layout/DefaultLayout";

//pages
import Login from "@pages/login/Login";
import DigitalCake from "@pages/digitalCake/DigitalCake";
import DailyCake from "@pages/dailyCake/DailyCake";
import Mypage from "@pages/mypage/Mypage";
import OAuthRedirectHandler from "@pages/login/OAuthRedirectHandler";
import Intro from "@pages/intro/Intro";
import Question from "@pages/intro/Question";
import Result from "@pages/intro/Result";
import { FriendReqeust } from "@pages/mypage/friendRequest/FriendRequest";
import { DetailFriends } from "@pages/mypage/detailFriends/DetailFriends";

const router = createBrowserRouter([
	{
		path: "/",
		element: <RootLayout />,
		children: [
			{
				path: "login",
				element: <Login />,
			},
			{
				path: "/api/oauth2/callback/:provider",
				element: <OAuthRedirectHandler />,
			},
			{
				path: "intro",
				element: <Intro />,
			},
			{
				path: "question",
				element: <Question />,
			},
			{
				path: "result",
				element: <Result />,
			},
			{
				element: <DefalutLayout />,
				children: [
					{
						path: "mypage",
						element: <Mypage />,
					},
					{
						path: "detailfriends",
						element: <DetailFriends />,
					},
					{
						path: "friendrequet",
						element: <FriendReqeust />,
					},
					{
						path: "digitalCake",
						element: <DigitalCake />,
					},
					{
						path: "dailyCake",
						element: <DailyCake />,
					},
				],
			},
		],
	},
]);

export default router;
