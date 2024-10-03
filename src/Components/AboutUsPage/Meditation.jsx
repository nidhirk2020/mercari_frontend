import React from 'react';

const Meditation = () => {
  return (
    <div className="w-full py-12 bg-white text-center">
      <h2 className="text-2xl sm:text-3xl font-bold mb-8 text-[#2F8479]">
        Our Meditation events across India...
      </h2>

      {/* Marquee Container for mobile (below 480px) */}
      <div className="relative  overflow-hidden w-full bg-gradient-to-r from-[#2F8479] to-[#6BA0BE] py-6 xs:block sm:hidden">
        <div className="flex animate-marquee whitespace-nowrap">
          {/* Location Items - No duplication needed for mobile marquee */}
          <div className="flex md:space-x-20">
            <div className="text-white text-lg mx-4">Kurukshetra <br /> Haryana</div>
            <div className="text-white text-lg mx-4">Kadthal <br /> Hyderabad</div>
            <div className="text-white text-lg mx-4">Nagpur <br /> Maharashtra</div>
            <div className="text-white text-lg mx-4">Panipat <br /> Haryana</div>
            <div className="text-white text-lg mx-4">Mahavatar Babaji Caves <br /> Uttarakhand</div>
          </div>
        </div>
      </div>

      {/* Static Display for larger screens (768px and above) */}
      <div className="hidden sm:flex justify-center bg-gradient-to-r from-[#2F8479] to-[#6BA0BE] py-6 shadow-lg">
        <div className="flex space-x-10">
          <div className="text-white text-lg">Kurukshetra <br /> Haryana</div>
          <div className="text-white text-lg">Kadthal <br /> Hyderabad</div>
          <div className="text-white text-lg">Nagpur <br /> Maharashtra</div>
          <div className="text-white text-lg">Panipat <br /> Haryana</div>
          <div className="text-white text-lg">Mahavatar Babaji Caves <br /> Uttarakhand</div>
        </div>
      </div>
    </div>
  );
};

export default Meditation;
