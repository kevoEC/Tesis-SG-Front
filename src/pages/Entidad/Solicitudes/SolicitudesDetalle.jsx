import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { getSolicitudById } from "@/service/Entidades/SolicitudService";
import { useUI } from "@/hooks/useUI";

// Layout y flujo
import { TopTabs } from "@/components/solicitud/layout/MenusSolicitud";
import StepperHeader from "@/components/solicitud/layout/StepperHeader";
import StepperBody from "@/components/solicitud/layout/StepperBody";
import { SolicitudStepperProvider } from "@/service/stepper/stepperSolicitud";

export default function SolicitudesDetalle() {
  const { id } = useParams();
  const { setSolicitudId, setSolicitudHabilitada } = useUI();

  useEffect(() => {
    const fetchSolicitud = async () => {
      try {
        const solicitud = await getSolicitudById(id);
        const parsed = JSON.parse(solicitud.jsonDocument);
        setSolicitudId(solicitud.idSolicitudInversion);
        sessionStorage.setItem("solicitud", JSON.stringify(parsed));
        sessionStorage.setItem("solicitudHabilitada", "true");
        setSolicitudHabilitada(true);
      } catch (err) {
        console.error("Error cargando solicitud:", err);
      }
    };

    fetchSolicitud();
  }, [id, setSolicitudId, setSolicitudHabilitada]);

  return (
    <SolicitudStepperProvider initialStep="identificacion">
      <div className="flex flex-col h-full bg-gray-50 min-h-screen">
        <TopTabs active="general" />
        <StepperHeader />
        <StepperBody />
      </div>
    </SolicitudStepperProvider>
  );
}
