import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion'; // Framer Motion
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi'; // Icons
import { IoMdArrowDropdown } from 'react-icons/io'; // Dropdown arrow icon
import logo from '../../assets/logo.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false); // Dropdown state

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle dropdown
  };

  return (
    <nav
      className="bg-white bg-opacity-20 backdrop-blur-lg shadow-md w-full sticky top-0 left-0 z-50"
    >
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center py-4 px-4 lg:px-6">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Shambhala Logo" className="w-20 h-20" />
        </div>

        {/* Center - Nav Items for large and medium screens */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-base lg:text-[16px] font-semibold">
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
          {/* Dropdown for Resources */}
          <li className="relative">
            <div
              className="cursor-pointer flex items-center text-gray-800 hover:text-green-600 transition-colors duration-300"
              onClick={toggleDropdown}
            >
              RESOURCES
              <IoMdArrowDropdown className={`ml-1 transition-transform ${isDropdownOpen ? 'rotate-180' : ''}`} />
            </div>
            <AnimatePresence>
              {isDropdownOpen && (
                <motion.ul
                  className="absolute left-0 mt-2 w-40 bg-white bg-opacity-90 backdrop-blur-lg rounded shadow-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <li>
                    <Link
                      to="/blogs"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Blogs
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/media"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Media
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/guides"
                      className="block px-4 py-2 text-gray-800 hover:bg-green-200"
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Guides
                    </Link>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li>
            <Link to="/contact" className="text-gray-800 hover:text-green-600 transition-colors duration-300">
              CONTACT
            </Link>
          </li>
        </ul>

        {/* Right side - Button for large and medium screens */}
        <div className="hidden md:block">
          <Link
            to="/donate"
            className="bg-[#164453] text-white py-2 px-3 lg:px-4 rounded hover:bg-green-700 transition-colors duration-300"
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
              RESOURCES
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
