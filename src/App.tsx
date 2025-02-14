import GlobalStyle from "@styles/globalStyle";
import { RouterProvider } from "react-router-dom";
import router from "@routes/router";
import { ThemeProvider } from "styled-components";
import theme from "@styles/theme";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyle />
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}

export default App;
