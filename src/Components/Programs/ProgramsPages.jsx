import React, { useState } from 'react';
import { motion } from 'framer-motion';
import programimage from '../../assets/programsimages/programimage.png'; // Import your program image
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid'; // Import Heroicons v2

const Programs = () => {
  const [eventType, setEventType] = useState('All Events');
  const [dropdownOpen, setDropdownOpen] = useState(false);

  const events = Array(9).fill({
    title: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
    date: '22nd October, 5:00 PM Onwards',
    location: 'Google Meet',
    status: 'Upcoming'
  });

  const handleDropdown = (type) => {
    setEventType(type);
    setDropdownOpen(false);
  };

  return (
    <div className="container mx-auto p-6">
      {/* Dropdown */}
      <div className="relative inline-block text-left mb-6">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-white border border-gray-300 text-black py-2 px-4 rounded-md shadow-md flex justify-between items-center"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          {eventType}
          {dropdownOpen ? (
            <ChevronUpIcon className="ml-2 w-5 h-5 text-gray-500" />
          ) : (
            <ChevronDownIcon className="ml-2 w-5 h-5 text-gray-500" />
          )}
        </motion.button>
        {dropdownOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            className="absolute right-0 mt-2 w-56 bg-white border border-gray-300 rounded-md shadow-lg z-50"
          >
            <ul className="py-1">
              <li className="cursor-pointer px-4 py-2 hover:bg-gray-200" onClick={() => handleDropdown('Online Events')}>
                Online Events
              </li>
              <li className="cursor-pointer px-4 py-2 hover:bg-gray-200" onClick={() => handleDropdown('Offline Events')}>
                Offline Events
              </li>
            </ul>
          </motion.div>
        )}
      </div>

      {/* Program Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-20 px-6 sm:px-8 lg:px-44">
        {events.map((event, index) => (
          <motion.div
            key={index}
            className="border border-gray-200 rounded-lg shadow-lg overflow-hidden"
            whileHover={{ scale: 1.05 }}
            transition={{ type: 'spring', stiffness: 100 }}
            style={{ width: '360px', height: '430px' }}
          >
            <img src={programimage} alt="Program" className="w-full h-48 object-cover" />
            <div className="p-4">
              <div className="flex items-center mb-2">
                <span className="bg-green-100 text-green-600 px-2 py-1 rounded-full text-xs font-semibold">
                  {event.status}
                </span>
              </div>
              <p className="text-black text-sm mb-4 font-medium">{event.title}</p>
              <div className="flex items-center text-black font-medium text-sm mb-2">
                <span className="mr-2">📅</span>{event.date}
              </div>
              <div className="flex items-center text-black text-sm font-medium">
                <span className="mr-2">📍</span>{event.location}
              </div>
              <motion.button
                whileTap={{ scale: 0.95 }}
                className="mt-4 w-full bg-teal-600 text-white py-2 rounded-md shadow hover:bg-teal-700 transition duration-200"
              >
                Register Here
              </motion.button>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Programs;
