import { useSolicitudStepper } from "@/service/stepper/stepperSolicitud";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";

import Identificacion from "@/components/solicitud/Identificacion";
import Proyeccion from "@/components/solicitud/Proyeccion";
import DatosGenerales from "@/components/solicitud/DatosGenerales";
import ActividadEconomica from "@/components/solicitud/ActividadEconomica";
import ContactoUbicacion from "@/components/solicitud/ContactoUbicacion";
import Conyuge from "@/components/solicitud/Conyuge";
import Banco from "@/components/solicitud/Banco";
import Beneficiarios from "@/components/solicitud/Beneficiarios";
import Finalizacion from "@/components/solicitud/Finalizacion";

const componentes = {
  identificacion: <Identificacion />,
  proyeccion: <Proyeccion />,
  datos: <DatosGenerales />,
  actividad: <ActividadEconomica />,
  contacto: <ContactoUbicacion />,
  conyuge: <Conyuge />,
  banco: <Banco />,
  beneficiarios: <Beneficiarios />,
  finalizacion: <Finalizacion />,
};

export default function StepperBody() {
  const {
    currentStep,
    beforeNext,
    beforePrev,
    isFirst,
    isLast,
  } = useSolicitudStepper();

  console.log("📍 currentStep:", currentStep);

  if (!currentStep || !currentStep.id) {
    console.warn("⚠️ currentStep.id no está definido todavía");
    return (
      <div className="flex-1 p-6">
        <Card className="p-6 bg-white border text-gray-400 text-sm">
          Cargando formulario...
        </Card>
      </div>
    );
  }

  const ComponenteActual = componentes[currentStep.id];
  console.log("🧩 Componente que se va a renderizar:", currentStep.id);

  return (
    <div className="flex-1 p-6 space-y-6">
      <Card className="p-6 shadow-md bg-white rounded-2xl border border-gray-200">
        {ComponenteActual ?? (
          <p className="text-gray-500 text-sm">
            ❌ Componente no encontrado para: {currentStep.id}
          </p>
        )}
      </Card>

      <div className="flex justify-between mt-4">
        <Button
          onClick={() => beforePrev(() => true)}
          variant="outline"
          disabled={isFirst}
          className="text-sm px-4 py-2"
        >
          ← Anterior
        </Button>

        <Button
          onClick={() => beforeNext(() => true)}
          className="bg-blue-600 text-white hover:bg-blue-700 text-sm px-4 py-2"
          disabled={isLast}
        >
          Siguiente →
        </Button>
      </div>
    </div>
  );
}
