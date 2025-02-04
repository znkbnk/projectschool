import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Welcome from "./components/Welcome";
import Login from "./Login/Login";
import Signup from "./Login/Signup";
import Exercises from "./Exercises/Exercises";
import ReactLessons from "./Exercises/ReactLessons";
import LiveChat from "./Chat/LiveChat";
import ResetPassword from "./Login/ResetPassword";
import LiveEditor from "./Exercises/LiveEditor";
import AuthorList from "./Authors/AuthorList";
import Faq from "./components/Faq";
import Pricing from "./components/Pricing";
import Terms from "./components/Terms";
import Privacy from "./components/Privacy";
import Success from "./Stripe/Success";
import Cancel from "./Stripe/Cancel";
import Articles from "./Blog/Articles";
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
import InterviewCodeQuiz from "./Interview/InterviewCodeQuiz";
import { Helmet, HelmetProvider } from "react-helmet-async";
import InterviewCorrectCode from "./Interview/InterviewCorrectCode";
import WorkshopList from "./Exercises/WorkshopList";
import MusicAcademy from "./Exercises/MusicAcademy";



function ScrollToTopOnNavigation() {
  window.scrollTo(0, 0);
  return null;
}

const ProtectedRouteWrapper = ({ children, isLoggedIn, isAdmin }) => {
  return (
    <ProtectedRoute isLoggedIn={isLoggedIn || isAdmin}>
      {children}
    </ProtectedRoute>
  );
};

const App = () => {
  const { isLoggedIn, isAdmin } = useAuth();

  return (
    <HelmetProvider>
      <div>
        <ToastContainer />
        <ScrollToTopOnNavigation />
        <Helmet>
          {/* Title Tag */}
          <title>Master React: 60+ Projects & Quizzes - ProjectSchool</title>

          {/* Meta Description */}
          <meta
            name='description'
            content='Exclusive React projects, quizzes, and live challenges to master UI development. Comprehensive step-by-step guides for learners.'
          />

          {/* Open Graph Metadata */}
          <meta
            property='og:title'
            content='Master React: 60+ Projects & Quizzes - ProjectSchool'
          />
          <meta
            property='og:description'
            content='Exclusive React projects, quizzes, and live challenges to master UI development.'
          />
          <meta
            property='og:image'
            content='https://projectschool.dev/static/media/navbarlogo.a5e20d48192811086a79.webp'
          />
          <meta property='og:url' content='https://www.projectschool.dev' />
          <meta property='og:type' content='website' />

          {/* Twitter Card Metadata */}
          <meta name='twitter:card' content='summary_large_image' />
          <meta
            name='twitter:title'
            content='Master React: 60+ Projects & Quizzes - ProjectSchool'
          />
          <meta
            name='twitter:description'
            content='Exclusive React projects, quizzes, and live challenges to master UI development.'
          />
          <meta
            name='twitter:image'
            content='https://projectschool.dev/static/media/navbarlogo.a5e20d48192811086a79.webp'
          />
        </Helmet>

        <Routes>
          <Route path='/' element={<Welcome />} />
          <Route
            path='/login'
            element={
              isLoggedIn ? (
                <Navigate
                  to={
                    new URLSearchParams(window.location.search).get(
                      "redirect"
                    ) || "/"
                  }
                />
              ) : (
                <Login />
              )
            }
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
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <Interview />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/interview/InterviewQuestions'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <InterviewQuestions />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/interview/InterviewCorrectCode/:slug'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <InterviewCorrectCode />
              </ProtectedRouteWrapper>
            }
          />

          <Route
            path='/interview/InterviewQuiz/:slug'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <InterviewQuestionQuiz />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/interview/InterviewTasks'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <InterviewTasks />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/interview/InterviewCodeQuiz'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <InterviewCodeQuiz />
              </ProtectedRouteWrapper>
            }
          />
          <Route path='/notavailable' element={<NotFound />} />
          <Route path='/blogs/devessentials' element={<DevEssentials />} />
          <Route path='/blogs/reactexplained' element={<ReactExplained />} />
          <Route path='/blogs' element={<BlogCardList />} />
          <Route path='/blogs/devessentials/:id' element={<Articles />} />
          <Route path='/terms' element={<Terms />} />
          <Route path='/privacy' element={<Privacy />} />
          <Route path='/resetPassword' element={<ResetPassword />} />
          <Route
            path='/exercises'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <Exercises />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/exercises/reactlessons'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <ReactLessons />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/exercises/livelessons'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <LiveLessons />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/exercises/musicacademy'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <MusicAcademy />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/exercises/workshoplist'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <WorkshopList />
              </ProtectedRouteWrapper>
            }
          />

          <Route
            path='/livechat'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <LiveChat />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/editor/:lessonType/:taskId'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <LiveEditor />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/authors'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <AuthorList />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/success'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <Success />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/cancel'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <Cancel />
              </ProtectedRouteWrapper>
            }
          />
          <Route
            path='/mobile-message'
            element={
              <ProtectedRouteWrapper isLoggedIn={isLoggedIn} isAdmin={isAdmin}>
                <MobileMessage />
              </ProtectedRouteWrapper>
            }
          />
        </Routes>
      </div>
    </HelmetProvider>
  );
};

export default App;
