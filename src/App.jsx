import React from "react" ;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Career from "./components/Career";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/career" element={<Career />} />
      </Routes>
    </Router>
  );
}

export default App
