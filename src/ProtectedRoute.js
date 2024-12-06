import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, isLoggedIn, isAdmin, requiresAdmin }) => {
  const location = useLocation();

  // Redirect to login if user is not logged in
  if (!isLoggedIn) {
    return <Navigate to={`/login?redirect=${location.pathname}`} />;
  }

  // Redirect if route requires admin access and the user is not an admin
  if (requiresAdmin && !isAdmin) {
    return <Navigate to="/" />;
  }

  return children;
};

export default ProtectedRoute;
