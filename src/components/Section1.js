import React, { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../images/pic5.png";
import image2 from "../images/pic6.png";
import image3 from "../images/pic7.png";
import image4 from "../images/pic7.png";
import "../styles/section1.css";
import WelcomeWord from './WelcomeWord';
import { Link } from "react-router-dom";

function Section1() {
  useEffect(() => {
    gsap.registerPlugin(ScrollTrigger);

    function animateFrom(elem, direction) {
      direction = direction || 1;
      var x = 0,
        y = direction * 100;
      if (elem.classList.contains("gs_reveal_fromLeft")) {
        x = -100;
        y = 0;
      } else if (elem.classList.contains("gs_reveal_fromRight")) {
        x = 100;
        y = 0;
      }
      elem.style.transform = "translate(" + x + "px, " + y + "px)";
      elem.style.opacity = "0";
      gsap.fromTo(
        elem,
        { x: x, y: y, autoAlpha: 0 },
        {
          duration: 1.25,
          x: 0,
          y: 0,
          autoAlpha: 1,
          ease: "expo",
          overwrite: "auto",
        }
      );
    }

    function hide(elem) {
      gsap.set(elem, { autoAlpha: 0 });
    }

    gsap.utils.toArray(".gs_reveal").forEach(function (elem) {
      hide(elem);

      ScrollTrigger.create({
        trigger: elem,
        onEnter: function () {
          animateFrom(elem);
        },
        onEnterBack: function () {
          animateFrom(elem, -1);
        },
        onLeave: function () {
          hide(elem);
        },
      });
    });
  }, []);

  return (
    <div className='container'>
      <header>
        <WelcomeWord />
      </header>
      <main>
        <section>
          <p>
            <span>
              In a departure from traditional courses heavy on theory, our
              program prioritizes practical exercises. Here, you'll delve
              straight into hands-on tasks, fostering deeper understanding and
              real-world application. Rather than passive learning, you'll
              actively engage in activities that cultivate tangible skills and
              confidence. Embrace this opportunity to bridge theory with
              practice, where your journey is defined by active participation
              and meaningful outcomes. Join us in redefining education through
              practical knowledge and experiential learning.
            </span>
          </p>
        </section>
      </main>

      <h1 className='header-section gs_reveal ipsType_center'>
        "The only way to learn a new programming language is by writing programs
        in it." - Dennis Ritchie
      </h1>

      <div className='features'>
        <div className='feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone'>
          <div className='featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft'>
            <div className='card'>
              <div className='image-container'>
                <img className='section1-image' src={image1} alt='' />
              </div>
            </div>
          </div>

          <div className='ipsGrid_span7 ipsType_left'>
            <h2 className='heading_large gs_reveal'>
              HTML Fundamentals and Hands-On <strong>Exercises:</strong>
            </h2>
            <ul className='gs_reveal section1-list'>
              <li>Introduction to HTML tags and elements</li>
              <li>Creating a basic HTML document structure</li>
              <li>
                Hands-on exercises to build various types of web pages using
                HTML
              </li>
              <li>
                Incorporating semantic HTML for better accessibility and SEO
              </li>
            </ul>
          </div>
        </div>

        <div className='feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone'>
          <div className='ipsGrid_span7 ipsType_right'>
            <h2 className='heading_large gs_reveal'>
              CSS Styling and Design <strong>Challenges:</strong>
            </h2>

            <ul className='gs_reveal section1-list'>
              <li>Understanding CSS selectors, properties, and values</li>
              <li>Applying CSS styles to JSX elements</li>
              <li>
                Creating layouts and designing responsive web pages using CSS
              </li>
              <li>
                Hands-on exercises to style web pages and solve design
                challenges
              </li>
            </ul>
          </div>

          <div className='featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight'>
            <div className='card'>
              <div className='image-container'>
                <img className='section1-image' src={image2} alt='' />
              </div>
            </div>
          </div>
        </div>

        <div className='feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone'>
          <div className='featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromLeft'>
            <div className='card'>
              <div className='image-container'>
                <img className='section1-image' src={image3} alt='' />
              </div>
            </div>
          </div>

          <div className='ipsGrid_span7 ipsType_left'>
            <h2 className='heading_large gs_reveal'>
              Introduction to React and Building Components:
            </h2>
            <ul className='gs_reveal section1-list'>
              <li>
                Overview of React.js and its benefits for building dynamic web
                applications
              </li>
              <li>Setting up a React development environment</li>
              <li>Understanding React components and their lifecycle</li>
              <li>
                Hands-on exercises to build basic React components and compose
                them into larger applications
              </li>
            </ul>
          </div>
        </div>

        <div className='feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone'>
          <div className='ipsGrid_span7 ipsType_right'>
            <h2 className='heading_large gs_reveal'>
              State Management and Interactivity with React
            </h2>
            <ul className='gs_reveal section1-list'>
              <li>Managing state and props in React components</li>
              <li>
                Handling user interactions and events in React applications
              </li>
              <li>
                Introduction to React hooks for functional component state
                management
              </li>
              <li>
                Hands-on exercises to create interactive user interfaces and
                manage application state with React
              </li>
            </ul>
          </div>

          <div className='featured-image-container ipsGrid_span5 gs_reveal gs_reveal_fromRight'>
            <div className='card'>
              <img className='section1-image' src={image4} alt='' />
            </div>
          </div>
        </div>
      </div>
      <div>
        <h1 className='header-section gs_reveal ipsType_center'>
          Have questions or need help?{" "}
          <Link to='/livechat' className='section1-chat'>
            Chat
          </Link>{" "}
          with us live!
        </h1>
      </div>
    </div>
  );
}

export default Section1;
