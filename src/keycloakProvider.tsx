import React, { createContext, useContext, useEffect, useState } from "react";
import keycloak from "./keycloak";

interface AuthContextType {
  isAuthenticated: boolean;
  keycloak: Keycloak.KeycloakInstance;
  initialized: boolean;
}

const AuthContext = createContext<AuthContextType>({
  isAuthenticated: false,
  keycloak,
  initialized: false,
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [initialized, setInitialized] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  useEffect(() => {
    keycloak
      .init({
        onLoad: "login-required",
        redirectUri: import.meta.env.VITE_KEYCLOAK_REDIRECT_URI,
      })
      .then((auth) => {
        setIsAuthenticated(auth);
        setInitialized(true);
      })
      .catch(console.error);
  }, []);

  return (
    <AuthContext.Provider value={{ isAuthenticated, keycloak, initialized }}>
      {initialized ? (
        children
      ) : (
        <div className="text-center p-10">Loading...</div>
      )}
    </AuthContext.Provider>
  );
};
