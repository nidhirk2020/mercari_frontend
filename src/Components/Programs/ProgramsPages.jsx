import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import axios from 'axios';
import programimage from '../../assets/programsimages/programimage.png';
import { ChevronDownIcon, ChevronUpIcon } from '@heroicons/react/24/solid';

const Programs = () => {
  const [eventType, setEventType] = useState('Select Event Type');
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [events, setEvents] = useState([]);

  useEffect(() => {
    const fetchEvents = async () => {
      const apiKey = import.meta.env.VITE_YOUTUBE_API_KEY;
      const channelId = import.meta.env.VITE_YOUTUBE_CHANNEL_ID;
      try {
        const response = await axios.get('https://www.googleapis.com/youtube/v3/search', {
          params: {
            part: 'snippet',
            channelId: channelId,
            type: 'video',
            key: apiKey,
            maxResults: 10
          },
        });
        setEvents(response.data.items);
      } catch (error) {
        console.error('Error fetching YouTube events:', error);
      }
    };

    fetchEvents();
  }, []);

  const handleDropdown = (type) => {
    setEventType(type);
    setDropdownOpen(false);
  };

  const getStatusStyle = (status) => {
    let color, backgroundColor, blinkAnimation;

    switch (status) {
      case 'live':
        color = 'rgb(239, 68, 68)'; // Red
        backgroundColor = 'rgb(254, 226, 226)'; // Light red background
        blinkAnimation = 'none';
        break;
      case 'upcoming':
        color = 'rgb(34, 197, 94)'; // Green
        backgroundColor = 'rgb(209, 250, 229)'; // Light green background
        blinkAnimation = 'none';
        break;
      case 'none': // Past events
      default:
        color = 'rgb(245, 158, 11)'; // Orange
        backgroundColor = 'rgb(255, 237, 213)'; // Light orange background
        blinkAnimation = 'blink 1s linear infinite'; // Blink animation for past events
        break;
    }

    return {
      color,
      backgroundColor,
      padding: '4px 8px',
      borderRadius: '9999px',
      fontSize: '0.75rem',
      fontWeight: '600',
      animation: blinkAnimation // Apply the blink animation if it's a past event
    };
  };

  const formatDate = (dateString) => {
    const options = { year: 'numeric', month: 'long', day: 'numeric' };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 py-16">
      {/* Style for blinking animation */}
      <style>
        {`
          @keyframes blink {
            0% { background-color: rgb(255, 237, 213); } /* Light orange */
            50% { background-color: rgb(217, 119, 6); } /* Darker orange */
            100% { background-color: rgb(255, 237, 213); } /* Light orange */
          }
        `}
      </style>

      {/* Dropdown */}
      <div className="relative inline-block text-left mb-6 w-full md:w-auto">
        <motion.button
          whileTap={{ scale: 0.95 }}
          className="bg-white border border-gray-300 text-black py-2 px-4 rounded-md shadow-md flex justify-between items-center w-full md:w-auto"
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
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
        {events.map((event, index) => {
          const eventStatus = event.snippet.liveBroadcastContent || 'none';
          const uploadDate = event.snippet.publishedAt ? formatDate(event.snippet.publishedAt) : 'Unknown Date';

          return (
            <motion.div
              key={index}
              className="border border-gray-200 rounded-lg shadow-lg overflow-hidden mx-auto flex flex-col h-full"
              whileHover={{ scale: 1.05 }}
              transition={{ type: 'spring', stiffness: 100 }}
              style={{ maxWidth: '360px' }}
            >
              <img src={event.snippet.thumbnails.medium.url || programimage} alt="Program" className="w-full h-48 object-cover" />
              <div className="flex-grow p-4 flex flex-col">
                <div className="flex items-center mb-2">
                  <span style={getStatusStyle(eventStatus)}>
                    {eventStatus === 'none' ? 'Past' : eventStatus.charAt(0).toUpperCase() + eventStatus.slice(1)}
                  </span>
                </div>
                <p className="text-black text-sm font-medium mb-4 line-clamp-2">{event.snippet.title}</p>
                <div className="flex items-center text-black font-medium text-sm mb-2">
                  <span className="mr-2">📅</span> {eventStatus === 'none' ? `Uploaded on: ${uploadDate}` : 'Event Date TBD'}
                </div>
                <div className="flex items-center text-black text-sm font-medium mb-4">
                  <span className="mr-2">📍</span> Online Event
                </div>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto w-full bg-teal-600 text-white py-2 rounded-md shadow hover:bg-teal-700 transition duration-200"
                >
                  Watch Now
                </motion.button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
};

export default Programs;
