// src/Login/Signup.js
import React, { useEffect, useState } from "react";
import Navbar from "../components/Navbar";
import ParticlesBackground from "./ParticlesBackground";
import { StyledContainer, StyledForm, StyledInput, StyledButton } from "./AuthStyles";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { Link, useNavigate } from "react-router-dom";
import { createUserWithEmailAndPassword, sendEmailVerification, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../components/firebase";
import { toast } from "react-toastify";
import axios from "axios";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    // Disable scrolling when the login page is active
    document.body.style.overflow = "hidden";

    // Cleanup function to restore scrolling
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  const onSubmit = async (e) => {
    e.preventDefault();
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long");
      return;
    }
    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      await sendVerificationEmail(user);

      const { uid } = user;
      try {
        await axios.post("https://projectschool.dev/.netlify/functions/create-user", {
          firebaseUid: uid,
          email,
        });
        console.log("User created in database");
        toast.success("User signed up successfully! Please verify your email.");
        navigate("/login");
      } catch (error) {
        console.error("Error creating user in database:", error);
        toast.error("Error creating user in database. Please try again.");
      }
    } catch (error) {
      const errorMessage = error.message;
      console.error(errorMessage);
      toast.error("Email already in use. Please log in or choose another.");
    }
  };

  const sendVerificationEmail = async (user) => {
    try {
      await sendEmailVerification(user);
      console.log("Verification email sent");
    } catch (error) {
      console.error("Error sending verification email:", error);
    }
  };

  const onGoogleSignUp = async () => {
    try {
      const result = await signInWithPopup(auth, googleProvider);
      const user = result.user;
      await sendVerificationEmail(user);

      const { uid } = user;
      await axios.post("https://projectschool.dev/.netlify/functions/create-user", {
        firebaseUid: uid,
        email: user.email,
      });
      console.log("User created in database");
      toast.success("User signed up successfully! Please verify your email.");
      navigate("/");
    } catch (error) {
      const errorMessage = error.message;
      toast.error("Error: " + errorMessage);
      console.error(error.message);
    }
  };

  const formAnimation = useSpring({
    from: { opacity: 0, transform: "translateY(50px)" },
    to: { opacity: 1, transform: "translateY(0px)" },
    config: { tension: 300, friction: 10 },
  });

  return (
    <div style={{ position: "relative" }}>
      <Navbar />
      <ParticlesBackground />
      <StyledContainer>
        <animated.div style={formAnimation}>
          <StyledForm onSubmit={onSubmit}>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ color: "#fff", textAlign: "center", marginBottom: "1.5rem" }}
            >
              Sign Up
            </motion.h2>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <label htmlFor="email" style={{ color: "#fff", display: "block", marginBottom: "0.5rem" }}>
                Email:
              </label>
              <StyledInput
                type="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <label htmlFor="password" style={{ color: "#fff", display: "block", marginBottom: "0.5rem", marginTop: "1rem" }}>
                Password:
              </label>
              <StyledInput
                type="password"
                id="password"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
            >
              <StyledButton
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Sign Up
              </StyledButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <StyledButton
                type="button"
                onClick={onGoogleSignUp}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ background: "#4285F4" }}
              >
                Sign Up with Google
              </StyledButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              style={{ textAlign: "center", marginTop: "1rem" }}
            >
              <Link to="/login" style={{ color: "#1e90ff", textDecoration: "none" }}>
                Already have an account? Log in
              </Link>
            </motion.div>
          </StyledForm>
        </animated.div>
      </StyledContainer>
    </div>
  );
};

export default Signup;