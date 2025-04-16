import React from "react";
import { Routes, Route } from "react-router-dom";
// import ProtectedRoute from "./ProtectedRoute";
import HomePage from "../pages/home";
import DashboardLayout from "../components/Layout/dashboardLayout";
import ProtectedRoute from "./privateRoute";

const AppRoutes: React.FC = () => {
  return (
    <Routes>
      <Route path="/" element={<HomePage />} />
      <Route
        path="/dashboard"
        element={
          <ProtectedRoute>
            <DashboardLayout />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
};

export default AppRoutes;
