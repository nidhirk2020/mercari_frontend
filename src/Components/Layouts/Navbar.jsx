import React, { useState, useEffect, useRef } from 'react';
import { NavLink } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { HiOutlineMenuAlt4, HiOutlineX } from 'react-icons/hi';
import { IoMdArrowDropdown } from 'react-icons/io';
import logo from '../../assets/logo.png';
import { auth } from '../../config/firebase'; // Import Firebase auth

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [user, setUser] = useState(null); // State to track user
  const dropdownRef = useRef(null);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    if (isDropdownOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [isDropdownOpen]);

  // Check if the user is logged in using Firebase Auth
  useEffect(() => {
    const unsubscribe = auth.onAuthStateChanged((user) => {
      if (user) {
        setUser(user);
      } else {
        setUser(null);
      }
    });
    return () => unsubscribe();
  }, []);

  // Logout function
  const handleLogout = () => {
    auth.signOut()
      .then(() => {
        setUser(null); // Clear the user state on logout
        console.log('Logged out successfully');
      })
      .catch((error) => {
        console.error('Logout error:', error);
      });
  };

  return (
    <nav className="bg-white bg-opacity-20 backdrop-blur-lg shadow-md w-full sticky top-0 left-0 z-50">
      <div className="w-full max-w-screen-xl mx-auto flex justify-between items-center py-4 px-4 lg:px-6">
        {/* Left side - Logo */}
        <div className="flex items-center">
          <img src={logo} alt="Shambhala Logo" className="w-20 h-20" />
        </div>

        {/* Center - Nav Items for large and medium screens */}
        <ul className="hidden md:flex space-x-6 lg:space-x-8 text-base lg:text-[16px] font-semibold">
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-green-600' : 'text-gray-800 hover:text-green-600 transition-colors duration-300'
              }
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-green-600' : 'text-gray-800 hover:text-green-600 transition-colors duration-300'
              }
            >
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/program"
              className={({ isActive }) =>
                isActive ? 'text-green-600' : 'text-gray-800 hover:text-green-600 transition-colors duration-300'
              }
            >
              PROGRAMS
            </NavLink>
          </li>
          {/* Dropdown for Resources */}
          <li className="relative" ref={dropdownRef}>
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
                  className="absolute left-1/2 transform -translate-x-1/2 mt-2 w-40 bg-white bg-opacity-90 backdrop-blur-lg rounded shadow-lg"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <li>
                    <NavLink
                      to="/blogs"
                      className={({ isActive }) =>
                        isActive ? 'text-green-600' : 'block px-4 py-2 text-gray-800 hover:bg-green-200'
                      }
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Blogs
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/media"
                      className={({ isActive }) =>
                        isActive ? 'text-green-600' : 'block px-4 py-2 text-gray-800 hover:bg-green-200'
                      }
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Media
                    </NavLink>
                  </li>
                  <li>
                    <NavLink
                      to="/guides"
                      className={({ isActive }) =>
                        isActive ? 'text-green-600' : 'block px-4 py-2 text-gray-800 hover:bg-green-200'
                      }
                      onClick={() => setIsDropdownOpen(false)}
                    >
                      Guides
                    </NavLink>
                  </li>
                </motion.ul>
              )}
            </AnimatePresence>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-green-600' : 'text-gray-800 hover:text-green-600 transition-colors duration-300'
              }
            >
              CONTACT
            </NavLink>
          </li>

          {/* Conditional Logout Button */}
          {user ? (
            <li>
              <button
                onClick={handleLogout}
                className="text-red-600 hover:text-red-800 transition-colors duration-300"
              >
                Logout
              </button>
            </li>
          ) : null}
        </ul>

        {/* Right side - Button for large and medium screens */}
        <div className="hidden md:block">
          <NavLink
            to="/donate"
            className={({ isActive }) =>
              isActive ? 'bg-green-700 text-white py-2 px-3 lg:px-4 rounded' : 'bg-[#164453] text-white py-2 px-3 lg:px-4 rounded hover:bg-green-700 transition-colors duration-300'
            }
          >
            DONATE HERE
          </NavLink>
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

      {/* Mobile Menu */}
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
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive ? 'text-green-600' : 'text-gray-800 hover:text-green-600 transition-colors duration-300'
              }
              onClick={toggleMenu}
            >
              HOME
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? 'text-green-600' : 'text-gray-800 hover:text-green-600 transition-colors duration-300'
              }
              onClick={toggleMenu}
            >
              ABOUT US
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/program"
              className={({ isActive }) =>
                isActive ? 'text-green-600' : 'text-gray-800 hover:text-green-600 transition-colors duration-300'
              }
              onClick={toggleMenu}
            >
              PROGRAMS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/blogs"
              className={({ isActive }) =>
                isActive ? 'text-green-600' : 'text-gray-800 hover:text-green-600 transition-colors duration-300'
              }
              onClick={toggleMenu}
            >
              BLOGS
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? 'text-green-600' : 'text-gray-800 hover:text-green-600 transition-colors duration-300'
              }
              onClick={toggleMenu}
            >
              CONTACT
            </NavLink>
          </li>

          {/* Conditional Logout Button in Mobile Menu */}
          {user ? (
            <li>
              <button
                onClick={() => {
                  handleLogout();
                  toggleMenu();
                }}
                className="text-red-600 hover:text-red-800 transition-colors duration-300"
              >
                Logout
              </button>
            </li>
          ) : null}
        </ul>
      </motion.div>
    </nav>
  );
};

export default Navbar;
