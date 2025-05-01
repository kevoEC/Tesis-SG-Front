
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getSolicitudById } from "@/service/Entidades/SolicitudService";
import { useUI } from "@/hooks/useUI";
import Identificacion from "@/components/solicitud/Identificacion";
import Proyeccion from "@/components/solicitud/Proyeccion";
import DatosGenerales from "@/components/solicitud/DatosGenerales";
import ActividadEconomica from "@/components/solicitud/ActividadEconomica";
import ContactoUbicacion from "@/components/solicitud/ContactoUbicacion";
import Conyuge from "@/components/solicitud/Conyuge";
import Banco from "@/components/solicitud/Banco";
import Beneficiarios from "@/components/solicitud/Beneficiarios";
import Finalizacion from "@/components/solicitud/Finalizacion";
import { TopTabs, SidebarMenu } from "@/components/solicitud/layout/MenusSolicitud";
import { Card } from "@/components/ui/card";

export default function SolicitudesDetalle() {
  const { id } = useParams();
  const [seccion, setSeccion] = useState("identificacion");
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

  const renderSeccion = () => {
    switch (seccion) {
      case "identificacion":
        return <Identificacion />;
      case "proyeccion":
        return <Proyeccion />;
      case "datos":
        return <DatosGenerales />;
      case "actividad":
        return <ActividadEconomica />;
      case "contacto":
        return <ContactoUbicacion />;
      case "conyuge":
        return <Conyuge />;
      case "banco":
        return <Banco />;
      case "beneficiarios":
        return <Beneficiarios />;
      case "finalizacion":
        return <Finalizacion />;
      default:
        return <p className="text-gray-600">Selecciona una sección</p>;
    }
  };

  return (
    <div className="flex flex-col h-full">
      <TopTabs active="general" />
      <div className="flex flex-grow">
        <SidebarMenu seccion={seccion} setSeccion={setSeccion} />
        <div className="flex-1 p-6">
          <Card className="p-6 shadow-lg border rounded-xl bg-white">
            {renderSeccion()}
          </Card>
        </div>
      </div>
    </div>
  );
}
