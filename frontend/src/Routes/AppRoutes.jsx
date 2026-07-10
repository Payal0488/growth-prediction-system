import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "../Layout/MainLayout";
import PublicLayout from "../Layout/PublicLayout";
import Home from "../Pages/Home";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import ForgotPassword from "../Pages/ForgotPassword";
import Dashboard from "../Pages/Dashboard";
import UploadData from "../Pages/UploadData";
import Prediction from "../Pages/Prediction";
import HealthScore from "../Pages/HealthScore";
import Recommendations from "../Pages/Recommendations";
import Reports from "../Pages/Reports";
import WhatIfAnalysis from "../Pages/WhatIfAnalysis";
import RiskAnalysis from "../Pages/RiskAnalysis";
import Settings from "../Pages/Settings";

const AppRoutes = () => {
  return (
    <Routes>
      <Route element={<PublicLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/forgot-password" element={<ForgotPassword />} />
      </Route>

      <Route element={<MainLayout />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/upload" element={<UploadData />} />
        <Route path="/prediction" element={<Prediction />} />
        <Route path="/health" element={<HealthScore />} />
        <Route path="/recommendations" element={<Recommendations />} />
        <Route path="/reports" element={<Reports />} />
        <Route path="/what-if" element={<WhatIfAnalysis />} />
        <Route path="/risk" element={<RiskAnalysis />} />
        <Route path="/settings" element={<Settings />} />
      </Route>

      <Route path="*" element={<Navigate to="/" replace />} />
    </Routes>
  );
};

export default AppRoutes;
