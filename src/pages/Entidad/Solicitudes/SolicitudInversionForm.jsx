import { useState } from "react";
import Identificacion from "@/components/solicitud/Identificacion";
import Proyeccion from "@/components/solicitud/Proyeccion";
import DatosGenerales from "@/components/solicitud/DatosGenerales";
import ActividadEconomica from "@/components/solicitud/ActividadEconomica";
import ContactoUbicacion from "@/components/solicitud/ContactoUbicacion";
import Conyuge from "@/components/solicitud/Conyuge";
import Banco from "@/components/solicitud/Banco";
import Beneficiarios from "@/components/solicitud/Beneficiarios";
import Finalizacion from "@/components/solicitud/Finalizacion";

import { Card } from "@/components/ui/card";
import { TopTabs, SidebarMenu } from "@/components/solicitud/layout/MenusSolicitud";

export default function SolicitudInversionForm() {
  const [seccion, setSeccion] = useState("identificacion");

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
      {/* Tabs superiores */}
      <TopTabs active="general" />

      <div className="flex flex-grow">
        {/* Sidebar lateral izquierdo */}
        <SidebarMenu seccion={seccion} setSeccion={setSeccion} />

        {/* Contenido dinámico de sección */}
        <div className="flex-1 p-6">
          <Card className="p-6 shadow-lg border rounded-xl bg-white">
            {renderSeccion()}
          </Card>
        </div>
      </div>
    </div>
  );
}