import './App.css';
import NavBar from "./components/NavBar";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Register from './components/Register';

function App() {
  const items = [
    { name: "Home", path: "/home" },
    { name: "Shopping", path: "/shopping" },
    { name: "Login", path: "/login" },
    { name: "Register", path: "/register" }
  ];

  return (
    <Router>
      <NavBar brandName="KarCamilo" navItems={items} />
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </Router>
  );
}

export default App;
