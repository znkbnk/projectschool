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
  const [showLinks, setShowLinks] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showExercisesDropdown, setShowExercisesDropdown] = useState(false);
  const [showResponsiveDropdown, setShowResponsiveDropdown] = useState(false);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 460);

  // Handle window resize to update isMobile state
  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 460);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Handle user logout
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

  // Track authentication state
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setIsLoggedIn(true);
      } else {
        setIsLoggedIn(false);
      }
    });

    return () => unsubscribe(); // Cleanup on unmount
  }, []);

  // Toggle the main menu (for mobile)
  const toggleMenu = () => {
    const newValue = !showLinks;
    setShowLinks(newValue);
    setIsMenuOpen(newValue);
  };

  // Toggle the exercises dropdown (for desktop)
  const toggleExercisesDropdown = () => {
    setShowExercisesDropdown((prevState) => !prevState);
  };

  // Toggle the responsive dropdown (for mobile)
  const toggleResponsiveDropdown = () => {
    setShowResponsiveDropdown((prevState) => !prevState);
  };

  return (
    <nav id="nav">
      <div className="navbar-container flex">
        {/* Logo */}
        <Link to="/">
          <img
            src={isMobile ? imageSmall : imageLarge}
            alt="Project School Logo"
          />
        </Link>

        {/* Middle Section (Desktop) */}
        <div className="middle">
          {isLoggedIn && (
            <>
              <div className="nav-dropdown">
                <Link
                  onClick={toggleExercisesDropdown}
                  className="nav-link"
                  aria-expanded={showExercisesDropdown}
                  aria-haspopup="true"
                >
                  Practice
                </Link>
                {showExercisesDropdown && (
                  <div className="dropdown-menu" role="menu">
                    <div className="dropdown-item" key="exercises">
                      <Link to="/exercises" className="dropdown-link">
                        React Exercises
                      </Link>
                      <div className="sub-dropdown-menu">
                        <Link
                          to="/exercises/reactlessons"
                          className="sub-dropdown-item"
                          key="dynamic-interfaces"
                        >
                          Dynamic Interfaces
                        </Link>
                        <Link
                          to="/exercises/livelessons"
                          className="sub-dropdown-item"
                          key="live-projects"
                        >
                          Live Projects
                        </Link>
                        <Link
                          to="/exercises/workshoplist"
                          className="sub-dropdown-item"
                          key="build-with-me"
                        >
                          Build with Me
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown-item" key="interview">
                      <Link to="/interview" className="dropdown-link">
                        React Interview
                      </Link>
                      <div className="sub-dropdown-menu">
                        <Link
                          to="/interview/InterviewQuestions"
                          className="sub-dropdown-item"
                          key="interview-questions"
                        >
                          Interview Questions
                        </Link>
                        <Link
                          to="/interview/InterviewTasks"
                          className="sub-dropdown-item"
                          key="interview-tasks"
                        >
                          Interview Tasks
                        </Link>
                        <Link
                          to="/interview/InterviewQuiz/:slug"
                          className="sub-dropdown-item"
                          key="interview-quiz"
                        >
                          Interview Quiz
                        </Link>
                        <Link
                          to="/interview/InterviewCodeQuiz"
                          className="sub-dropdown-item"
                          key="code-quiz"
                        >
                          Code Quiz
                        </Link>
                        <Link
                          to="/interview/InterviewCorrectCode/:slug"
                          className="sub-dropdown-item"
                          key="correct-code"
                        >
                          Correct Code
                        </Link>
                      </div>
                    </div>

                    <div className="dropdown-item" key="reference">
                      <Link to="/reference" className="dropdown-link">
                        Reference
                      </Link>
                      <div className="sub-dropdown-menu">
                        <Link
                          to="/reference/reactreference"
                          className="sub-dropdown-item"
                          key="react-reference"
                        >
                          React
                        </Link>
                        <Link
                          to="/reference/expressreference"
                          className="sub-dropdown-item"
                          key="express-reference"
                        >
                          Express.js
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
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
            </>
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

        {/* Right Section (Login/Sign Out and Menu Icon) */}
        <div className="right">
          {isLoggedIn ? (
            <>
              <Coffee />
              <button onClick={handleLogout} className="button-35">
                Sign Out
              </button>
            </>
          ) : (
            <>
              <Coffee />
              <Link to="/login" className="button-35">
                Login
              </Link>
              <Link to="/signup" className="button-35">
                Sign Up
              </Link>
            </>
          )}

          {/* Menu Icon (Mobile) */}
          <div
            className={`menu-icon ${isMenuOpen ? "open" : ""}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isMenuOpen}
          >
            <div className="menu-icon__line"></div>
            <div className="menu-icon__line"></div>
            <div className="menu-icon__line"></div>
          </div>

          {/* Responsive Links (Mobile) */}
          <div className={`responsive-links ${isMenuOpen ? "open" : ""}`}>
            {isLoggedIn ? (
              <>
                <div className="responsive-dropdown">
                  <Link
                    onClick={toggleResponsiveDropdown}
                    className="responsive-nav-link"
                    aria-expanded={showResponsiveDropdown}
                    aria-haspopup="true"
                  >
                    Practice
                  </Link>
                  {showResponsiveDropdown && (
                    <div className="responsive-dropdown-menu" role="menu">
                      <Link
                        to="/exercises"
                        className="responsive-dropdown-item"
                        key="exercises"
                      >
                        React Exercises
                      </Link>
                      <Link
                        to="/interview"
                        className="responsive-dropdown-item"
                        key="interview"
                      >
                        React Interview
                      </Link>
                      <Link
                        to="/exercises/workshoplist"
                        className="responsive-dropdown-item"
                        key="workshop"
                      >
                        Workshop
                      </Link>
                    </div>
                  )}
                </div>
                <Link to="/livechat" className="responsive-nav-link">
                  LiveChat
                </Link>
                <Link to="/pricing" className="responsive-nav-link">
                  Pricing
                </Link>
                <Link to="/blogs" className="responsive-nav-link">
                  Articles
                </Link>
                <Link to="/authors" className="responsive-nav-link">
                  Authors
                </Link>
                <Link to="/faq" className="responsive-nav-link">
                  FAQ
                </Link>
              </>
            ) : (
              <>
                <Link to="/blogs" className="responsive-nav-link">
                  Articles
                </Link>
                <Link to="/pricing" className="responsive-nav-link">
                  Pricing
                </Link>
                <Link to="/faq" className="responsive-nav-link">
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