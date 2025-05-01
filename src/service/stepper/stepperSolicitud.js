import { defineStepper } from "@stepperize/react";

export const {
  Scoped: SolicitudStepperProvider,
  useStepper: useSolicitudStepper,
  steps: pasosSolicitud,
  utils: utilsSolicitud
} = defineStepper(
  {
    id: "identificacion",
    title: "Identificación",
    description: "Datos del solicitante"
  },
  {
    id: "proyeccion",
    title: "Proyección",
    description: "Simulación financiera"
  },
  {
    id: "datos",
    title: "Datos generales",
    description: "Datos personales y generales"
  },
  {
    id: "actividad",
    title: "Actividad económica",
    description: "Ocupación y fuente de ingresos"
  },
  {
    id: "contacto",
    title: "Contacto y ubicación",
    description: "Dirección y contacto"
  },
  {
    id: "conyuge",
    title: "Cónyuge",
    description: "Datos del cónyuge"
  },
  {
    id: "banco",
    title: "Banco",
    description: "Cuentas bancarias"
  },
  {
    id: "beneficiarios",
    title: "Beneficiarios",
    description: "Personas designadas"
  },
  {
    id: "finalizacion",
    title: "Finalización",
    description: "Revisión y envío"
  }
);
