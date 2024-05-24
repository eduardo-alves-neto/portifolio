export type ThemeName = "light" | "dark";
export type Theme = {
  [key in ThemeName]: {
    background: string;
    textBody: string;
    paper?: string;
    shadow?: string;
    secondary?: string;
  };
};

export const themes: Theme = {
  light: {
    background: "#f5f5f7",
    textBody: "#000000",
    paper: "#eaeced",
    shadow: "#FFF",
    secondary: "#eaeced",
  },
  dark: {
    background: "#23272f",
    textBody: "#ffffff",
    paper: "#2d333b",
    shadow: "#000000",
    secondary: "#2f4048",
  },
};
