import { useEffect } from "react";
import { Outlet, useNavigate, useLocation } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { LocalizationProvider } from "../../providers/localizationProvider";
import { getDefaultLanguage } from "../../utils/languageUtils";

const LocalizedAppLayout = () => {
  const { i18n } = useTranslation();
  const navigate = useNavigate();
  const location = useLocation();

  useEffect(() => {
    if (!i18n.isInitialized) return;

    const currentPath = location.pathname;
    const pathLang = currentPath.split("/")[1];

    // Jika path tidak memiliki language prefix yang valid
    if (!["en", "id", "ja"].includes(pathLang)) {
      const defaultLang = getDefaultLanguage();
      const newPath = `/${defaultLang}${
        currentPath === "/" ? "" : currentPath
      }`;
      navigate(newPath, { replace: true });
    }
  }, [i18n.isInitialized, location.pathname, navigate]);

  return (
    <LocalizationProvider>
      <Outlet />
    </LocalizationProvider>
  );
};

export default LocalizedAppLayout;
