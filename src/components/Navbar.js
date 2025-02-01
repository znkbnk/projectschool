import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import imageLarge from "../images/navbarlogo.webp";
import imageSmall from "../images/pslogosmall.webp";

import { auth } from "./firebase";
import { toast } from "react-toastify";
import Coffee from "./BuyMeACofee";

const Navbar = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  // eslint-disable-next-line no-unused-vars
  const [userEmail, setUserEmail] = useState("");
  const [showLinks, setShowLinks] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showExercisesDropdown, setShowExercisesDropdown] = useState(false);
  const [showResponsiveDropdown, setShowResponsiveDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 460); // State to track mobile view

  // Handle window resize to update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 460);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

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
          {/* Conditionally render the image based on screen size */}
          <img
            src={isMobile ? imageSmall : imageLarge}
            alt="logo"
            rel="preload"
          />
        </Link>
        {/* Rest of the code remains the same */}
        <div className='middle'>
          {isLoggedIn && (
            <div className='middle'>
              <div className='nav-dropdown'>
                <Link onClick={toggleExercisesDropdown} className='nav-link'>
                  Practice
                </Link>
                {showExercisesDropdown && (
                  <div className='dropdown-menu'>
                    <div className='dropdown-item'>
                      <Link to='/exercises' className='dropdown-link'>React Exercises</Link>
                      <div className='sub-dropdown-menu'>
                        <Link
                          to='/exercises/reactlessons'
                          className='sub-dropdown-item'
                        >
                          Dynamic Interfaces
                        </Link>
                        <Link
                          to='/exercises/livelessons'
                          className='sub-dropdown-item'
                        >
                          Live Projects
                        </Link>
                        <Link
                          to='/exercises/workshoplist'
                          className='sub-dropdown-item'
                        >
                          Build with Me
                        </Link>
                      </div>
                    </div>

                    <div className='dropdown-item'>
                      <Link to='/interview' className='dropdown-link'>React Interview</Link>
                      <span></span>
                      <div className='sub-dropdown-menu'>
                        <Link
                          to='/interview/InterviewQuestions'
                          className='sub-dropdown-item'
                        >
                          Interview Questions
                        </Link>
                        <Link
                          to='interview/InterviewTasks'
                          className='sub-dropdown-item'
                        >
                          Interview Tasks
                        </Link>
                        <Link
                          to='/interview/InterviewQuiz/:slug'
                          className='sub-dropdown-item'
                        >
                          Interview Quiz
                        </Link>
                        <Link
                          to='/interview/InterviewCodeQuiz'
                          className='sub-dropdown-item'
                        >
                          Code Quiz
                        </Link>
                        <Link
                          to='/interview/InterviewCorrectCode/:slug'
                          className='sub-dropdown-item'
                        >
                          Correct Code
                        </Link>
                      </div>
                    </div>
                    <div className='dropdown-item'>
                      <Link to='/reference' className='dropdown-link'>Reference</Link>
                      <span></span>
                      <div className='sub-dropdown-menu'>
                        <Link
                          to='/reference/reactreference'
                          className='sub-dropdown-item'
                        >
                          React
                        </Link>
                        <Link
                          to='interview/InterviewTasks'
                          className='sub-dropdown-item'
                        >
                          Express.js
                        </Link>
                        
                      </div>
                    </div>
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
              <Coffee />
              <button onClick={handleLogout} className='button-35'>
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Coffee />
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
                      <Link
                        to='/exercises/workshoplist'
                        className='responsive-dropdown-item'
                      >
                        Workshop
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