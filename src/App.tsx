import GlobalStyle from "@styles/globalStyle";
import { RouterProvider } from "react-router-dom";
import router from "@routes/router";

function App() {
  return (
    <>
      <GlobalStyle />
      <RouterProvider router={router} />
    </>
  );
}

export default App;
