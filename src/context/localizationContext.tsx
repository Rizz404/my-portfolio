import { createContext } from "react";
import type { TFunction } from "i18next";

export type Language = "en" | "id" | "ja";

interface LocalizationContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  isChangingLanguage: boolean;
  t: TFunction;
  isRTL: boolean;
}

export const LocalizationContext = createContext<LocalizationContextType>({
  language: "en",
  setLanguage: () => {},
  isChangingLanguage: false,
  t: ((key: string) => key) as TFunction,
  isRTL: false,
});
