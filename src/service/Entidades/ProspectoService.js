// src/services/ProspectoService.js
import { API_BASE_URL } from "@/config";

// Función auxiliar para manejar respuestas de la API
const handleResponse = async (response) => {
  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(errorText || "Error en la solicitud");
  }
  return await response.json();
};

// Función para obtener el token actual desde localStorage
const getAuthHeaders = () => {
  const token = JSON.parse(localStorage.getItem("user"))?.token;
  return {
    "Content-Type": "application/json",
    Authorization: `Bearer ${token}`,
  };
};

// 🟢 GET: Listar todos los prospectos
export const getProspectos = async () => {
  const res = await fetch(`${API_BASE_URL}/Prospecto`, {
    headers: getAuthHeaders(),
  });
  return handleResponse(res);
};

// 🔵 GET: Obtener prospecto por ID
export const getProspectoById = async (id) => {
  const res = await fetch(`${API_BASE_URL}/Prospecto/${id}`, {
    headers: getAuthHeaders(),
  });
  return handleResponse(res);
};

// 🟡 POST: Crear nuevo prospecto
export const createProspecto = async (data) => {
  const res = await fetch(`${API_BASE_URL}/Prospecto`, {
    method: "POST",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
  return handleResponse(res);
};

// 🟠 PUT: Actualizar prospecto existente
export const updateProspecto = async (id, data) => {
  const res = await fetch(`${API_BASE_URL}/Prospecto/${id}`, {
    method: "PUT",
    headers: getAuthHeaders(),
    body: JSON.stringify(data),
  });
  return handleResponse(res);
};

// 🔴 DELETE: Eliminar prospecto
export const deleteProspecto = async (id) => {
  const res = await fetch(`${API_BASE_URL}/Prospecto/${id}`, {
    method: "DELETE",
    headers: getAuthHeaders(),
  });
  return handleResponse(res);
};
