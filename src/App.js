import Welcome from './components/Welcome';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Login from './components/Login';
import Signup from "./components/Signup";


function App() {
  return (
    <Router>
      <Routes>
        <Route path='/projectschool' element={<Welcome />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
      </Routes>
    </Router>
  );
}

export default App;
