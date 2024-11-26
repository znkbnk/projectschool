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
  const [showExercisesDropdown, setShowExercisesDropdown] = useState(false);
  const [showResponsiveDropdown, setShowResponsiveDropdown] = useState(false);

  const handleLogout = () => {
    auth
      .signOut()
      .then(() => {
        setIsLoggedIn(false);
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

  const toggleExercisesDropdown = () => {
    setShowExercisesDropdown((prevState) => !prevState);
  };

  const toggleResponsiveDropdown = () => {
    setShowResponsiveDropdown(!showResponsiveDropdown);
  };

  return (
    <nav id='nav'>
      <div className='navbar-container flex'>
        <Link to='/'>
          <img
            src={window.innerWidth > 460 ? imageLarge : imageSmall}
            alt='logo'
          />
        </Link>
        <div className='middle'>
          {isLoggedIn && (
            <div className='middle'>
              <div className='nav-dropdown'>
                <Link onClick={toggleExercisesDropdown} className='nav-link'>
                  Practice
                </Link>
                {showExercisesDropdown && (
                  <div className='dropdown-menu'>
                    <Link to='/exercises' className='dropdown-item'>
                      React Exercises
                    </Link>
                    <Link to='/interview' className='dropdown-item'>
                      React Interview
                    </Link>
                  </div>
                )}
              </div>
              <Link to='/livechat' className='nav-link'>
                LiveChat
              </Link>
              <Link to='/pricing' className='nav-link'>
                Pricing
              </Link>
              <Link to='/blogs' className='nav-link'>
                Articles
              </Link>
              <Link to='/authors' className='nav-link'>
                Authors
              </Link>
              <Link to='/faq' className='nav-link'>
                FAQ
              </Link>
            </div>
          )}
          {!isLoggedIn && (
            <>
              <Link to='/blogs' className='nav-link'>
                Articles
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
          <div
            className={`menu-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className='menu-icon__line'></div>
            <div className='menu-icon__line'></div>
            <div className='menu-icon__line'></div>
          </div>
          <div className={`responsive-links ${isMenuOpen ? "open" : ""}`}>
            {isLoggedIn ? (
              <>
                <div className='responsive-dropdown'>
                  <Link
                    onClick={toggleResponsiveDropdown}
                    className='responsive-nav-link responsive-dropdown'
                  >
                    Practice
                  </Link>
                  {showResponsiveDropdown && (
                    <div className='responsive-dropdown-menu'>
                      <Link
                        to='/exercises'
                        className='responsive-dropdown-item'
                      >
                        React Exercises
                      </Link>
                      <Link
                        to='/interview'
                        className='responsive-dropdown-item'
                      >
                        React Interview
                      </Link>
                    </div>
                  )}
                </div>
                <Link to='/livechat' className='responsive-nav-link'>
                  LiveChat
                </Link>
                <Link to='/pricing' className='responsive-nav-link'>
                  Pricing
                </Link>
                <Link to='/blogs' className='responsive-nav-link'>
                  Articles
                </Link>
                <Link to='/authors' className='responsive-nav-link'>
                  Authors
                </Link>
                <Link to='/faq' className='responsive-nav-link'>
                  FAQ
                </Link>
              </>
            ) : (
              <>
                <Link to='/blogs' className='responsive-nav-link'>
                  Articles
                </Link>
                <Link to='/pricing' className='responsive-nav-link'>
                  Pricing
                </Link>
                <Link to='/faq' className='responsive-nav-link'>
                  FAQ
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
