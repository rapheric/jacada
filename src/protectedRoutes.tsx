import React from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "./keycloakProvider";
// import { useAuth } from "";

const ProtectedRoute: React.FC<{ children: JSX.Element }> = ({ children }) => {
  const { isAuthenticated, initialized } = useAuth();

  if (!initialized) return <div className="text-center p-10">Loading...</div>;
  return isAuthenticated ? children : <Navigate to="/" replace />;
};

export default ProtectedRoute;
