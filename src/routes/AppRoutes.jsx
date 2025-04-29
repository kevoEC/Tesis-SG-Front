// routes/index.js

import { lazy } from "react";
import LoginRedirect from "@/components/LoginRedirect";

const Settings = lazy(() => import("@/pages/Settings"));
const NotFound = lazy(() => import("@/pages/NotFound"));
const Register = lazy(() => import("@/pages/Auth/Register"));
const ForgotPassword = lazy(() => import("@/pages/Auth/ForgotPassword"));
const Clausula = lazy(() => import("@/pages/Legal/ClausulaInformativa"));
const Terminos = lazy(() => import("@/pages/Legal/TerminosCondiciones"));
const Politica = lazy(() => import("@/pages/Legal/PoliticaPrivacidad"));
const DashboardPanel = lazy(() => import("@/pages/Panel/Dashboard")); // Si es necesario, puedes importar el layout aquí o en el componente
const Prospectos = lazy(() => import("@/pages/Entidad/Prospectos/Prospectos"));
const ProspectoForm = lazy(() => import("@/pages/Entidad/Prospectos/ProspectoForm"));
const ProspectoDetalle = lazy(() => import("@/pages/Entidad/Prospectos/ProspectoDetalle"));
const Solicitudes = lazy(() => import("@/pages/Entidad/Solicitudes/Solicitudes"));
const SolicitudesForm = lazy(() => import("@/pages/Entidad/Solicitudes/SolicitudesForm"));
const SolicitudesDetalle = lazy(() => import("@/pages/Entidad/Solicitudes/SolicitudesDetalle"));
const Agencia = lazy(() => import("@/pages/Catalogo/Agencia"));
const OrigenPotencial = lazy(() => import("@/pages/Catalogo/OrigenPotencial"));
const Prioridad = lazy(() => import("@/pages/Catalogo/Prioridad"));
const ProductoInteres = lazy(() => import("@/pages/Catalogo/ProductoInteres"));
const TipoActividad = lazy(() => import("@/pages/Catalogo/TipoActividad"));
const TipoIdentificacion = lazy(() => import("@/pages/Catalogo/TipoIdentificacion"));
const Proyeccion = lazy(() => import("@/pages/Entidad/Proyecciones/ProyeccionNueva"));



export const publicRoutes = [
  { path: "/login", element: <LoginRedirect /> },
  { path: "/register", element: <Register /> },
  { path: "/forgot-password", element: <ForgotPassword /> },
  { path: "/legal/clausula", element: <Clausula /> },
  { path: "/legal/terminos", element: <Terminos /> },
  { path: "/legal/privacidad", element: <Politica /> },
];

export const protectedRoutes = [
  // Panel de métricas
  { path: "/panel/metricas", element: <DashboardPanel /> },

  {
    path: "/debug/prueba",
    element: <div style={{ color: "green", fontSize: "2rem" }}>✅ Hola desde Debug Route</div>,
  },
  

  // Prospectos
  { path: "/prospectos/vista", element: <Prospectos /> },
  { path: "/prospectos/nuevo", element: <ProspectoForm /> },
  { path: "/prospectos/editar/:id", element: <ProspectoDetalle /> },

  // Solicitudes de inversión
  { path: "/solicitudes/vista", element: <Solicitudes /> },
  { path: "/solicitudes/nuevo", element: <SolicitudesForm /> },
  { path: "/solicitudes/editar/:id", element: <SolicitudesDetalle /> },

  // Configuraciones generales
  { path: "/settings", element: <Settings /> },

  // Catálogo
<<<<<<< Updated upstream
  { path: "/catalogo/agencia/vista", element: <Agencia /> },
  { path: "/catalogo/origenpotencial/vista", element: <OrigenPotencial /> },
=======
  // Catálogo de agencias
  {
    path: "/catalogo/agencia/vista",
    element: <Agencias />
  },
  {
    path: "/catalogo/agencia/nuevo",
    element: <AgenciaForm />
  },
  {
    path: "/catalogo/agencia/editar/:id",
    element: <AgenciaForm />
  },
  // Catálogo de origenes potenciales
  {
    path: "/catalogo/origenpotencial/vista",
    element: <OrigenCliente />
  },
  {
    path: "/catalogo/origenpotencial/nuevo",
    element: <OrigenClienteForm />
  },
  {
    path: "/catalogo/origenpotencial/editar/:id",
    element: <OrigenClienteForm />
  },
  // Catalogo de tipo de producto
  {
    path: "/catalogo/productointeres/vista",
    element: <TipoProducto />
  },

  {
    path: "/catalogo/productointeres/nuevo",
    element: <TipoProductoForm />
  },

  {
    path: "/catalogo/productointeres/editar/:id",
    element: <TipoProductoForm />
  },
  //Proyecciones
  { path: "/solicitudes/editar/:id/proyeccion/nueva", element: <Proyeccion /> },
<<<<<<< Updated upstream
<<<<<<< Updated upstream
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
=======
>>>>>>> Stashed changes
  { path: "/catalogo/prioridad/vista", element: <Prioridad /> },
  { path: "/catalogo/productointeres/vista", element: <ProductoInteres /> },
  { path: "/catalogo/tipoactividad/vista", element: <TipoActividad /> },
  { path: "/catalogo/tipoidentificacion/vista", element: <TipoIdentificacion /> },

];


export const fallbackRoutes = [
  { path: "*", element: <NotFound /> },
];