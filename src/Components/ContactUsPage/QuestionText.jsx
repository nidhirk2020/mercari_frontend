import React from 'react';

const QuestionText = () => {
  return (
    <div className="max-w-[1240px] xl:mx-52 px-4 py-8 lg:py-16">
      <div className="flex flex-col xl:flex-row xl:items-center gap-4 xl:gap-8">
        
        {/* Left Column for the Main Heading */}
        <div className="flex-1">
          <h1 className="text-3xl md:text-[55px] text-[55px] xl:text-[55px] font-bold text-black mb-2 sm:mb-4">
            Got Questions?
          </h1>
          <h2 className=" text-[36px]  md:text-[36px] xl:text-4xl font-bold text-black">
            We’re Here to Answer!
          </h2>
        </div>

        {/* Right Column for the Supporting Text */}
        <div className="flex-1 md:mt-4 xl:mt-0">
          <p className="text-gray-600 text-[14px] sm:text-[16px]">
            Connect with us directly through email, phone, or by visiting our center.
            Whether you have questions about our programs, or simply wish to learn more
            about what we offer, we’re here to help. Reach out—we’d love to hear from you!
          </p>
        </div>
      </div>
    </div>
  );
};

export default QuestionText;
