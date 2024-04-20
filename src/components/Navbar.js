import React, { useEffect, useRef, useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import image2 from "../images/navbarlogo.png";
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

  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        // Click occurred outside the dropdown
        setShowLinks(false);
        setIsMenuOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

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
    if (isMenuOpen) {
      setShowLinks(false);
    } else {
      if (!isLoggedIn) {
        setShowLinks(true);
      } else {
        setShowLinks(!showLinks);
      }
    }
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav id='nav'>
      <div className='navbar-container flex'>
        <Link to='/'>
          <img src={image2} alt='logo' />
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
              <Link to='/blog' className='nav-link'>
                Blog
              </Link>
              <Link to='/authors' className='nav-link'>
                Authors
              </Link>
              <Link to='/editor' className='nav-link'>
                LiveEditor
              </Link>
              <Link to='/faq' className='nav-link'>
                FAQ
              </Link>
            </div>
          )}
          {!isLoggedIn && showLinks && (
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
      <div
        ref={dropdownRef}
        className={showLinks ? "responsive-links open" : "responsive-links"}
      >
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
            <Link to='/editor' className='nav-link'>
              LiveEditor
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
