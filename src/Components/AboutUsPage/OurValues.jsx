import React from 'react';
import bottomleft from '../../assets/AboutUsimages/bottomleft.svg';
import bottomright from '../../assets/AboutUsimages/rightbottom.svg';
import topright from '../../assets/AboutUsimages/rightTop.svg';
import topleft from '../../assets/AboutUsimages/topleft.svg';
import bottom from '../../assets/AboutUsimages/bottom.svg';

const OurValues = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 mt-10 bg-[#F6F8F8]">
      {/* Main Container */}
      <div className="relative w-full max-w-5xl text-center">
        {/* Center Circle with Enhanced Gradient and Double White Borders */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Outer Gradient Circle with White Borders */}
            <div
              className="w-64 h-64 rounded-full flex items-center justify-center mb-40"
              style={{
                background:
                  'radial-gradient(circle, rgba(52, 132, 121, 1), rgba(132, 182, 207, 0.6) 70%, rgba(255, 255, 255, 0.1) 100%)',
                border: '2px solid white',
                position: 'relative',
                boxShadow: '0 0 80px 30px rgba(52, 132, 121, 0.4)', // Blur effect
              }}
            >
              {/* Inner Circle with Transparent Background */}
              <div
                className="w-56 h-56 rounded-full flex items-center justify-center"
                style={{
                  background: 'transparent',
                  border: '2px solid white', // Only the white border remains
                }}
              >
                <h2 className="text-white text-lg font-bold">OUR CORE VALUES</h2>
              </div>
            </div>
          </div>
        </div>

        {/* Outer Values Texts */}
        <div className="grid grid-cols-2 gap-28">
          {/* Ahimsa Section */}
          <div className="flex items-center justify-start mb-10 relative">
            <div className="w-2/3 text-left">
              <h3 className="text-xl font-bold text-cyan-800">AHIMSA</h3>
              {/* Replace <hr> with SVG image */}
              <img src={topleft} alt="Top Left Line Decoration" className="w-[120px] lg:w-[400px] pt-3 h-auto mt-3 absolute top-3 left-[-10px]" />
              <p className="text-sm pt-6 text-gray-600">
                Practicing non-violence in thoughts, words, and actions. Promoting peace and compassion as a way of life.
              </p>
            </div>
          </div>

          {/* Shakahar Section */}
          <div className="flex items-center justify-end mb-10 relative">
            <div className="w-2/3 text-right">
              <h3 className="text-xl font-bold text-cyan-800 ">SHAKAHAR</h3>
              {/* Replace <hr> with SVG image */}
              <img src={topright} alt="Top Right Line Decoration" className="w-[300px] lg:w-[400px] pt-3 h-auto absolute mt-2 top-5 right-[-10px]" />
              <p className="text-sm pt-6 text-gray-600">
                Embracing a vegetarian lifestyle to respect all living beings. Aligning with non-violence through mindful food choices.
              </p>
            </div>
          </div>

          {/* Pyramid Healing Section */}
          <div className="flex items-center mb-10 relative" style={{ marginRight: '50px' }}>
            <div className="w-2/3 text-left">
              <h3 className="text-xl font-bold text-cyan-800 pb-5 ">PYRAMID HEALING</h3>
              {/* Replace <hr> with SVG image */}
              <img src={bottomleft} alt="Bottom Left Line Decoration" className="w-[300px] lg:w-[390px] pb-3 h-auto absolute bottom-20 left-[-10px]" />
              <p className="text-sm text-gray-600">
                Utilizing the energy of pyramids to enhance meditation and healing. Amplifying cosmic energy to aid in spiritual growth and awakening.
              </p>
            </div>
          </div>

          {/* Maitreyee Section */}
          <div className="flex items-center justify-end relative" style={{ marginLeft: '50px' }}>
            <div className="w-2/3 text-right">
              <h3 className="text-xl font-bold text-cyan-800 pb-5 ">MAITREYEE</h3>
              {/* Replace <hr> with SVG image */}
              <img src={bottomright} alt="Bottom Right Line Decoration" className="w-[300px] lg:w-[390px] pb-3 h-auto absolute bottom-24 right-[-10px]" />
              <p className="text-sm text-gray-600">
                Fostering unconditional love, kindness, and compassion toward all beings. Promoting unity and collective spiritual growth.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Value - Dhyaan Jagat */}
        <div className="flex items-center justify-center mt-4 relative">
          <div className="w-2/3 text-center">
            {/* Replace <hr> with SVG image */}
            <img src={bottom} alt="Bottom Line Decoration" className="w-[6px] h-auto mx-auto" />
            <h3 className="text-xl font-bold text-cyan-800 mb-2">DHYAAN JAGAT</h3>
            <hr className='w-[200px] border-[#348479] border-t-2 mt-0 mx-auto mb-3' />
            <p className="text-sm pt-3 text-gray-600">
              Guiding individuals toward realizing their divine nature, encouraging the shift from duality to oneness with the universe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;


