// src/components/LoginRedirect.jsx
import { Navigate } from "react-router-dom";
import { useAuth } from "@/hooks/useAuth";
import Login from "@/pages/Auth/Login";

export default function LoginRedirect() {
  const { token } = useAuth();
  return token ? <Navigate to="/panel/metricas" /> : <Login />;
}
