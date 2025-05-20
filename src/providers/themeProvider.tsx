import { useEffect, useState, type ReactNode } from "react";
import { ThemeContext, type Theme } from "../context/themeContext";

interface ThemeProviderProps {
  children: ReactNode;
}

export const ThemeProvider = ({ children }: ThemeProviderProps) => {
  // Check localStorage and system preferences on mount
  const [theme, setThemeState] = useState<Theme>(() => {
    // Run on client-side only
    if (typeof window !== "undefined") {
      // Check localStorage first
      const savedTheme = localStorage.getItem("theme") as Theme | null;
      if (savedTheme === "dark" || savedTheme === "light") {
        return savedTheme;
      }

      // If not in localStorage, check system preference
      if (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: dark)").matches
      ) {
        return "dark";
      }
    }

    return "light"; // Default theme
  });

  const isDarkMode = theme === "dark";

  // Toggle theme function
  const toggleDarkMode = () => {
    setThemeState((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  // Set theme directly
  const setTheme = (newTheme: Theme) => {
    setThemeState(newTheme);
  };

  // Effect to apply theme to DOM and save to localStorage
  useEffect(() => {
    const root = document.documentElement;

    if (theme === "dark") {
      root.classList.add("dark");
    } else {
      root.classList.remove("dark");
    }

    // Save preference to localStorage
    localStorage.setItem("theme", theme);
  }, [theme]);

  // Listen for system preference changes
  useEffect(() => {
    if (!window.matchMedia) return;

    const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)");

    // Handler for system preference changes
    const handleChange = (e: MediaQueryListEvent) => {
      // Only change if user hasn't set manually (not in localStorage)
      const hasUserPreference = localStorage.getItem("theme") !== null;
      if (!hasUserPreference) {
        setThemeState(e.matches ? "dark" : "light");
      }
    };

    // Modern browsers
    if (mediaQuery.addEventListener) {
      mediaQuery.addEventListener("change", handleChange);
      return () => mediaQuery.removeEventListener("change", handleChange);
    }

    return undefined;
  }, []);

  return (
    <ThemeContext.Provider
      value={{ theme, isDarkMode, toggleDarkMode, setTheme }}
    >
      {children}
    </ThemeContext.Provider>
  );
};
