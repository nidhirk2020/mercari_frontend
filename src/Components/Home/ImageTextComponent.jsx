import React from 'react';
import mount from '../../assets/mount.jpeg';
import { FaCalendarAlt, FaMapMarkerAlt } from 'react-icons/fa';
const ImageTextComponent = () => {
  return (
    <div className="flex flex-col md:flex-row items-center p-4 mt-10 mx-0 md:mx-60 mb-5">

      {/* Left Side with Big Image */}
      <div className="flex items-center mb-1 md:mb-0 md:mr-1">
        <img 
          src={mount}
          alt="Large" 
          className="w-full md:w-72 h-72 object-cover" 
        />
      </div>

      {/* Right Side with Small Images */}
      <div className="flex flex-row md:flex-col items-center md:items-start mb-1 md:mb-0">

        <img 
          src={mount}
          alt="Small 1" 
          className="w-40 md:w-32 h-36 object-cover mb-2 md:mb-1 mr-2 md:mr-0" // Increased margin for mobile

        />
        <img 
          src={mount}
          alt="Small 2" 
          className="w-40 md:w-32 h-36 object-cover mb-2 md:mb-1" 
        />
      </div>

      {/* Text Section */}

      <div className="flex-1 md:ml-8">
        {/* Upcoming Button Section */}
        <div className="flex items-center mb-2">
          <button className="flex items-center px-4 py-2 bg-secondary rounded-md">
            {/* Blinking Dot */}
            <div className="w-2.5 h-2.5 bg-accent rounded-full animate-pulse mr-2"></div>
            <span className="text-accent font-medium">Upcoming</span>
          </button>
        </div>
         <div className="flex flex-col items-center mb-2">
        </div>
        <h2 className="text-2xl font-bold mb-2">Lorem ipsum dolor sit amet consectetur.</h2>
        {/* Calendar and Location Section */}
        <div className="flex items-center space-x-8 mb-4">
          {/* Calendar Section */}
          <div className="flex items-center">
            <FaCalendarAlt className="text-gray-600 mr-2" />
            <span className="text-gray-600">October 5, 2024</span>
          </div>

          {/* Location Section */}
          <div className="flex items-center">
            <FaMapMarkerAlt className="text-gray-600 mr-2" />
            <span className="text-gray-600">Google Meet</span>
          </div>
        </div>



        <p className="mt-2 text-gray-600 mb-3">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Distinctio est ipsam laborum voluptatibus saepe excepturi at vero molestiae magnam nemo dolore sapiente necessitatibus minus, quo fugiat quos minima velit ullam in odit eos adipisci sint? Esse, itaque. Quisquam, voluptatibus rem!
        </p>
        <div className="flex mt-4 space-x-4">
          <button className="px-6 py-2 bg-accent text-white  hover:bg-primary">
            Register Now
          </button>
          <button className="px-6 py-2 bg-white border border-accent text-black  hover:bg-gray-200">
            See All Events
          </button>
        </div>
      </div>
    </div>
  );
};

export default ImageTextComponent;