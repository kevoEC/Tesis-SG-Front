import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const CatalogContext = createContext();

export function CatalogProvider({ children }) {
  const [catalogs, setCatalogs] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function fetchCatalogs() {
        try {
          // Simulación de catálogos mientras no tienes API real
          const data = {
            generos: [
              { id: "M", nombre: "Masculino" },
              { id: "F", nombre: "Femenino" },
              { id: "O", nombre: "Otro" },
            ],
            nacionalidades: [
              { id: 1, nombre: "Ecuatoriana" },
              { id: 2, nombre: "Colombiana" },
            ]
          };
          await new Promise(r => setTimeout(r, 500)); // simula delay
          setCatalogs(data);
        } catch (error) {
          console.error("Error cargando catálogos:", error);
        } finally {
          setLoading(false);
        }
      }
      

    fetchCatalogs();
  }, []);

  return (
    <CatalogContext.Provider value={{ catalogs, loading }}>
      {children}
    </CatalogContext.Provider>
  );
}
