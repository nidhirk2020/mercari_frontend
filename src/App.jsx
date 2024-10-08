import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Layouts/Navbar';
import Home from './Components/Pages/Home';
import AboutUs from './Components/Pages/AboutUs';
import Program from './Components/Pages/Program';
import ContactUs from './Components/Pages/ContactUs';
import Footer from './Components/Layouts/Footer';

import Blogs from './Components/Pages/Blogs';
import Guides from './Components/Pages/Guides';
import Media from './Components/Pages/Media';

import Login from './Components/Pages/Login';
import CreateBlogs from './Components/Pages/CreateBlog';

// testing pull works 

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
        
          <Route path="/blogs" element={<Blogs />} />
          <Route path="/create" element={<CreateBlogs />} />
          <Route path="/media" element={<Media />} />
          <Route path="/guides" element={<Guides />} />
          <Route path="/login" element={<Login />} />
        </Routes>
      </div>
      <Footer />
    </Router>
  );
}

export default App;
