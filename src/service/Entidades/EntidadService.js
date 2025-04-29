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
  if (filtro === "mis") {
    // 🔁 Si es MIS: POST con filtros dinámicos
    const url = `${API_BASE_URL}/${entidad}/filtradas`;
    let payload = {};

    switch (entidad) {
      case "prospecto":
        payload = construirPayloadProspecto(filtro, idUsuario);
        break;

      case "actividad":
        payload = {
          idProspecto: null,
          estado: null,
          soloMisRegistros: true,
          idUsuario,
          busqueda: null,
        };
        break;

      case "solicitudinversion":
        payload = {
          identificacion: "",
          idTipoSolicitud: 0,
          idTipoCliente: 0,
          soloMisRegistros: true,
          idUsuario,
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
  } else {
    // 🌐 Si es TODOS u otros: GET simple
    const url = `${API_BASE_URL}/${entidad}`;
    const res = await fetch(url, {
      method: "GET",
      headers: getAuthHeaders(),
    });

    return handleResponse(res);
  }
};

// 🔧 Función separada para prospectos
function construirPayloadProspecto(filtro, idUsuario) {
  switch (filtro) {
    case "mis":
      return {
        soloMisRegistros: true,
        idUsuario,
        estado: null,
        busqueda: null,
      };
    default:
      return {
        soloMisRegistros: false,
        idUsuario: null,
        estado:
          filtro === "activos" ? true : filtro === "inactivos" ? false : null,
        busqueda: null,
      };
  }
}
