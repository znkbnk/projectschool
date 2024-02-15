import React, { useEffect } from "react";
import "../styles/navbar.css";
import { Link } from "react-router-dom";
import image1 from "../images/chatgpt.png";

const Navbar = () => {
  useEffect(() => {
    const nav = document.querySelector("#nav");

    const onScroll = (event) => {
      const scrollPosition = event.target.scrollingElement.scrollTop;
      if (scrollPosition > 10) {
        if (!nav.classList.contains("scrolled-down")) {
          nav.classList.add("scrolled-down");
        }
      } else {
        if (nav.classList.contains("scrolled-down")) {
          nav.classList.remove("scrolled-down");
        }
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
        <div className='left'>
          <img src={image1} alt='ChatGPT logo' />
        </div>
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
          <button className='button-35'>Login</button>
          <button className='button-35'>Sign Up</button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
