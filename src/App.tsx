import { NavBar } from "./components/NavBar";
import { DarkModeProvider } from "./shared/contexts/ThemeContext";
import GlobalStyles from "./styles/global";
import React from "react";

function App() {
  return (
    <DarkModeProvider>
      <GlobalStyles />
      <NavBar />
    </DarkModeProvider>
  );
}

export default App;
