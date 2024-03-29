import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import image1 from "../images/pic5.png";
import image2 from "../images/pic6.png";
import image3 from "../images/pic7.png";
import image4 from "../images/pic7.png";
import image5 from "../images/sectionPicture1.jpg";
import "../styles/section1.css";
import WelcomeWord from "./WelcomeWord";
import { Link } from "react-router-dom";

function Section1() {
  const [scrollPosition, setScrollPosition] = useState(0);
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [
      {
        title: "Project Showcase",
        content: (
          <>
            <ul>
              <li>
                Display featured projects or case studies completed by students.
              </li>
              <li>
                Highlight the practical skills and knowledge gained through the
                course.
              </li>
              <li>
                Showcase visually appealing screenshots or thumbnails of the
                projects.
              </li>
            </ul>
          </>
        ),
        imageSrc: image1,
      },
      {
        title: "Testimonials and Success Stories",
        content: (
          <>
            <ul>
              <li>
                Share testimonials from past students who have benefited from
                the practical approach of the program.
              </li>
              <li>
                Include success stories or anecdotes about how hands-on learning
                has made a difference in their careers or projects.
              </li>
              <li>
                Use quotes or short excerpts to convey the impact of the course
                on students learning experiences.
              </li>
            </ul>
          </>
        ),
        imageSrc: image2,
      },
      {
        title: "Upcoming Events or Workshops",
        content: (
          <>
            <ul>
              <li>
                Promote upcoming events, workshops, or guest lectures related to
                HTML, CSS, and React.
              </li>
              <li>
                Provide brief descriptions of the topics covered and highlight
                the benefits of participation.
              </li>
              <li>
                Include links or buttons for students to learn more or register
                for the events.
              </li>
            </ul>
          </>
        ),
        imageSrc: image3,
      },
    ];

    const titleRef = useRef(null);
    const contentRef = useRef(null);

    useEffect(() => {
      const interval = setInterval(() => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length);
        handleAnimation();
      }, 3000);

      return () => {
        clearInterval(interval);
      };
    }, [slides.length]);

    const handleAnimation = () => {
      const title = titleRef.current;
      const content = contentRef.current;
      title.classList.add("left");
      content.classList.add("fade");
      setTimeout(() => {
        title.classList.remove("left");
        content.classList.remove("fade");
      }, 700);
    };

  useEffect(() => {
    function handleScroll() {
      const position = window.scrollY;
      setScrollPosition(position);
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // Calculate lightness based on scroll position (limiting to 90%)
  const lightness = Math.min((scrollPosition / 40) * 0.05, 90);

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
          duration: 1,
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
    <div
      className='container'
      style={{
        backgroundColor: `hsl(203, 92%, ${lightness}%)`,
        transition: "background-color 0.3s ease-in-out",
      }}
    >
      <header>
        <WelcomeWord />
      </header>
      <main>
        <section className='content-section'>
          <div className='feature  ipsGrid ipsGrid_collapsePhone'>
            <div className='ipsGrid_span7 ipsType_right'>
              <p>
                <span>
                  In a departure from traditional courses heavy on theory, our
                  program prioritizes practical exercises. Here, you'll delve
                  straight into hands-on tasks, fostering deeper understanding
                  and real-world application. Rather than passive learning,
                  you'll actively engage in activities that cultivate tangible
                  skills and confidence. Embrace this opportunity to bridge
                  theory with practice, where your journey is defined by active
                  participation and meaningful outcomes. Join us in redefining
                  education through practical knowledge and experiential
                  learning.
                </span>
              </p>
            </div>

            <div className='featured-image-container ipsGrid_span5'>
              <div>
                <div className='image-container'>
                  <img
                    src={image5}
                    alt='Sample'
                    className='section2-image neon-flash short-circuit'
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <div className='citate'>
        <h1 className='header-section gs_reveal ipsType_center'>
          "The only way to learn a new programming language is by writing
          programs in it." - Dennis Ritchie
        </h1>
      </div>
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
      <div>
        <div className='slide-container'>
          <div className='slide'>
            <div className='slide__title'>
              <h1 ref={titleRef}>{slides[currentSlide].title}</h1>
            </div>
            <div className='slide__content' ref={contentRef}>
              <div className='slide__image'>
                <img src={slides[currentSlide].imageSrc} alt='Slide' />
              </div>
              <div className='slide__content--para'>
                {slides[currentSlide].content}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Section1;
