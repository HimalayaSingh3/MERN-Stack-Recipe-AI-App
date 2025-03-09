import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./pages/Login";
import Register from "./pages/register";
import Navbar from "./pages/Navbar";
import Home from "./components/Home";
import Ask from "./components/Ask";
import All from "./components/All";
import Add from "./components/Add";
import Profile from "./pages/Profile";

const App = () => {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<All />} />
          <Route path="/add" element={<Add />} />
          <Route path="/ask" element={<Ask />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/home" element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </Router>
    </div>
  );
};

export default App;
