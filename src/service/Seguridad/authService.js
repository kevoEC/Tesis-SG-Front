// src/services/authService.js
import { API_BASE_URL } from "@/config";

export const loginRequest = async (email, contraseña) => {
  const response = await fetch(`${API_BASE_URL}/Usuario/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ email, contraseña }),
  });

  if (!response.ok) {
    const error = await response.text();
    throw new Error(error || "Error al iniciar sesión");
  }

  const data = await response.json();
  return data; // contiene idUsuario, nombre, email, token
};
