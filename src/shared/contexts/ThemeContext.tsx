import { ThemeProvider as StyledThemeProvider } from "styled-components";
import React, { createContext, useState } from "react";
import { ThemeName, themes } from "../Themes/Themes";

interface ThemeContextProps {
  theme: ThemeName;
  toggleTheme: () => void;
}

export const ThemeContext = createContext({} as ThemeContextProps);

export const ThemeProvider = ({ children }: any) => {
  const [theme, setTheme] = useState<ThemeName>("dark");

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <StyledThemeProvider theme={themes[theme]}>
        {children}
      </StyledThemeProvider>
    </ThemeContext.Provider>
  );
};
