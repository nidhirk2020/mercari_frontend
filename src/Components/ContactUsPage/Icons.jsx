import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';

const Icons = () => {
  return (
    <div className="max-w-[1240px] mx-auto px-4">
      <div className="flex flex-wrap justify-center gap-8 py-8">
        {/* Phone Icon Box */}
        <div className="glass-effect flex flex-col items-center p-6 rounded-xl shadow-lg w-[275px] h-[200px] text-center">
          <FaPhone className="text-3xl mb-4 text-black" />
          <p className="text-black text-sm font-semibold mt-5">+91 12345 67890<br />+91 12345 67890</p>
        </div>
        
        {/* Email Icon Box */}
        <div className="glass-effect flex flex-col items-center p-6 rounded-xl shadow-lg  w-[275px] h-[200px] text-center">
          <FaEnvelope className="text-3xl mb-4 text-black" />
          <p className="text-black text-sm break-all font-semibold mt-5">shambhalaspiritualfoundation@gmail.com</p>
        </div>
        
        {/* Location Icon Box */}
        <div className="glass-effect flex flex-col items-center p-6 rounded-xl shadow-lg  w-[275px] h-[200px] text-center">
          <FaMapMarkerAlt className="text-3xl mb-4 text-black" />
          <p className="text-black text-sm font-semibold mt-5">Shambhala Spiritual Foundation,<br />Uttam Nagar, New Delhi, 110059</p>
        </div>
      </div>
    </div>
  );
}

export default Icons;
