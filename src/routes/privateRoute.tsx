import React from "react";
import { Navigate } from "react-router-dom";
import { useKeycloak } from "../keycloakprovider";
// import { useKeycloak } from "../providers/KeycloakProvider";

interface ProtectedRouteProps {
  children: React.ReactElement;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { isAuthenticated } = useKeycloak();

  if (!isAuthenticated) {
    return <Navigate to="/" replace />;
  }

  return children;
};

export default ProtectedRoute;
