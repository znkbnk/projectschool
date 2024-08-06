// src/pages/Login.js
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticlesBackground from "./ParticlesBackground";
import { StyledContainer, StyledForm, StyledInput, StyledButton } from "./AuthStyles";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { Link, useNavigate } from "react-router-dom";
import { signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import { auth, googleProvider } from "../components/firebase";
import { toast } from "react-toastify";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const onLogin = (e) => {
    e.preventDefault();
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        if (!user.emailVerified) {
          auth.signOut();
          toast.error("Please verify your email before logging in.");
          return;
        }
        navigate("/");
        toast.success("Logged in successfully");
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        if (errorCode === "auth/wrong-password") {
          toast.error("Incorrect email/password. Please try again.");
        } else if (errorCode === "auth/user-not-found") {
          toast.error("User not found. Please check your email.");
        } else {
          toast.error("Error: " + errorMessage);
          console.error(errorCode, errorMessage);
        }
      });
  };

  const onGoogleLogin = () => {
    signInWithPopup(auth, googleProvider)
      .then(() => {
        navigate("/");
        toast.success("Logged in successfully");
      })
      .catch((error) => {
        const errorMessage = error.message;
        toast.error("Error: " + errorMessage);
        console.error(error.message);
      });
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
          <StyledForm onSubmit={onLogin}>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ color: "#fff", textAlign: "center", marginBottom: "1.5rem" }}
            >
              Welcome Back!
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
                Login
              </StyledButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1 }}
            >
              <StyledButton
                type="button"
                onClick={onGoogleLogin}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{ background: "#4285F4" }}
              >
                Login with Google
              </StyledButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.2 }}
              style={{ textAlign: "center", marginTop: "1rem" }}
            >
              <Link to="/resetPassword" style={{ color: "#1e90ff", textDecoration: "none" }}>
                Forgot Password?
              </Link>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.4 }}
              style={{ textAlign: "center", marginTop: "1rem" }}
            >
              <Link to="/signup" style={{ color: "#1e90ff", textDecoration: "none" }}>
                Don't have an account? Sign up
              </Link>
            </motion.div>
          </StyledForm>
        </animated.div>
      </StyledContainer>
      <Footer />
    </div>
  );
};

export default Login;