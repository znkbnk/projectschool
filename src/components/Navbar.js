import React, { useEffect, useState } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import image2 from "../images/navbarlogo.png";

const Navbar = () => {
  const [showDropdown, setShowDropdown] = useState(false);

  const toggleDropdown = () => {
    setShowDropdown((prevState) => !prevState);
  };
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
          <Link to='/more' className='nav-link'>
            More
          </Link>
        </div>
        <div className='right'>
          <Link to='/login' className='button-35'>
            Login
          </Link>
          <Link to='/signup' className='button-35'>
            Sign Up
          </Link>
        </div>
      </div>
      <div className='menu-icon'>
        <Link to='/projectschool'>
          <img src={image2} alt='logo' />
        </Link>
        <div className='right'>
          <Link to='/login' className='button-35'>
            Login
          </Link>
          <Link to='/signup' className='button-35'>
            Sign Up
          </Link>
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
