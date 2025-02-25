import { useEffect, useState } from "react";
import GlobalStyle from "@styles/globalStyle";
import { RouterProvider } from "react-router-dom";
import router from "@routes/router";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";
import SseNotification from "@apis/domain/nav/SseNotification";

function App() {
  const [accessToken, setAccessToken] = useState<string | null>(null);

  useEffect(() => {
    const token = localStorage.getItem("accessToken");
    setAccessToken(token);
  }, []);

  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      {accessToken && <SseNotification setHasNotification={() => {}} />}
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
