import { createContext } from "react";

export type Theme = "light" | "dark";

export interface ThemeContextType {
  theme: Theme;
  isDarkMode: boolean;
  toggleDarkMode: () => void;
  setTheme: (theme: Theme) => void;
}

// Create context for theme
export const ThemeContext = createContext<ThemeContextType | undefined>(
  undefined
);
