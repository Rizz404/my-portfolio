import { useState, type ReactNode, useEffect, useCallback } from "react";
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

  const [isChangingLanguage, setIsChangingLanguage] = useState(false);

  // Inisialisasi language dari i18n yang sudah ready
  const [language, setLanguageState] = useState<Language>(() => {
    // Tunggu sampai i18n ready
    if (!i18n.isInitialized) {
      return "en"; // Default sementara
    }
    const currentLang = i18n.language?.substring(0, 2);
    return currentLang === "en" || currentLang === "id" || currentLang === "ja"
      ? (currentLang as Language)
      : "en";
  });

  // Update language state ketika i18n ready
  useEffect(() => {
    if (i18n.isInitialized) {
      const currentLang = i18n.language?.substring(0, 2);
      if (
        currentLang === "en" ||
        currentLang === "id" ||
        currentLang === "ja"
      ) {
        setLanguageState(currentLang as Language);
      }
    }
  }, [i18n.isInitialized, i18n.language]);

  const setLanguage = useCallback(
    async (newLanguage: Language) => {
      if (language !== newLanguage && i18n.isInitialized) {
        setIsChangingLanguage(true);

        try {
          await i18n.changeLanguage(newLanguage);
          setLanguageState(newLanguage);

          // Save to localStorage dengan error handling
          try {
            localStorage.setItem("i18nextLng", newLanguage);
          } catch (error) {
            console.warn("Cannot save to localStorage:", error);
          }

          // Update URL
          if (location.pathname) {
            const currentLangPrefix = `/${language}`;
            const newLangPrefix = `/${newLanguage}`;

            if (location.pathname.startsWith(currentLangPrefix)) {
              const newPath = location.pathname.replace(
                currentLangPrefix,
                newLangPrefix
              );
              navigate(newPath, { replace: true });
            } else if (!location.pathname.startsWith(`/${newLanguage}`)) {
              navigate(`/${newLanguage}${location.pathname}`, {
                replace: true,
              });
            }
          }
        } catch (error) {
          console.error("Failed to change language:", error);
        } finally {
          setTimeout(() => {
            setIsChangingLanguage(false);
          }, 100);
        }
      }
    },
    [i18n, language, location.pathname, navigate]
  );

  // Sync dengan URL changes
  useEffect(() => {
    const pathParts = location.pathname.split("/");
    if (pathParts.length > 1) {
      const urlLang = pathParts[1];
      if (
        (urlLang === "en" || urlLang === "id" || urlLang === "ja") &&
        urlLang !== language &&
        i18n.isInitialized
      ) {
        setIsChangingLanguage(true);
        setLanguageState(urlLang as Language);
        i18n.changeLanguage(urlLang).finally(() => {
          setTimeout(() => {
            setIsChangingLanguage(false);
          }, 100);
        });
      }
    }
  }, [location.pathname, i18n, language]);

  return (
    <LocalizationContext.Provider
      value={{
        language,
        setLanguage,
        isChangingLanguage,
        t,
        isRTL: ["ar", "he"].includes(language),
      }}
    >
      {children}
    </LocalizationContext.Provider>
  );
};
