import React, { type ReactNode } from "react";
import { Navigate } from "react-router-dom";

type Children = {
  children: ReactNode;
};

const ProtectedRoute = ({ children }: Children) => {
  const token = localStorage.getItem("token");

  if (!token) {
    return <Navigate to="/login" replace />;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
