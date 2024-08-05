import { DarkModeProvider } from "./shared/contexts/ThemeContext";
import GlobalStyles from "./styles/global";
import { NavBar } from "./components/NavBar/NavBar";
import { SideBarProvider } from "./shared/contexts/SideBarContext";
import { LayoutDefault } from "./shared/layouts/LayoutDefault";
import { Home } from "./pages/Home";
import { Projects } from "./pages/projects";
import { Experience } from "./pages/experience";

function App() {
  return (
    <DarkModeProvider>
      <SideBarProvider>
        <GlobalStyles />
        {/* <Sidebar /> */}
        <LayoutDefault>
          <NavBar />
          <Home />
          <Projects />
          <Experience />
        </LayoutDefault>
      </SideBarProvider>
    </DarkModeProvider>
  );
}

export default App;
