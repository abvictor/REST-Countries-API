import { ThemeProvider } from "styled-components";
import Header from "./components/Header/Header";
import Home from "./pages/Home";
import Country from "./pages/Country";

import { useState } from "react";
import GlobalStyle from "./styles/globalStyles";

import light from "./styles/themes/light";
import dark from "./styles/themes/dark";

import { createBrowserRouter, RouterProvider } from "react-router-dom";

function App() {
  const [theme, setTheme] = useState(light);

  const toggleTheme = () => {
    setTheme(theme.title === "light" ? dark : light);
  };

  const router = createBrowserRouter([
    {
      path: "/",
      element: <Home />,
    },
    {
      path: "/:name",
      element: <Country />,
    },
  ]);
  return (
    <ThemeProvider theme={theme}>
      <Header toggleTheme={toggleTheme} />
      <RouterProvider router={router} />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
