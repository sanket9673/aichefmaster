import React from "react" ;
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import HomePage from "./components/HomePage";
import Career from "./components/Career";
import Company from "./components/Company";
import Product from "./components/Product";

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/career" element={<Career />} />
        <Route path="/company" element={<Company />} />
        <Route path="/product" element={<Product />} />
      </Routes>
    </Router>
  );
}

export default App
