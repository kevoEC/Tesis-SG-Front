import { API_BASE_URL } from "@/config";

const getAuthHeaders = () => {
  const token = JSON.parse(localStorage.getItem("user"))?.token;
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

const handleResponse = async (res) => {
  if (!res.ok) {
    const errorText = await res.text();
    throw new Error(errorText || "Error en la solicitud");
  }
  return await res.json();
};

export const getEntidadFiltrada = async (entidad, filtro, idUsuario) => {
  const url = `${API_BASE_URL}/${entidad}/filtrados`;

  let payload = {};

  // 👉 Construimos el payload dinámicamente por entidad y filtro
  switch (entidad) {
    case "prospecto":
      payload = construirPayloadProspecto(filtro, idUsuario);
      break;

    case "actividad":
      payload = {
        idProspecto: null,
        estado: filtro === "activos" ? true : filtro === "inactivos" ? false : null,
        soloMisRegistros: filtro === "mis",
        idUsuario: filtro === "mis" ? idUsuario : null,
        busqueda: null,
      };
      break;

    case "solicitudinversion":
      payload = {
        identificacion: "",
        idTipoSolicitud: 0,
        idTipoCliente: 0,
        soloMisRegistros: filtro === "mis",
        idUsuario: filtro === "mis" ? idUsuario : null,
        busqueda: "",
      };
      break;

    default:
      throw new Error(`Entidad no soportada: ${entidad}`);
  }

  const res = await fetch(url, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(payload),
  });

  return handleResponse(res);
};

// 🔧 Función separada para prospectos
function construirPayloadProspecto(filtro, idUsuario) {
  switch (filtro) {
    case "todos":
      return {
        soloMisRegistros: false,
        idUsuario: null,
        estado: null,
        busqueda: null,
      };
    case "mis":
      return {
        soloMisRegistros: true,
        idUsuario,
        estado: null,
        busqueda: null,
      };
    case "activos":
      return {
        soloMisRegistros: false,
        idUsuario: null,
        estado: true,
        busqueda: null,
      };
    case "inactivos":
      return {
        soloMisRegistros: true,
        idUsuario,
        estado: false,
        busqueda: null,
      };
    default:
      return {};
  }
}
