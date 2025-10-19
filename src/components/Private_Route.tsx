import { ReactNode } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactNode;
  allowedType?: "CLIENTE" | "PRESTADOR";
}

export default function PrivateRoute({
  children,
  allowedType,
}: PrivateRouteProps) {
  const token = localStorage.getItem("token");
  const tipo = localStorage.getItem("tipo"); // salvar tipo no login também

  if (!token) return <Navigate to="/" />;
  if (allowedType && tipo !== allowedType) return <Navigate to="/" />;

  return <>{children}</>;
}
