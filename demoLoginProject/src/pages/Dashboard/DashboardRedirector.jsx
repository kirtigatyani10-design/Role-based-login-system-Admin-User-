import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

const DashboardRedirector = () => {
  const role = useSelector((state) => state.auth.role) || localStorage.getItem("role");
  if (role === "admin") return <Navigate to="/admin/dashboard" replace />;
  return <Navigate to="/dashboard/user" replace />;
};

export default DashboardRedirector;
