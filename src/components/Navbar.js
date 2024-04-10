import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import image2 from "../images/navbarlogo.png";
import { auth } from "./firebase";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        toast.success("You have been signed out successfully!");
      })
      .catch((error) => {
        console.log(error.message);
      }); 
  };
 
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
        setUserEmail(user.email);
      } else {
        setIsLoggedIn(false);
        setUserEmail("");
      }
    });

    return () => unsubscribe();
  }, []);



  useEffect(() => {
    const createDot = () => {
      const dot = document.createElement("div");
      dot.className = "nav-dot";
      document.querySelector("#nav").appendChild(dot);

      dot.style.left = "0";

      setTimeout(() => {
        dot.style.transition = "left 1.2s ease";
        dot.style.left = "calc(100% - 5px)";
      }, 50);

      setTimeout(() => {
        dot.style.opacity = "0";
      }, 1200 + 50);

      setTimeout(() => {
        dot.remove(); 
      }, 1200 + 50 + 500);
    };

    createDot(); 

    const dotInterval = setInterval(createDot, 8000);

    return () => {
      clearInterval(dotInterval);
    };
  }, []);

  return (
    <nav id='nav'>
      <div className='navbar-container flex'>
        <Link to='/'>
          <img src={image2} alt='logo' />
        </Link>
        <div className='middle'>
          {isLoggedIn ? (
            <div className='middle'>
              <Link to='/exercises' className='nav-link'>
                Exercises
              </Link>
              <Link to='/livechat' className='nav-link'>
                LiveChat
              </Link>
              <Link to='/blog' className='nav-link'>
                Blog
              </Link>
              <Link to='/authors' className='nav-link'>
                Authors
              </Link>
              <Link to='/editor' className='nav-link'>
                Live Editor
              </Link>
              <Link to='/faq' className='nav-link'>
                FAQ
              </Link>
            </div>
          ) : (
            <>
              <Link to='/blog' className='nav-link'>
                Blog
              </Link>
              <Link to='/pricing' className='nav-link'>
                Pricing
              </Link>
              <Link to='/faq' className='nav-link'>
                FAQ
              </Link>
            </>
          )}
        </div>
        <div className='right'>
          {isLoggedIn ? (
            <>
              <span className='userEmail'>{userEmail}</span>
              <button onClick={handleLogout} className='button-35'>
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to='/login' className='button-35'>
                Login
              </Link>
              <Link to='/signup' className='button-35'>
                Sign Up
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
