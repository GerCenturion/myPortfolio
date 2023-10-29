import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componests/Navbar/Navbar";
import Home from "./componests/Home/Home";
import ProjectDetail from "./componests/Project/Project";
import Contact from "./componests/Contact/Contact.jsx";
import Skills from "./componests/Skills/Skill";
import Portfolio from "./componests/Portfolio/Portfolio";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route
            path="/"
            element={<Home />}
          />
          <Route
            path="/portfolio"
            element={<Portfolio />}
          />
          <Route
            path="/project/:id"
            element={<ProjectDetail />}
          />
          <Route
            path="/contact"
            element={<Contact />}
          />
          <Route
            path="/skills"
            element={<Skills />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
