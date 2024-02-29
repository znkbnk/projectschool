import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import image2 from "../images/navbarlogo.png";
import { auth } from "./firebase";
import { toast } from "react-toastify";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [userEmail, setUserEmail] = useState("");

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };

 const handleLogout = () => {
   auth
     .signOut()
     .then(() => {
       toast.success("You have been signed out successfully!"); // Show success toast
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
    const nav = document.querySelector("#nav");

    const onScroll = () => {
      const scrollPosition = window.scrollY;
      if (scrollPosition > 10) {
        nav.classList.add("scrolled-down");
      } else {
        nav.classList.remove("scrolled-down");
      }
    };

    document.addEventListener("scroll", onScroll);

    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  useEffect(() => {
    const createDot = () => {
      const dot = document.createElement("div");
      dot.className = "nav-dot";
      document.querySelector("#nav").appendChild(dot);

      dot.style.left = "-5px";

      setTimeout(() => {
        dot.style.transition = "left 1.2s ease";
        dot.style.left = "calc(100% + 5px)";
      }, 50);
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
        <Link to='/projectschool'>
          <img src={image2} alt='logo' />
        </Link>
        <div className='middle'>
          <Link to='/livechat' className='nav-link'>
            LiveChat
          </Link>
          <Link to='/exercises' className='nav-link'>
            Exercises
          </Link>
          <Link to='/learn' className='nav-link'>
            Learn
          </Link>
          <Link to='/editor' className='nav-link'>
            Live Editor
          </Link>
        </div>
        <div className='right'>
          {isLoggedIn ? ( // Render Sign Out button if user is logged in
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
      <div className='menu-icon'>
        <Link to='/projectschool'>
          <img src={image2} alt='logo' />
        </Link>
        <div className='right'>
          {isLoggedIn ? (
            <>
              <span className='usersEmail'>{userEmail}</span>

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
        <div onClick={toggleDropdown}>
          {showDropdown ? (
            <i className='fas fa-times'></i>
          ) : (
            <i className='fas fa-bars'></i>
          )}
        </div>
      </div>
      {showDropdown && (
        <div className='dropdown show'>
          <Link to='/livechat' className='dropdown-link'>
            LiveChat
          </Link>
          <Link to='/exercises' className='dropdown-link'>
            Exercises
          </Link>
          <Link to='/learn' className='dropdown-link'>
            Learn
          </Link>
          <Link to='/more' className='dropdown-link'>
            More
          </Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
