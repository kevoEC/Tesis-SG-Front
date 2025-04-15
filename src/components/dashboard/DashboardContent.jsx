import { useUI } from "@/hooks/useUI";
import { Suspense, lazy } from "react";

// Auto-importa todos los componentes de páginas
const modules = import.meta.glob("../../pages/**/*.{jsx,tsx}");

// 🔄 Generar dinámicamente el mapa routeComponents con rutas completas
const routeComponents = {};
for (const path in modules) {
  const key = path
    .replace("../../pages/", "")        // "Entidad/Prospectos"
    .replace(/\.jsx|\.tsx$/, "")       // "Entidad/Prospectos"
    .toLowerCase();                    // "entidad/prospectos"

  routeComponents[`/${key}`] = lazy(modules[path]); // => { "/entidad/prospectos": Component }
}

// 🧪 Verifica las rutas cargadas
console.log("🧩 Rutas dinámicas disponibles:", Object.keys(routeComponents));

export default function DashboardContent() {
  const { contentRoute } = useUI();
  const Component = routeComponents[contentRoute];

  console.log("📍 Ruta solicitada:", contentRoute);
  console.log("🧱 Componente encontrado:", Component);

  // Evitar render infinito si contentRoute no existe
  if (contentRoute && !Component) {
    return (
      <main className="flex-1 overflow-y-auto bg-[--color-bg] p-6 text-[--color-fg] fade-in-up">
        <div className="max-w-7xl mx-auto space-y-6">
          <div className="text-center text-red-500">
            ⚠️ Componente no encontrado para la ruta: <code>{contentRoute}</code>
          </div>
        </div>
      </main>
    );
  }

  return (
    <main className="flex-1 overflow-y-auto bg-[--color-bg] p-6 text-[--color-fg] fade-in-up">
      <div className="max-w-7xl mx-auto space-y-6">
        {Component ? (
          <Suspense fallback={<div className="text-center">Cargando...</div>}>
            <Component />
          </Suspense>
        ) : (
          <div className="text-center text-muted">
            Selecciona una opción del menú.
          </div>
        )}
      </div>
    </main>
  );
}
