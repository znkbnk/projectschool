import React from "react";
import { Navigate, useLocation } from "react-router-dom";

const ProtectedRoute = ({ children, isLoggedIn, isAdmin }) => {
  const location = useLocation();

  if (!isLoggedIn) {
    return <Navigate to={`/login?redirect=${location.pathname}`} />;
  }
  if (isAdmin === false && isLoggedIn === true) {
    // if user is not an admin but logged in, prevent access to admin-only routes
    return <Navigate to={`/login?redirect=${location.pathname}`} />;
  }
  return children;
};

export default ProtectedRoute;
