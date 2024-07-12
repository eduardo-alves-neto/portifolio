import { Testes } from "./components/Grid/teste";
import { DarkModeProvider } from "./shared/contexts/ThemeContext";
import GlobalStyles from "./styles/global";
import React from "react";
import Sidebar from "./components/SideBar/SideBar";
import { NavBar } from "./components/NavBar/NavBar";
import { SideBarProvider } from "./shared/contexts/SideBarContext";
import { LayoutDefault } from "./shared/layouts/LayoutDefault";

function App() {
  return (
    <DarkModeProvider>
      <SideBarProvider>
        <GlobalStyles />
        <Sidebar />
        <LayoutDefault>
          <NavBar />
          <Testes />
        </LayoutDefault>
      </SideBarProvider>
    </DarkModeProvider>
  );
}

export default App;
