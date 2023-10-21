import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { LandingPage, Contact, AboutMe } from "./pages";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  
  return (
    <Router>
      <div className="App">
        <Routes>
          <Route path="/" element={<LandingPage />} />
          <Route path="/AboutMe" element={<AboutMe />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
