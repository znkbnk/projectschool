// App.js
import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Welcome from "./components/Welcome";
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import Exercises from "./Exercises/Exercises";
import JsLessons from "./Exercises/JsLessons";
import ReactLessons from "./Exercises/ReactLessons";
import CssLessons from "./Exercises/CssLessons";
import LiveChat from "./Chat/LiveChat";
import ResetPassword from "./Login/ResetPassword";
import LiveEditor from "./Exercises/LiveEditor";
import AuthorList from "./Authors/AuthorList";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import { auth } from "./components/firebase";
import Blog from "./Blog/Blog";
import Success from "./Stripe/Success";
import Cancel from "./Stripe/Cancel";
import Articles from "./Blog/Articles";

function ScrollToTopOnNavigation() {
  window.scrollTo(0, 0);
  return null;
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);

  useEffect(() => {
    const fetchUserData = async (user, retries = 5, delay = 3000) => {
      try {
        const response = await fetch(
          `${process.env.REACT_APP_API_URL}/api/users/${user.uid}/subscription-status`
        );
        if (!response.ok) {
          if (response.status === 404 && retries > 0) {
            console.warn("User not found, retrying...");
            setTimeout(
              () => fetchUserData(user, retries - 1, delay * 2),
              delay
            ); // Exponential backoff
            return;
          }
          throw new Error(`Error: ${response.statusText}`);
        }
        const userData = await response.json();
        setIsAdmin(userData.isAdmin);
      } catch (error) {
        console.error("Error fetching user data:", error);
      }
    };

    const unsubscribe = auth.onAuthStateChanged(async (user) => {
      if (user) {
        setIsLoggedIn(true);
        await fetchUserData(user);
      } else {
        setIsLoggedIn(false);
        setIsAdmin(false);
      }
    });

    return () => unsubscribe();
  }, []);

  return (
    <div>
      <ToastContainer />
      <ScrollToTopOnNavigation />
      <Routes>
        <Route path='/' element={<Welcome />} />
        <Route
          path='/login'
          element={isLoggedIn ? <Navigate to='/' /> : <Login />}
        />
        <Route
          path='/signup'
          element={isLoggedIn ? <Navigate to='/' /> : <Signup />}
        />
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/faq' element={<Faq />} />
        <Route path='/blog' element={<Blog />} />
        <Route path='/articles/:id' element={<Articles />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />

        <Route
          path='/exercises'
          element={isLoggedIn ? <Exercises /> : <Navigate to='/login' />}
        />
        <Route
          path='/jslessons'
          element={isLoggedIn ? <JsLessons /> : <Navigate to='/login' />}
        />
        <Route
          path='/csslessons'
          element={isLoggedIn ? <CssLessons /> : <Navigate to='/login' />}
        />
        <Route
          path='/reactlessons'
          element={isLoggedIn ? <ReactLessons /> : <Navigate to='/login' />}
        />
        <Route
          path='/livechat'
          element={isLoggedIn ? <LiveChat /> : <Navigate to='/login' />}
        />
        <Route
          path='/resetPassword'
          element={isLoggedIn ? <ResetPassword /> : <Navigate to='/login' />}
        />
        <Route
          path='/editor/:lessonType/:taskId'
          element={
            isLoggedIn || isAdmin ? <LiveEditor /> : <Navigate to='/login' />
          }
        />
        <Route
          path='/authors'
          element={
            isLoggedIn || isAdmin ? <AuthorList /> : <Navigate to='/login' />
          }
        />
        <Route path='/success' element={<Success />} />
        <Route path='/cancel' element={<Cancel />} />
      </Routes>
    </div>
  );
};

export default App;
