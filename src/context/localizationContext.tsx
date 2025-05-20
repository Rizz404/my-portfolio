import { createContext } from "react";

// * Definisi tipe untuk bahasa yang didukung
export type Language = "en" | "id";

export interface LocalizationContextType {
  language: Language;
  setLanguage: (language: Language) => void;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  t: (key: string, options?: any) => string;
  isRTL: boolean;
}

// * Buat context untuk lokalisasi
export const LocalizationContext = createContext<
  LocalizationContextType | undefined
>(undefined);
