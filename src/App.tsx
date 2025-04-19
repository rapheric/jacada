// export default App
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AdminDashboard } from "./AdminDashboard";
import { ClientDashboard } from "./ClientDashboard";
import { useAuth, AuthProvider } from "./keycloakProvider";
import ProtectedRoute from "./protectedRoutes";
import LoginPage from "./loginPage";
const RoleBasedRedirect = () => {
  const { keycloak } = useAuth();
  const roles = keycloak?.realmAccess?.roles || [];

  if (roles.includes("admin")) return <Navigate to="/admin" />;
  if (roles.includes("client")) return <Navigate to="/client" />;
  return <div className="p-5 text-red-500">Unauthorized</div>;
};

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<LoginPage />} />
          <Route
            path="/dashboard"
            element={
              <ProtectedRoute>
                <RoleBasedRedirect />
              </ProtectedRoute>
            }
          />
          <Route
            path="/admin"
            element={
              <ProtectedRoute>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
          <Route
            path="/client"
            element={
              <ProtectedRoute>
                <ClientDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
