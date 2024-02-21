import Welcome from "./components/Welcome";
import "./App.css";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import Signup from "./components/Signup";
import Exercises from "./components/Exercises";
import HtmlLessons from "./components/HtmlLessons";
import ReactLessons from "./components/ReactLessons";
import CssLessons from "./components/CssLessons";

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/projectschool' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path='/exercises' element={<Exercises />} />
        <Route path='/htmllessons' element={<HtmlLessons />} />
        <Route path='/csslessons' element={<CssLessons />} />
        <Route path='/reactlessons' element={<ReactLessons />} />
      </Routes>
    </Router>
  );
}

export default App;
