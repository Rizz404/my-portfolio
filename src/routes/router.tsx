import { createBrowserRouter, Navigate } from "react-router-dom";
import { Suspense, lazy } from "react";
import Loading from "../components/ui/Loading";
import LanguageWrapper from "../components/ui/LanguageWrapper";
import LocalizedAppLayout from "../components/ui/LocalizedAppLayout";
import { getDefaultLanguage } from "../utils/languageUtils";

const App = lazy(() => import("../App"));

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
      {
        path: "ja",
        element: (
          <LanguageWrapper language="ja">
            <Suspense fallback={<Loading />}>
              <App />
            </Suspense>
          </LanguageWrapper>
        ),
      },
      // * Fallback untuk path yang tidak dikenal
      {
        path: "*",
        element: <Navigate to={`/${getDefaultLanguage()}`} replace />,
      },
    ],
  },
]);

export default appRouter;
