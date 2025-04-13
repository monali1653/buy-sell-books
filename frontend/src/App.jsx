import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css'
import { Home } from "./components/Home";
import { Navbar }  from "./components/Navbar";
import { Footer } from "./components/Footer";
import Choose from "./components/Choose";
import SignUp from "./components/SignUp";

function App() {
  return (
    <Router>  
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
       
      
        <Route path="/choose" element={<Choose />} />
        <Route path="/signup" element={<SignUp />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;