import { createBrowserRouter } from "react-router-dom";

//layout
import RootLayout from "@layout/RootLayout";
import DefalutLayout from "@layout/DefaultLayout";

//pages
import Login from "@pages/login/Login";
import DigitalCake from "@pages/digitalCake/DigitalCake";
import DailyCake from "@pages/dailyCake/DailyCake";
import Mypage from "@pages/mypage/Mypage";

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
        element: <DefalutLayout />,
        children: [
          {
            path: "mypage",
            element: <Mypage />,
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
