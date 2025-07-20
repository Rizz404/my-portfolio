import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { RouterProvider } from "react-router-dom";
import "./global.css";
import { ThemeProvider } from "./providers/themeProvider";
import appRouter from "./routes/router";
import "./i18n"; // Import konfigurasi i18n secara terpisah

const root = createRoot(document.getElementById("root")!);

root.render(
  <StrictMode>
    <ThemeProvider>
      <RouterProvider router={appRouter} />
    </ThemeProvider>
  </StrictMode>
);
