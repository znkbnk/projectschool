import React from "react";
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
import Blog from "./Blog/Blog";
import Success from "./Stripe/Success";
import Cancel from "./Stripe/Cancel";
import Articles from "./Blog/Articles";
import LaravelLessons from "./Exercises/LaravelLessons";
import MobileMessage from "./Exercises/MobileMessage";
import LiveLessons from "./Exercises/LiveLessons";
import useAuth from "./Login/useAuth";
import BlogCardList from "./Blog/BlogCardList";
import ReactExplained from "./Blog/ReactExplained";
import DevEssentials from "./Blog/DevEssentials";
import NotFound from "./components/NotFound";

function ScrollToTopOnNavigation() {
  window.scrollTo(0, 0);
  return null;
}

const App = () => {
  const { isLoggedIn, isAdmin } = useAuth();

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
        <Route
          path='/pricing'
          element={<Pricing /> }
        />
        <Route
          path='/faq'
          element={<Faq />}
        />
        <Route
          path='/blog'
          element={<Blog /> }
        />
         <Route
          path='/notavailable'
          element={<NotFound /> }
        />
        <Route
          path='/devessentials'
          element={<DevEssentials /> }
        />
         <Route
          path='/reactexplained'
          element={<ReactExplained /> }
        />
        <Route
          path='/blogs'
          element={<BlogCardList /> }
        />
        <Route
          path='/articles/:id'
          element={<Articles />}
        />
      <Route path="/terms" element={<Terms />} />
      <Route path="/privacy" element={<Privacy />} />
        <Route
          path='/resetPassword'
          element={ <ResetPassword /> }
        />

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
          path='/livelessons'
          element={isLoggedIn ? <LiveLessons /> : <Navigate to='/login' />}
        />
        <Route
          path='/laravellessons'
          element={isLoggedIn ? <LaravelLessons /> : <Navigate to='/login' />}
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
        <Route
          path='/success'
          element={isLoggedIn ? <Success /> : <Navigate to='/login' />}
        />
        <Route
          path='/cancel'
          element={isLoggedIn ? <Cancel /> : <Navigate to='/login' />}
        />
        <Route path='/mobile-message' element={isLoggedIn ? <MobileMessage /> : <Navigate to='/login' />} />
      </Routes>
    </div>
  );
};

export default App;
