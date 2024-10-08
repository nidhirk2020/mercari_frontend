import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Layouts/Navbar';
import Home from './Components/Pages/Home';
import AboutUs from './Components/Pages/AboutUs';
import Program from './Components/Pages/Program';
import ContactUs from './Components/Pages/ContactUs';
import Footer from './Components/Layouts/Footer';
function App() {
  return (
    <Router>
      <Navbar />
      <div className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/program" element={<Program />} />
          <Route path="/contact" element={<ContactUs />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
