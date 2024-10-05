import React from 'react';

const OurValues = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 bg-white">
      {/* Main Container */}
      <div className="relative w-full max-w-5xl text-center">
        {/* Center Circle with Enhanced Gradient and Double White Borders */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="relative">
            {/* Outer Gradient Circle with White Borders */}
            <div className="w-64 h-64 rounded-full flex items-center justify-center"
              style={{
                background: 'radial-gradient(circle, rgba(52, 132, 121, 1) , rgba(132, 182, 207, 0.6) 70%, rgba(255, 255, 255, 0.1) 100%)',
                border: '2px solid white',
                position: 'relative',
                boxShadow: '0 0 80px 30px rgba(52, 132, 121, 0.4)', // Blur effect
              }}
            >
              {/* Inner Circle with Transparent Background */}
              <div className="w-56 h-56 rounded-full flex items-center justify-center"
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
        <div className="grid grid-cols-2 gap-12 mt-32">
          <div className="flex items-center justify-end">
            <div className="w-2/3 text-right">
              <h3 className="text-xl font-bold text-cyan-800">AHIMSA</h3>
              <p className="text-sm text-gray-600">
                Practicing non-violence in thoughts, words, and actions. Promoting peace and compassion as a way of life.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start">
            <div className="w-2/3 text-left">
              <h3 className="text-xl font-bold text-cyan-800">SHAKAHAR</h3>
              <p className="text-sm text-gray-600">
                Embracing a vegetarian lifestyle to respect all living beings. Aligning with non-violence through mindful food choices.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-end">
            <div className="w-2/3 text-right">
              <h3 className="text-xl font-bold text-cyan-800">PYRAMID HEALING</h3>
              <p className="text-sm text-gray-600">
                Utilizing the energy of pyramids to enhance meditation and healing. Amplifying cosmic energy to aid in spiritual growth and awakening.
              </p>
            </div>
          </div>

          <div className="flex items-center justify-start">
            <div className="w-2/3 text-left">
              <h3 className="text-xl font-bold text-cyan-800">MAITREYEE</h3>
              <p className="text-sm text-gray-600">
                Fostering unconditional love, kindness, and compassion toward all beings. Promoting unity and collective spiritual growth.
              </p>
            </div>
          </div>
        </div>

        {/* Bottom Value */}
        <div className="flex items-center justify-center mt-12">
          <div className="w-2/3 text-center">
            <h3 className="text-xl font-bold text-cyan-800">DHYAAN JAGAT</h3>
            <p className="text-sm text-gray-600">
              Guiding individuals toward realizing their divine nature, encouraging the shift from duality to oneness with the universe.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurValues;
