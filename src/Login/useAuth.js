import { useEffect, useState } from "react";
import { auth } from "../components/firebase"; 

const useAuth = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  useEffect(() => {
    const fetchUserData = async (user, retries = 5, delay = 3000) => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/users/${user.uid}/subscription-status`
        );
        if (!response.ok) {
          if (response.status === 404 && retries > 0) {
            console.warn("User not found, retrying...");
            setTimeout(
              () => fetchUserData(user, retries - 1, delay * 2),
              delay
            ); 
            return;
          }
          throw new Error(`Error: ${response.statusText}`);
        }
        const userData = await response.json();
        setIsAdmin(userData.isAdmin);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserEmail(user.email);
        await fetchUserData(user);
      } else {
        setIsLoggedIn(false);
        setIsAdmin(false);
        setUserEmail("");
      }
    });

    return () => unsubscribe();
  }, []);

  return { isLoggedIn, isAdmin, userEmail };
};

export default useAuth;
