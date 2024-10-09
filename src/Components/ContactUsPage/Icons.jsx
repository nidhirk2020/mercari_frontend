import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Icons = () => {
  return (
    <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-4 sm:gap-8 py-8">
      {/* Phone Icon Box */}
      <div className="relative flex flex-col items-center justify-center p-6 rounded-lg shadow-lg w-full sm:w-[275px] h-[150px] text-center bg-white bg-opacity-10 backdrop-blur-md">
        <FaPhone className="text-3xl text-white  mb-2" />
        <p className="text-white  text-sm font-semibold mt-2">+91 12345 67890<br />+91 12345 67890</p>
      </div>

      {/* Email Icon Box */}
      <div className="relative flex flex-col items-center justify-center p-6 rounded-lg shadow-lg w-full sm:w-[275px] h-[150px] text-center bg-white bg-opacity-10 backdrop-blur-md">
        <FaEnvelope className="text-3xl text-white  mb-2" />
        <p className="text-white  text-sm break-all font-semibold mt-2">shambhalaspiritualfoundation@gmail.com</p>
      </div>

      {/* Location Icon Box */}
      <div className="relative flex flex-col items-center justify-center p-6 rounded-lg shadow-lg w-full sm:w-[275px] h-[150px] text-center bg-white bg-opacity-10 backdrop-blur-md">
        <FaMapMarkerAlt className="text-3xl text-white  mb-2" />
        <p className="text-white  text-sm font-semibold mt-2">Shambhala Spiritual Foundation,<br />Uttam Nagar, New Delhi, 110059</p>
      </div>
    </div>
  );
};

export default Icons;
