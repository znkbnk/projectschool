import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
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

function ScrollToTopOnNavigation() {
  window.scrollTo(0, 0);
  return null;
}

function App() {
  return (
    <Router>
      <div>
        <ToastContainer />
        <ScrollToTopOnNavigation />
        <Routes>
          <Route path='/projectschool' element={<Welcome />} />
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<Signup />} />
          <Route path='/exercises' element={<Exercises />} />
          <Route path='/htmllessons' element={<HtmlLessons />} />
          <Route path='/csslessons' element={<CssLessons />} />
          <Route path='/reactlessons' element={<ReactLessons />} />
          <Route path='/livechat' element={<LiveChat />} />
          <Route path='/resetPassword' element={<ResetPassword />} />
          <Route path='/editor' element={<LiveEditor />} />
          <Route path='/editor/:lessonType/:taskId' element={<LiveEditor />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
