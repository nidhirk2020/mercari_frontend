import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Layouts/Navbar';
import Home from './Components/Pages/Home';
import AboutUs from './Components/Pages/AboutUs';
import Program from './Components/Pages/Program';
import ContactUs from './Components/Pages/ContactUs';
import Footer from './Components/Layouts/Footer';
// import Blog from './Components/Pages/Blogs';
import Blogs from './Components/Pages/Blogs';
import Guides from './Components/Pages/Guides';
import Media from './Components/Pages/Media';

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
          {/* <Route path="/blogs" element={<Blogs />} /> */}
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/media" element={<Media />} />
          <Route path="/guides" element={<Guides />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
