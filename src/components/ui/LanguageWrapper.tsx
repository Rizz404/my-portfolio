import { useEffect } from "react";
import type { Language } from "../../context/localizationContext";
import { useLocalization } from "../../hooks/useLocalization";

interface LanguageWrapperProps {
  language: Language;
  children: React.ReactNode;
}

const LanguageWrapper = ({ language, children }: LanguageWrapperProps) => {
  const { setLanguage, language: currentLanguage } = useLocalization();

  useEffect(() => {
    // Hanya set language jika berbeda dengan yang sekarang
    if (currentLanguage !== language) {
      setLanguage(language);
    }
  }, [language, setLanguage, currentLanguage]);

  return <>{children}</>;
};

export default LanguageWrapper;
