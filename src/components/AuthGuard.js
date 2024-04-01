// AuthGuard.js
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { auth } from "./firebase";

const AuthGuard = ({ children }) => {
  const navigate = useNavigate();
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
        navigate("/login");
      }
    });

    return () => unsubscribe();
  }, [navigate]);

  return isLoggedIn ? <>{children}</> : null;
};

export default AuthGuard;
