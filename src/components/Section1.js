import React from "react";
import { motion } from "framer-motion";
import image3 from "../images/pic7.webp";
import image5 from "../images/sectionPicture2.webp";
import "../styles/section1.css";
import WelcomeWord from "./WelcomeWord";
import { Link } from "react-router-dom";

function Section1({ isLoggedIn }) {
  // Define animation variants
  const fadeInLeft = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInRight = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const fadeInUp = {
    hidden: { opacity: 0, x: 100 },
    visible: { opacity: 1, x: 0, transition: { duration: 1 } },
  };

  const staggerContainer = {
    hidden: { opacity: 1 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const parallaxEffect = {
    hidden: { opacity: 0, y: 50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 30 },
    },
  };

  return (
    <div className='container'>
      <header>
        <h1 className='main-header'>
          <div className='decorator'></div>
          <div className='decorator'></div>
          <div className='content'>
            Master <span className='react'>React</span> Development <br />
            <span className='highlight'>by Building, Not Just Learning</span>
          </div>
        </h1>

        <WelcomeWord />
      </header>

      <main>
        <motion.section
          className='content-section'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.5 }} // Ensure 'once' is false
          variants={staggerContainer}
        >
          <div className='feature ipsGrid ipsGrid_collapsePhone'>
            <motion.div
              className='ipsGrid_span7 ipsType_right'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false, amount: 0.5 }}
              variants={fadeInLeft}
            >
              <p>
                <span>
                  Welcome to our React language upgrade school, where we focus
                  on practical learning rather than overwhelming you with
                  theory. Nowadays, many online coding schools bombard you with
                  lots of theory, but we believe in a different approach. Our
                  courses are designed to dive straight into hands-on tasks so
                  you can really understand and use what you're learning.
                </span>
              </p>
              <p>
                <span>
                  No more passive learning! Our classes are all about getting
                  involved and doing things. You won't just sit and listen;
                  you'll be actively participating in activities to build your
                  skills and confidence. We want to help you connect what you
                  learn in class with real-life situations.
                </span>
              </p>
              <p>
                <span>
                  At our school, we make education more about doing and
                  experiencing things, bridging the gap between what you learn
                  and what you can actually do. Join us in making learning more
                  practical and rewarding!
                </span>
              </p>
            </motion.div>

            <motion.div
              className='  ipsGrid_span5'
              initial='hidden'
              whileInView='visible'
              viewport={{ once: false, amount: 0.5 }}
              variants={parallaxEffect}
            >
              <img
                src={image5}
                alt='Educational scene showcasing practical learning'
                className='section2-image neon-flash short-circuit'
              />
            </motion.div>
          </div>
        </motion.section>

        {!isLoggedIn && (
          <Link to='/signup' className='getStartedButton'>
            Get Started
          </Link>
        )}

        <motion.div
          className='citate'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h1 className='header-section ipsType_center'>
            "The only way to learn a new programming language is by writing
            programs in it." - Dennis Ritchie
          </h1>
        </motion.div>

        <motion.div
          className='features'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.5 }} // Ensure 'once' is false
          variants={staggerContainer}
        >
          {/* Feature 3 */}
          <motion.div
            className='feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone'
            variants={fadeInLeft}
          >
            <div className='  ipsGrid_span5'>
              <img
                className='section1-image'
                src={image3}
                alt='Introduction to React'
              />
            </div>
            <div className='ipsGrid_span7 ipsType_left'>
              <h2 className='heading_large'>
                Introduction to React and Building Components:
              </h2>
              <motion.ul
                className='section1-list'
                initial={{ opacity: 0, visibility: "hidden" }}
                animate={{ opacity: 1, visibility: "visible" }}
                transition={{ duration: 1 }}
              >
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
              </motion.ul>
            </div>
          </motion.div>

          {/* Feature 4 */}
          <motion.div
            className='feature ipsSpacer_bottom_double ipsGrid ipsGrid_collapsePhone'
            variants={fadeInRight}
          >
            <div className='ipsGrid_span7 ipsType_right'>
              <h2 className='heading_large'>
                State Management and Interactivity with React
              </h2>
              <motion.ul
                className='section1-list'
                initial={{ opacity: 0, visibility: "hidden" }}
                animate={{ opacity: 1, visibility: "visible" }}
                transition={{ duration: 1 }}
              >
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
              </motion.ul>
            </div>
            <div className='  ipsGrid_span5'>
              <img
                className='section1-image'
                src={image3}
                alt='State Management in React'
              />
            </div>
          </motion.div>
        </motion.div>

        <div className='button-container'>
          <Link to='/exercises' className='btn-16'>
            Go to Exercises
          </Link>
          <Link to='/interview' className='btn-16'>
            Go to Interview
          </Link>
          {!isLoggedIn && (
            <Link to='/signup' className='btn-16'>
              Get Started
            </Link>
          )}
        </div>

        <motion.div
          className='citate'
          initial='hidden'
          whileInView='visible'
          viewport={{ once: false, amount: 0.5 }}
          variants={fadeInUp}
        >
          <h1 className='header-section ipsType_center'>
            Have questions or need help?{" "}
            <Link to='/livechat' className='section1-chat'>
              Chat
            </Link>{" "}
            with us live!
          </h1>
        </motion.div>
      </main>
    </div>
  );
}

export default Section1;
