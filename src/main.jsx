import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";

// Contextos
import { AuthProvider } from "@/contexts/AuthContext";
import { CatalogProvider } from "@/contexts/CatalogContext";
import { DataProvider } from "@/contexts/DataContext";
import { UIProvider } from "@/contexts/UIProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <AuthProvider>
      <CatalogProvider>
        <DataProvider>
          <UIProvider>
            <App />
          </UIProvider>
        </DataProvider>
      </CatalogProvider>
    </AuthProvider>
  </StrictMode>
);
