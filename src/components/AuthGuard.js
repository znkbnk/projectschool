import React from "react";
import { Navigate, useLocation } from "react-router-dom";
import { auth } from "./firebase";

const AuthGuard = ({ children }) => {
  const location = useLocation();

  // Check if user is authenticated
  const isAuthenticated = auth.currentUser !== null;

  // Redirect to login if not authenticated
  if (!isAuthenticated) {
    return <Navigate to='/login' state={{ from: location }} />;
  }

  // Render children if authenticated
  return <>{children}</>;
};

export default AuthGuard;
