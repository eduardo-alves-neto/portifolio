import { Main } from "./components/Main";
import { Menu } from "./components/Menu";
import { ThemeProvider } from "./shared/contexts/ThemeContext";
import { GlobalStyle } from "./styles/global";
import React from "react";

function App() {
  return (
    <ThemeProvider>
      <Menu />
      <Main />
      <GlobalStyle />
    </ThemeProvider>
  );
}

export default App;
