import React from 'react';
// import { Navigate } from 'react-router-dom';
import { useKeycloak } from '@react-keycloak/web';

interface ProtectedRouteProps {
  children: React.ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const { keycloak } = useKeycloak();

  if (!keycloak.authenticated) {
    keycloak.login();
    return null; // Prevent rendering until login is complete
  }

  return <>{children}</>;
};

export default ProtectedRoute;
