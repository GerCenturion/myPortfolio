import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./componests/Navbar/Navbar";
import Home from "./componests/Home/Home";
import ProjectDetail from "./componests/Project/Project";
import Contact from "./componests/Contact/Contact.jsx";
import Skills from "./componests/Skills/Skill";
import Portfolio from "./componests/Portfolio/Portfolio";
import WhatsAppButton from "../WhatsApp/WhatsAppButton";
import Paper from "@mui/material/Paper";

function App() {
  return (
    <BrowserRouter>
      <Router>
        <Paper>
          <Navbar />
          <WhatsAppButton />
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
        </Paper>
      </Router>
    </BrowserRouter>
  );
}

export default App;
