import React, { useState } from "react";
import "../styles/login.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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

  return (
    <div>
      <div className='login-container'>
        <Navbar />
        <section id='entry-page'>
          <form onSubmit={handlePasswordReset}>
            <h2>Reset Password</h2>
            <fieldset>
              <legend>Password Reset</legend>
              <ul>
                <li>
                  <em>A reset link will be sent to your inbox!</em>
                </li>
                <li>
                  <label htmlFor='email'>Email:</label>
                  <input
                    type='email'
                    id='email'
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </li>
              </ul>
            </fieldset>
            <button type='submit'>Send Reset Link</button>
            <Link to='/login'>
              <button className='login-button' type='button'>
                Go Back
              </button>
            </Link>
          </form>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default ResetPassword;
