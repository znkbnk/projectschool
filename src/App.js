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
import Interview from "./Interview/Interview";
import InterviewQuestions from "./Interview/InterviewQuestions";
import InterviewQuestionQuiz from "./Interview/InterviewQuestionQuiz";
import InterviewTasks from "./Interview/InterviewTasks";
import ProtectedRoute from "./ProtectedRoute";

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
        <Route path='/pricing' element={<Pricing />} />
        <Route path='/faq' element={<Faq />} />
        <Route
          path='/interview'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Interview />
            </ProtectedRoute>
          }
        />
        <Route
          path='/interviewQuestions'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <InterviewQuestions />
            </ProtectedRoute>
          }
        />
        <Route
          path='/interviewQuiz'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <InterviewQuestionQuiz />
            </ProtectedRoute>
          }
        />
        <Route
          path='/interviewTasks'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <InterviewTasks />
            </ProtectedRoute>
          }
        />
        <Route path='/blog' element={<Blog />} />
        <Route path='/notavailable' element={<NotFound />} />
        <Route path='/devessentials' element={<DevEssentials />} />
        <Route path='/reactexplained' element={<ReactExplained />} />
        <Route path='/blogs' element={<BlogCardList />} />
        <Route path='/articles/:id' element={<Articles />} />
        <Route path='/terms' element={<Terms />} />
        <Route path='/privacy' element={<Privacy />} />
        <Route path='/resetPassword' element={<ResetPassword />} />
        
        {/* Protecting the routes for authenticated users */}
        <Route
          path='/exercises'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Exercises />
            </ProtectedRoute>
          }
        />
        <Route
          path='/jslessons'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <JsLessons />
            </ProtectedRoute>
          }
        />
        <Route
          path='/csslessons'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <CssLessons />
            </ProtectedRoute>
          }
        />
        <Route
          path='/reactlessons'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <ReactLessons />
            </ProtectedRoute>
          }
        />
        <Route
          path='/livelessons'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <LiveLessons />
            </ProtectedRoute>
          }
        />
        <Route
          path='/laravellessons'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <LaravelLessons />
            </ProtectedRoute>
          }
        />
        <Route
          path='/livechat'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <LiveChat />
            </ProtectedRoute>
          }
        />
        <Route
          path='/editor/:lessonType/:taskId'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn || isAdmin}>
              <LiveEditor />
            </ProtectedRoute>
          }
        />
        <Route
          path='/authors'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn || isAdmin}>
              <AuthorList />
            </ProtectedRoute>
          }
        />
        <Route
          path='/success'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Success />
            </ProtectedRoute>
          }
        />
        <Route
          path='/cancel'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <Cancel />
            </ProtectedRoute>
          }
        />
        <Route
          path='/mobile-message'
          element={
            <ProtectedRoute isLoggedIn={isLoggedIn}>
              <MobileMessage />
            </ProtectedRoute>
          }
        />
      </Routes>
    </div>
  );
};

export default App;
