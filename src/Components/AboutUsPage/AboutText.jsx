import React from 'react';
import aboutImage from '../../assets/AboutUsimages/abouttext.png'; // Ensure the path to the image is correct

const AboutText = () => {
  return (
    <div className="w-full max-w-screen-xl mx-auto px-4 lg:px-8 py-12 flex flex-col lg:flex-row items-center lg:items-start gap-8">
      {/* Left - Image */}
      <div className="w-full lg:w-1/2">
        <img src={aboutImage} alt="About Us" className="w-full h-[500px] object-cover rounded-lg shadow-md" />
      </div>

      {/* Right - Text */}
      <div className="w-full lg:w-1/2 flex flex-col">
        <h2 className="text-3xl lg:text-4xl font-bold mb-4">
          Awakening <span className="text-[#2F8479]">Inner Peace</span> to Transform Lives Worldwide
        </h2>
        <p className="text-lg mb-4 text-gray-600">
          At Shambhala Spiritual Foundation, we believe in the profound potential of every soul to achieve enlightenment and inner peace through meditation and mindful living. Our mission is to guide individuals on a spiritual journey of self-discovery, fostering a sense of unity, compassion, and purpose. Join us in creating a compassionate, enlightened society where everyone can realize their highest potential.
        </p>
        <p className="text-lg text-gray-600">
          At Shambhala Spiritual Foundation, we believe in the profound potential of every soul to achieve enlightenment and inner peace through meditation and mindful living. Our mission is to guide individuals on a spiritual journey of self-discovery, fostering a sense of unity, compassion, and purpose. Join us in creating a compassionate, enlightened society where everyone can realize their highest potential.
        </p>
      </div>
    </div>
  );
};

export default AboutText;
