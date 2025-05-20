// src/routes/router.tsx
import { createBrowserRouter, Navigate, Outlet } from "react-router-dom";
import { Suspense, lazy, useEffect } from "react";
import type { Language } from "../context/localizationContext";
import { useLocalization } from "../hooks/useLocalization";
import { LocalizationProvider } from "../providers/localizationProvider";

const App = lazy(() => import("../App"));

const Loading = () => (
  <div className="flex items-center justify-center min-h-screen">
    <div className="w-16 h-16 border-4 rounded-full border-primary border-t-transparent animate-spin"></div>
  </div>
);

interface LanguageWrapperProps {
  language: Language;
  children: React.ReactNode;
}

const LanguageWrapper = ({ language, children }: LanguageWrapperProps) => {
  const { setLanguage } = useLocalization();

  useEffect(() => {
    // Pastikan bahasa disetel pada mount komponen
    setLanguage(language);
  }, [language, setLanguage]);

  return <>{children}</>;
};

const getDefaultLanguage = (): Language => {
  // Periksa localStorage dulu untuk mempertahankan preferensi bahasa pengguna
  const savedLang = localStorage.getItem("i18nextLng")?.substring(0, 2);
  if (savedLang === "id" || savedLang === "en") {
    return savedLang as Language;
  }

  // Fallback ke bahasa browser
  const browserLang = navigator.language.substring(0, 2);
  return browserLang === "id" ? "id" : "en";
};

const LocalizedAppLayout = () => {
  return (
    <LocalizationProvider>
      <Outlet />
    </LocalizationProvider>
  );
};

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <LocalizedAppLayout />,
    children: [
      {
        index: true,
        element: <Navigate to={`/${getDefaultLanguage()}`} replace />,
      },
      {
        path: "en",
        element: (
          <LanguageWrapper language="en">
            <Suspense fallback={<Loading />}>
              <App />
            </Suspense>
          </LanguageWrapper>
        ),
      },
      {
        path: "id",
        element: (
          <LanguageWrapper language="id">
            <Suspense fallback={<Loading />}>
              <App />
            </Suspense>
          </LanguageWrapper>
        ),
      },
      // Fallback untuk path yang tidak dikenal
      {
        path: "*",
        element: <Navigate to={`/${getDefaultLanguage()}`} replace />,
      },
    ],
  },
]);

export default appRouter;
