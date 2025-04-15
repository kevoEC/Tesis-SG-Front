// src/contexts/AuthProvider.jsx
import { useState } from "react";
import { AuthContext } from "./AuthContext";
import { loginRequest } from "@/service/Seguridad/authService";

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    const saved = localStorage.getItem("user");
    return saved ? JSON.parse(saved) : null;
  });

  const isAuthenticated = !!user?.token;

  const login = async (email, contraseña) => {
    const data = await loginRequest(email, contraseña);
    setUser(data);
    localStorage.setItem("user", JSON.stringify(data));
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, isAuthenticated }}>
      {children}
    </AuthContext.Provider>
  );
};
