// src/components/OurValuesMobile.js

import React from 'react';
import left from '../../assets/AboutUsimages/left.svg';
import right from '../../assets/AboutUsimages/right.svg';

const OurValuesMobile = () => {
  return (
    <div className="flex flex-col py-8 bg-[#F6F8F8]">

      {/* Ahimsa Section */}
      <div className="flex flex-col items-end mb-10">
        
        <h3 className="text-xl font-bold text-cyan-800 pr-44">AHIMSA</h3>
        <img src={left} alt="Top Left Line Decoration" className="w-[300px] h-auto mb-2" />
        <p className="text-sm text-gray-600 text-center pt-2 w-[300px] pr-1">
          Practicing non-violence in thoughts, words, and actions. Promoting peace and compassion as a way of life.
        </p>
      </div>

      {/* Shakahar Section */}
      <div className="flex flex-col items-start mb-10 pl-0">
        
        <h3 className="text-xl font-bold text-cyan-800 pl-3">SHAKAHAR</h3>
        <img src={right} alt="Bottom Right Line Decoration" className="w-[300px] h-auto mb-2 " />
        <p className="text-sm text-gray-600 pl-2 w-[300px]">
          Embracing a vegetarian lifestyle to respect all living beings. Aligning with non-violence through mindful food choices.
        </p>
      </div>

      {/* Pyramid Healing Section */}
       <div className="flex flex-col items-end mb-10">
        
        <h3 className="text-xl font-bold text-cyan-800 pr-24">PYRAMID HEALING</h3>
        <img src={left} alt="Top Left Line Decoration" className="w-[300px] h-auto mb-2" />
        <p className="text-sm text-gray-600 text-center pt-2 w-[300px] pr-1">
            Utilizing the energy of pyramids to enhance meditation and healing. Amplifying cosmic energy to aid in spiritual growth and awakening.
        </p>
      </div>





      {/* Maitreyee Section */}
       <div className="flex flex-col items-start mb-10 pl-0">
        
        <h3 className="text-xl font-bold text-cyan-800 pl-3">MAITREYEE</h3>
        <img src={right} alt="Bottom Right Line Decoration" className="w-[300px] h-auto mb-2 " />
        <p className="text-sm text-gray-600 pl-2 w-[300px]">
        Fostering unconditional love, kindness, and compassion toward all beings. Promoting unity and collective spiritual growth.

        </p>
      </div>


      {/* Dhyaan Jagat Section */}
       <div className="flex flex-col items-end mb-10">
        
        <h3 className="text-xl font-bold text-cyan-800 pr-28">DHYAAN JAGAT</h3>
        <img src={left} alt="Top Left Line Decoration" className="w-[300px] h-auto mb-2" />
        <p className="text-sm text-gray-600 text-center pt-2 w-[300px] pr-1">
         Guiding individuals toward realizing their divine nature, encouraging the shift from duality to oneness with the universe.

        </p>
      </div>



    </div>
  );
};

export default OurValuesMobile;
