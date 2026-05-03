import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar";
import Welcome from "./pages/Welcome";
import Challenges from "./pages/Challenges";
import Game from "./pages/Game";
import Profile from "./pages/Profile";
import "./App.css";

function App() {
  const [userName, setUserName] = useState("Алина");

  return (
    <Router>
      <div className="app-container">
        <NavBar />
        <Routes>
          <Route path="/" element={<Welcome name={userName} />} />
          <Route path="/tasks" element={<Challenges />} />
          <Route path="/game" element={<Game />} />
          <Route 
            path="/profile" 
            element={<Profile name={userName} setName={setUserName} />} 
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;