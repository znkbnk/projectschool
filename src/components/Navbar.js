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
    setShowLinks(!showLinks); 
    setIsMenuOpen(!isMenuOpen); 
  };

  return (
    <nav id='nav'>
      <div className='navbar-container flex'>
        <Link to='/'>
          <img
            src={
              window.innerWidth > 460
                ? imageLarge
                : imageSmall
            }
            alt='logo'
          />
        </Link>
        <div className='middle'>
          {isLoggedIn && (
            <div className='middle'>
              <Link to='/exercises' className='nav-link'>
                Exercises
              </Link>
              <Link to='/livechat' className='nav-link'>
                LiveChat
              </Link>
              <Link to='/pricing' className='nav-link'>
                Pricing
              </Link>
              <Link to='/blog' className='nav-link'>
                Blog
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
          <div
            className={`menu-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
          >
            <div className='menu-icon__line'></div>
            <div className='menu-icon__line'></div>
            <div className='menu-icon__line'></div>
          </div>
        </div>
      </div>
      <div className={showLinks ? "responsive-links open" : "responsive-links"}>
        {!isLoggedIn && (
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
        {isLoggedIn && showLinks && (
          <>
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
            <Link to='/pricing' className='nav-link'>
                Pricing
              </Link>
            <Link to='/faq' className='nav-link'>
              FAQ
            </Link>
          </>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
