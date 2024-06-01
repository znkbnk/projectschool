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

import { auth } from "./components/firebase";
import Blog from "./Blog/Blog";
import BlogPage from "./Blog/BlogPage";
import Success from "./Stripe/Success";
import Cancel from "./Stripe/Cancel";

function ScrollToTopOnNavigation() {
  window.scrollTo(0, 0);
  return null;
}

const App = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      setIsLoggedIn(!!user);
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
        <Route path='/blog/:id' element={<BlogPage />} />

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
          element={isLoggedIn ? <LiveEditor /> : <Navigate to='/login' />}
        />
        <Route
          path='/authors'
          element={isLoggedIn ? <AuthorList /> : <Navigate to='/login' />}
        />
        <Route
          path='/success'
          element={<Success />}
        />
        <Route
          path='/cancel'
          element={<Cancel />}
        />
      </Routes>
    </div>
  );
};

export default App;
