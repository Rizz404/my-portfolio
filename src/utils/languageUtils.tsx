import type { Language } from "../context/localizationContext";

const SUPPORTED_LANGUAGES: Language[] = ["en", "id", "ja"];

export const isValidLanguage = (lang: string): lang is Language => {
  return SUPPORTED_LANGUAGES.includes(lang as Language);
};

export const getDefaultLanguage = (): Language => {
  // Jangan akses localStorage di server-side rendering
  if (typeof window === "undefined") {
    return "en";
  }

  // 1. Periksa localStorage
  try {
    const savedLang = localStorage.getItem("i18nextLng");
    if (savedLang) {
      const normalizedSavedLang = savedLang.substring(0, 2);
      if (isValidLanguage(normalizedSavedLang)) {
        return normalizedSavedLang;
      }
    }
  } catch (error) {
    console.warn("Cannot access localStorage:", error);
  }

  // 2. Periksa URL saat ini
  const currentPath = window.location.pathname;
  const pathLang = currentPath.split("/")[1];
  if (pathLang && isValidLanguage(pathLang)) {
    return pathLang;
  }

  // 3. Fallback ke bahasa browser
  const browserLang = navigator.language.substring(0, 2);
  if (isValidLanguage(browserLang)) {
    return browserLang;
  }

  // 4. Default ke English
  return "en";
};

export const getSupportedLanguages = (): Language[] => {
  return [...SUPPORTED_LANGUAGES];
};
