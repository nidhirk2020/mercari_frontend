import React from 'react';
import { FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import contactImage from '../../assets/contact2.svg'; // Ensure this path is correct

const MergedComponent = () => {
  return (
    <div className="relative flex flex-col items-center">
      {/* Question Text Section */}
      <QuestionText />

      {/* Icons Section with Individual Glass Effect Boxes */}
      <div className="relative max-w-[1240px] mx-auto px-4">
        {/* Background Image */}
        <img
          src={contactImage}
          alt="Background"
          className="absolute w-[900px] h-[700px]  object-contain z-[-1] rounded-xl"
          style={{ left: '50%', transform: 'translateX(-50%)', top: '0' }}
        />
        <div className="flex flex-wrap justify-center gap-4 sm:gap-8 py-8">
          <Icons />
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="relative w-full max-w-[900px] h-auto md:h-[656px] px-4 md:px-0">
        {/* Background Image */}
        <img
          src={contactImage}
          alt="Background"
          className="absolute w-[900px] h-[600px] mt-20 md:mt-60 object-contain z-[-1] rounded-xl"
          style={{ left: '50%', transform: 'translateX(-50%)', top: '-50%' }}
        />
        {/* Form Container with Glass Effect */}
        <div className="relative p-4 md:p-8 bg-[#164453] bg-opacity-30 rounded-xl shadow-lg">
          <div className="backdrop-blur-lg p-4 rounded-xl">
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

const QuestionText = () => {
  return (
    <div className="max-w-[1240px] xl:mx-auto px-4 md:pt-0 pt-10 lg:py-16">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between xl:flex-row items-center justify-center text-center xl:text-left gap-4 xl:gap-8 xl:mr-40 xl:ml-40">
        <div className="flex-1">
          <div className="mb-2 sm:mb-4 xl:mt-4 lg:mt-2">
            <h1 className="text-3xl text-[45px] md:mt-3 md:mb-3 lg:mb-3 md:text-[50px] xl:text-[55px] lg:text-[50px] font-bold text-black inline-block xl:mb-4">
              Got Questions?
            </h1>
            <h2 className="text-[29px] md:text-[32px] xl:text-4xl xl:mb-4 font-bold text-black inline-block xl:mr-5">
              We’re Here to Answer!
            </h2>
          </div>
        </div>
        <div className="flex-1 md:mt-4 xl:mt-0 md:text-left">
          <p className="text-gray-600 lg:mb-4 text-[14px] sm:text-[16px]">
            Connect with us directly through email, phone, or by visiting our center.
            Whether you have questions about our programs, or simply wish to learn more
            about what we offer, we’re here to help. Reach out—we’d love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
};

const Icons = () => {
    return (
      <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 py-8">
        {/* Phone Icon Box */}
        <div className="relative flex flex-col items-center p-6 rounded-xl shadow-lg w-full sm:w-[275px] h-[200px] text-center bg-[#164453] bg-opacity-50 backdrop-blur-md">
          <FaPhone className="text-3xl mb-4 text-black" />
          <p className="text-black text-sm font-semibold mt-5">+91 12345 67890<br />+91 12345 67890</p>
        </div>
        
        {/* Email Icon Box */}
        <div className="relative flex flex-col items-center p-6 rounded-xl shadow-lg w-full sm:w-[275px] h-[200px] text-center bg-[#164453] bg-opacity-50 backdrop-blur-md">
          <FaEnvelope className="text-3xl mb-4 text-black" />
          <p className="text-black text-sm break-all font-semibold mt-5">shambhalaspiritualfoundation@gmail.com</p>
        </div>
        
        {/* Location Icon Box */}
        <div className="relative flex flex-col items-center p-6 rounded-xl shadow-lg w-full sm:w-[275px] h-[200px] text-center bg-[#164453] bg-opacity-50 backdrop-blur-md">
          <FaMapMarkerAlt className="text-3xl mb-4 text-black" />
          <p className="text-black text-sm font-semibold mt-5">Shambhala Spiritual Foundation,<br />Uttam Nagar, New Delhi, 110059</p>
        </div>
      </div>
    );
  };
  
  

const ContactForm = () => {
  return (
    <form className="space-y-6 w-full">
      <div>
        <label className="block text-gray-700 font-semibold md:mb-2">Full Name</label>
        <input
          type="text"
          placeholder="John Doe"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold md:mb-2">Email ID</label>
        <input
          type="email"
          placeholder="johndoe@gmail.com"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold md:mb-2">Phone Number</label>
        <input
          type="tel"
          placeholder="+91 12345 67890"
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
        />
      </div>
      <div>
        <label className="block text-gray-700 font-semibold md:mb-2">Type your message here</label>
        <textarea
          placeholder="Start typing..."
          className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
          rows="4"
        />
      </div>
      <button
        type="submit"
        className="w-[200px] py-2 rounded-md bg-teal-600 text-black font-semibold hover:bg-teal-700 transition duration-300 mx-auto block"
      >
        SUBMIT
      </button>
    </form>
  );
};

export default MergedComponent;
