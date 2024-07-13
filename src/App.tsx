import { DarkModeProvider } from "./shared/contexts/ThemeContext";
import GlobalStyles from "./styles/global";
import React from "react";
import { NavBar } from "./components/NavBar/NavBar";
import { SideBarProvider } from "./shared/contexts/SideBarContext";
import { LayoutDefault } from "./shared/layouts/LayoutDefault";
import { Sidebar } from "./components/SideBar/SideBar";
import { Home } from "./pages/Home";

function App() {
  return (
    <DarkModeProvider>
      <SideBarProvider>
        <GlobalStyles />

        <Sidebar />
        <LayoutDefault>
          <NavBar />
          <Home />
        </LayoutDefault>
      </SideBarProvider>
    </DarkModeProvider>
  );
}

export default App;
