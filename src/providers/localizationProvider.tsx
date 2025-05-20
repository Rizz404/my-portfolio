import { useState, type ReactNode, useEffect, useCallback } from "react";
import i18next from "i18next";
import { useTranslation } from "react-i18next";
import { useNavigate, useLocation } from "react-router-dom";
import {
  LocalizationContext,
  type Language,
} from "../context/localizationContext";

interface LocalizationProviderProps {
  children: ReactNode;
}

export const LocalizationProvider = ({
  children,
}: LocalizationProviderProps) => {
  const { t, i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  // Get language from i18next or default to 'en'
  const [language, setLanguageState] = useState<Language>(() => {
    const currentLang = i18next.language?.substring(0, 2);
    return currentLang === "en" || currentLang === "id"
      ? (currentLang as Language)
      : "en";
  });

  // Function to change language and update URL
  const setLanguage = useCallback(
    (newLanguage: Language) => {
      // Only proceed if language actually changed
      if (language !== newLanguage) {
        // Change i18next language
        i18n.changeLanguage(newLanguage);
        setLanguageState(newLanguage);

        // Save to localStorage
        localStorage.setItem("i18nextLng", newLanguage);

        // Update URL to reflect language change
        if (location.pathname) {
          const currentLangPrefix = `/${language}`;
          const newLangPrefix = `/${newLanguage}`;

          // If URL starts with current language prefix, update it
          if (location.pathname.startsWith(currentLangPrefix)) {
            const newPath = location.pathname.replace(
              currentLangPrefix,
              newLangPrefix
            );
            navigate(newPath);
          }
          // If URL doesn't have a language prefix yet, add it
          else if (!location.pathname.startsWith(`/${newLanguage}`)) {
            navigate(`/${newLanguage}`);
          }
        }
      }
    },
    [i18n, language, location.pathname, navigate]
  );

  // Check URL for language prefix when component mounts
  useEffect(() => {
    const pathParts = location.pathname.split("/");
    if (pathParts.length > 1) {
      const urlLang = pathParts[1];
      if ((urlLang === "en" || urlLang === "id") && urlLang !== language) {
        setLanguageState(urlLang as Language);
        i18n.changeLanguage(urlLang);
      }
    }
  }, [location.pathname, i18n, language]);

  return (
    <LocalizationContext.Provider
      value={{
        language,
        setLanguage,
        t,
        isRTL: ["ar", "he"].includes(language),
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};
