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
    setLanguage(language);
  }, [language, setLanguage]);

  return <>{children}</>;
};

const getDefaultLanguage = (): Language => {
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
    element: <LocalizedAppLayout />, // Gunakan layout ini sebagai elemen rute dasar
    children: [
      {
        index: true, // Cocok untuk path "/"
        element: <Navigate to={`/${getDefaultLanguage()}`} replace />,
      },
      {
        path: "en", // Rute untuk Bahasa Inggris
        element: (
          <LanguageWrapper language="en">
            <Suspense fallback={<Loading />}>
              <App />
            </Suspense>
          </LanguageWrapper>
        ),
      },
      {
        path: "id", // Rute untuk Bahasa Indonesia
        element: (
          <LanguageWrapper language="id">
            <Suspense fallback={<Loading />}>
              <App />
            </Suspense>
          </LanguageWrapper>
        ),
      },
    ],
  },
]);

export default appRouter;
