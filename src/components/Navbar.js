import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import imageLarge from "../images/navbarlogo.webp";
import imageSmall from "../images/pslogosmall.webp";

import { auth } from "./firebase";
import { toast } from "react-toastify";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");
  const [showLinks, setShowLinks] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        setIsLoggedIn(false); // Reset state on logout
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

  const toggleMenu = () => {
    const newValue = !showLinks;
    setShowLinks(newValue);
    setIsMenuOpen(newValue);
  };

  return (
    <nav id="nav">
      <div className="navbar-container flex">
        <Link to="/">
          <img
            src={window.innerWidth > 460 ? imageLarge : imageSmall}
            alt="logo"
          />
        </Link>
        <div className="middle">
          {isLoggedIn && (
            <div className="middle">
              <div className="dropdown">
                <span className="nav-link">Practice</span>
                <div className="dropdown-content">
                  <Link to="/exercises" className="dropdown-item">
                    Exercises
                  </Link>
                  <Link to="/interview" className="dropdown-item">
                    Interview
                  </Link>
                </div>
              </div>
              <Link to="/livechat" className="nav-link">
                LiveChat
              </Link>
              <Link to="/pricing" className="nav-link">
                Pricing
              </Link>
              <Link to="/blogs" className="nav-link">
                Articles
              </Link>
              <Link to="/authors" className="nav-link">
                Authors
              </Link>
              <Link to="/faq" className="nav-link">
                FAQ
              </Link>
            </div>
          )}
          {!isLoggedIn && (
            <>
              <Link to="/blogs" className="nav-link">
                Articles
              </Link>
              <Link to="/pricing" className="nav-link">
                Pricing
              </Link>
              <Link to="/faq" className="nav-link">
                FAQ
              </Link>
            </>
          )}
        </div>
        <div className="right">
          {isLoggedIn ? (
            <>
              <span className="userEmail">{userEmail}</span>
              <button onClick={handleLogout} className="button-35">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Link to="/login" className="button-35">
                Login
              </Link>
              <Link to="/signup" className="button-35">
                Sign Up
              </Link>
            </>
          )}
          <div
            className={`menu-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className="menu-icon__line"></div>
            <div className="menu-icon__line"></div>
            <div className="menu-icon__line"></div>
          </div>
        </div>
      </div>
      <div
        className={showLinks ? "responsive-links open" : "responsive-links"}
      ></div>
    </nav>
  );
};

export default Navbar;
