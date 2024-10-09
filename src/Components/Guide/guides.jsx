import React from 'react';
import guidesImage from '../../assets/guides.png'; // Import the image
import data from '../Guide/data.json'; // Import JSON data

const Guidess = () => {
  return (
    <div className="flex flex-col items-center py-10">
      {/* Container for the images and text */}
      <div className="flex flex-wrap justify-center gap-8">
        {data.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            {/* Image section */}
            <img
              src={guidesImage}
              alt={`Guide ${item.id}`}
              className="w-50 h-80 object-cover mt-4 mr-5 mb-4"
            />
            {/* Text section */}
            <p className="text-center text-black mr-4 w-40">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Guidess;
