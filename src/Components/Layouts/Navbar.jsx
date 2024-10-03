import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion'; // Import Framer Motion
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi'; // Hamburger and Close icons
import logo from '../../assets/logo.png'; // Ensure the path to your logo is correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white shadow-md w-full fixed top-0 left-0 z-50">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center py-4 px-4 lg:px-6">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Shambhala Logo" className="w-16 h-16" />
        </div>

        {/* Center - Nav Items for large screens */}
        <ul className="hidden md:flex space-x-8 text-lg font-semibold">
          <li>
            <Link to="/" className="text-gray-800 hover:text-green-600 transition-colors duration-300">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/about" className="text-gray-800 hover:text-green-600 transition-colors duration-300">
              ABOUT US
            </Link>
          </li>
          <li>
            <Link to="/program" className="text-gray-800 hover:text-green-600 transition-colors duration-300">
              PROGRAMS
            </Link>
          </li>
          <li>
            <Link to="/contact" className="text-gray-800 hover:text-green-600 transition-colors duration-300">
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Right side - Button for large screens */}
        <div className="hidden md:block">
          <Link
            to="/donate"
            className="bg-[#164453] text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
          >
            DONATE HERE
          </Link>
        </div>

        {/* Hamburger Menu for small screens */}
        <div className="md:hidden flex items-center">
          {isOpen ? (
            <HiOutlineX className="text-3xl cursor-pointer" onClick={toggleMenu} />
          ) : (
            <HiOutlineMenuAlt4 className="text-3xl cursor-pointer" onClick={toggleMenu} />
          )}
        </div>
      </div>

      {/* Mobile Menu with margin-top */}
      <motion.div
        className={`${
          isOpen ? 'block' : 'hidden'
        } md:hidden bg-white shadow-md fixed top-16 left-0 w-full z-50 mt-10`}
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: isOpen ? 1 : 0, y: isOpen ? 0 : -50 }}
        transition={{ duration: 0.5 }}
      >
        <ul className="flex flex-col space-y-4 text-center text-lg font-semibold py-4">
          <li>
            <Link
              to="/"
              className="text-gray-800 hover:text-green-600 transition-colors duration-300"
              onClick={toggleMenu}
            >
              HOME
            </Link>
          </li>
          <li>
            <Link
              to="/about"
              className="text-gray-800 hover:text-green-600 transition-colors duration-300"
              onClick={toggleMenu}
            >
              ABOUT US
            </Link>
          </li>
          <li>
            <Link
              to="/program"
              className="text-gray-800 hover:text-green-600 transition-colors duration-300"
              onClick={toggleMenu}
            >
              PROGRAMS
            </Link>
          </li>
          <li>
            <Link
              to="/contact"
              className="text-gray-800 hover:text-green-600 transition-colors duration-300"
              onClick={toggleMenu}
            >
              CONTACT
            </Link>
          </li>
          <li>
            <Link
              to="/donate"
              className="bg-[#164453] text-white py-2 px-4 rounded hover:bg-green-700 transition-colors duration-300"
              onClick={toggleMenu}
            >
              DONATE HERE
            </Link>
          </li>
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
