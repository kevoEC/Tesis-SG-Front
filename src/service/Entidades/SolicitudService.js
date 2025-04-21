import { API_BASE_URL } from "@/config";

// 👉 Reutilizamos lógica compartida
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Error en la solicitud");
  }
  return await response.json();
};

const getAuthHeaders = () => {
  const token = JSON.parse(localStorage.getItem("user"))?.token;
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

// 🟢 GET: Obtener todas las solicitudes
export const getSolicitudes = async () => {
  const res = await fetch(`${API_BASE_URL}/SolicitudInversion`, {
    headers: getAuthHeaders(),
  });
  return handleResponse(res);
};

// 🔵 GET: Obtener por ID
export const getSolicitudById = async (id) => {
  const res = await fetch(`${API_BASE_URL}/SolicitudInversion/${id}`, {
    headers: getAuthHeaders(),
  });
  return handleResponse(res);
};

// 🟡 POST: Crear nueva
export const createSolicitud = async (data) => {
  const res = await fetch(`${API_BASE_URL}/SolicitudInversion`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
  return handleResponse(res);
};

// 🟠 PUT: Actualizar
export const updateSolicitud = async (id, data) => {
  const res = await fetch(`${API_BASE_URL}/SolicitudInversion/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
  return handleResponse(res);
};

// 🔴 DELETE: Eliminar
export const deleteSolicitud = async (id) => {
  const res = await fetch(`${API_BASE_URL}/SolicitudInversion/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  return handleResponse(res);
};

// 🟣 POST: Obtener solicitudes con filtros dinámicos (para VistaEntidad)
export const getSolicitudesFiltradas = async (filtro) => {
  const res = await fetch(`${API_BASE_URL}/SolicitudInversion/filtradas`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(filtro),
  });
  return handleResponse(res);
};

// 🔵 GET: Obtener solicitudes por ID de prospecto (para detalle)
export const getSolicitudesByProspectoId = async (idProspecto) => {
  const res = await fetch(`${API_BASE_URL}/SolicitudInversion/prospecto/${idProspecto}`, {
    headers: getAuthHeaders(),
  });

  // Si devuelve 404 (sin solicitudes), no lanza error
  if (res.status === 404) return [];

  return handleResponse(res);
};
