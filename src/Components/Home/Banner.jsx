// Banner.jsx
import React from 'react';
import PropTypes from 'prop-types';
import girl from '../../assets/girl.jpeg'; // Ensure the image path is correct
import bg from '../../assets/bg.png'; // Ensure the background image path is correct

const Banner = ({ imageSrc = girl, title, description, buttonText }) => {
  return (
    <div
      className="relative w-full h-[550px] md:h-[767px] bg-cover bg-center flex items-center justify-between"
      style={{ backgroundImage: `url(${bg})` }}
    >
      {/* Text Container */}
      <div className="text-white px-10 w-full lg:w-1/2 text-left">
        <h2 className="text-5xl font-bold mb-12">{title}</h2>
        <p className="mt-4 text-sm">{description}</p>
        <button className="mt-8 px-6 py-2 bg-white text-gray-800 font-semibold shadow hover:bg-gray-200 transition duration-300">
          {buttonText}
        </button>
      </div>
      
      {/* Secondary Image */}
      <div className="hidden lg:block relative w-1/2">
        <img
          src={imageSrc} // Image path for the secondary image
          alt="Banner"
          className="w-1/4 h-[767px] object-cover rounded-l-full"
        />
      </div>
    </div>
  );
};

Banner.propTypes = {
  imageSrc: PropTypes.string,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  buttonText: PropTypes.string.isRequired,
};

export default Banner;


