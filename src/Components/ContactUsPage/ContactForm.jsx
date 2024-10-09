import React from 'react';
import contactImage from '../../assets/contact.png'; // Ensure this path is correct

const ContactForm = () => {
  return (
    <div className="relative flex justify-center items-center py-16">
      {/* Background Image with Glass Effect */}
      <div 
        className="absolute w-[800px] h-[600px] bg-white bg-opacity-30 backdrop-blur-lg rounded-xl"
        style={{ 
          zIndex: '-1', 
          backgroundImage: `url(${contactImage})`, 
          backgroundSize: 'contain', 
          backgroundPosition: 'center',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)' // Drop shadow
        }}
      ></div>

      {/* Form Container */}
      <div className="w-[900px] h-[656px] p-8 bg-white bg-opacity-50 rounded-xl shadow-lg">
        <form className="space-y-6 w-full">
          {/* Full Name Field */}
          <div>
            <label className="block text-gray-700 font-semibold">Full Name</label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Email Field */}
          <div>
            <label className="block text-gray-700 font-semibold">Email ID</label>
            <input
              type="email"
              placeholder="johndoe@gmail.com"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Phone Number Field */}
          <div>
            <label className="block text-gray-700 font-semibold">Phone Number</label>
            <input
              type="tel"
              placeholder="+91 12345 67890"
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
            />
          </div>

          {/* Message Field */}
          <div>
            <label className="block text-gray-700 font-semibold">Type your message here</label>
            <textarea
              placeholder="Start typing..."
              className="w-full px-4 py-2 rounded-md border border-gray-300 focus:outline-none focus:border-teal-500"
              rows="4"
            />
          </div>

          {/* Centered Submit Button */}
          <button
            type="submit"
            className="w-[200px] py-2 rounded-md bg-teal-600 text-white font-semibold hover:bg-teal-700 transition duration-300 mx-auto block"
          >
            SUBMIT
          </button>
        </form>
      </div>
    </div>
  );
};

export default ContactForm;
