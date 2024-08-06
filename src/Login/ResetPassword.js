// src/Login/ResetPassword.js
import React, { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import ParticlesBackground from "./ParticlesBackground";
import { StyledContainer, StyledForm, StyledInput, StyledButton } from "./AuthStyles";
import { motion } from "framer-motion";
import { useSpring, animated } from "@react-spring/web";
import { Link } from "react-router-dom";
import { sendPasswordResetEmail } from "firebase/auth";
import { auth } from "../components/firebase";
import { toast } from "react-toastify";

const ResetPassword = () => {
  const [email, setEmail] = useState("");

  const handlePasswordReset = async (e) => {
    e.preventDefault();
    try {
      await sendPasswordResetEmail(auth, email);
      toast.success("Password reset email sent! Check your inbox.");
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      if (errorCode === "auth/user-not-found") {
        toast.error("User not found. Please check your email.");
      } else {
        toast.error("Error: " + errorMessage);
      }
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
          <StyledForm onSubmit={handlePasswordReset}>
            <motion.h2
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              style={{ color: "#fff", textAlign: "center", marginBottom: "1.5rem" }}
            >
              Reset Password
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
              <StyledButton
                type="submit"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Send Reset Link
              </StyledButton>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              style={{ textAlign: "center", marginTop: "1rem" }}
            >
              <Link to="/login" style={{ color: "#1e90ff", textDecoration: "none" }}>
                Back to Login
              </Link>
            </motion.div>
          </StyledForm>
        </animated.div>
      </StyledContainer>
      <Footer />
    </div>
  );
};

export default ResetPassword;