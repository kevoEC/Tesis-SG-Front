
import { Button } from "@/components/ui/button";
import { useUI } from "@/hooks/useUI";

export function SidebarMenu({ seccion, setSeccion }) {
  const { solicitudHabilitada } = useUI();
  const habilitado = Boolean(solicitudHabilitada); // validación estricta

  const items = [
    { key: "identificacion", label: "Identificación" },
    { key: "proyeccion", label: "Proyección" },
    { key: "datos", label: "Datos generales" },
    { key: "actividad", label: "Actividad económica" },
    { key: "contacto", label: "Contacto y ubicación" },
    { key: "conyuge", label: "Cónyuge" },
    { key: "banco", label: "Banco" },
    { key: "beneficiarios", label: "Beneficiarios" },
    { key: "finalizacion", label: "Finalización" },
  ];

  return (
    <div className="w-64 bg-white p-6 shadow-sm rounded-xl border border-gray-100">
      <h2 className="text-lg font-semibold text-gray-800 mb-4">Formulario</h2>
      <div className="space-y-2">
        {items.map((item) => {
          const isDisabled = item.key !== "identificacion" && !habilitado;
          return (
            <Button
              key={item.key}
              onClick={() => !isDisabled && setSeccion(item.key)}
              disabled={isDisabled}
              className={`w-full justify-start rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                seccion === item.key
                  ? "bg-blue-600 text-white shadow"
                  : isDisabled
                  ? "bg-gray-100 text-gray-400 cursor-not-allowed"
                  : "bg-white border border-gray-300 hover:bg-gray-50 text-gray-700"
              }`}
            >
              {item.label}
            </Button>
          );
        })}
      </div>
    </div>
  );
}

export function TopTabs({ active, onChange }) {
  const tabs = [
    { key: "general", label: "General" },
    { key: "adjuntos", label: "Adjuntos" },
    { key: "tareas", label: "Tareas de solicitudes" },
  ];

  return (
    <div className="border-b bg-white px-6 py-2 flex gap-6">
      {tabs.map((tab) => (
        <div
          key={tab.key}
          onClick={() => onChange?.(tab.key)}
          className={`text-sm font-medium cursor-pointer border-b-2 pb-1 transition-all ${
            active === tab.key
              ? "border-blue-600 text-blue-600"
              : "border-transparent text-gray-500 hover:text-gray-700"
          }`}
        >
          {tab.label}
        </div>
      ))}
    </div>
  );
}
