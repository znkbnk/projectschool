import React, { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Welcome from "./components/Welcome";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Exercises from "./components/Exercises";
import HtmlLessons from "./components/HtmlLessons";
import ReactLessons from "./components/ReactLessons";
import CssLessons from "./components/CssLessons";
import LiveChat from "./components/LiveChat";
import ResetPassword from "./components/ResetPassword";
import LiveEditor from "./components/LiveEditor";
import AuthorList from "./components/AuthorList";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
import Success from "./components/Success";
import Cancel from "./components/Cancel";
import Checkout from "./components/Checkout";
import Blog from "./components/Blog";
import BlogPage from "./components/BlogPage";
import { auth } from "./components/firebase";

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
          path='/htmllessons'
          element={isLoggedIn ? <HtmlLessons /> : <Navigate to='/login' />}
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
          path='/editor'
          element={isLoggedIn ? <LiveEditor /> : <Navigate to='/login' />}
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
          element={isLoggedIn ? <Success /> : <Navigate to='/login' />}
        />
        <Route
          path='/cancel'
          element={isLoggedIn ? <Cancel /> : <Navigate to='/login' />}
        />
        <Route
          path='/checkout'
          element={isLoggedIn ? <Checkout /> : <Navigate to='/login' />}
        />
      </Routes>
    </div>
  );
};

export default App;
