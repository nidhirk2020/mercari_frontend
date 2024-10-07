import React, { useState } from 'react';

const Slider = () => {
  // Array containing content for each box
  const boxesContent = [
    "user2:laborum voluptatibus saepe excepturi sapiente necessitatibus minus, quo fugiat quos minima velit ullam in odit eos ",
    "user3:laborum voluptatibus saepe excepturi sapiente necessitatibus minus, quo fugiat quos minima velit ullam in odit eos ",
    "user4:laborum voluptatibus saepe excepturi sapiente necessitatibus minus, quo fugiat quos minima velit ullam in odit eos ",
    "user5:laborum voluptatibus saepe excepturi sapiente necessitatibus minus, quo fugiat quos minima velit ullam in odit eos ",
    "user6:laborum voluptatibus saepe excepturi sapiente necessitatibus minus, quo fugiat quos minima velit ullam in odit eos ",
    "user7:laborum voluptatibus saepe excepturi sapiente necessitatibus minus, quo fugiat quos minima velit ullam in odit eos ",
    "user8:laborum voluptatibus saepe excepturi sapiente necessitatibus minus, quo fugiat quos minima velit ullam in odit eos ",
  ];

  // State to manage the current index of the visible box set
  const [currentIndex, setCurrentIndex] = useState(0);

  // Calculate the next set of boxes to display
  const visibleBoxes = boxesContent.slice(currentIndex, currentIndex + 4);

  // Function to handle right arrow click
  const handleNext = () => {
    if (currentIndex + 4 < boxesContent.length) {
      setCurrentIndex(currentIndex + 4);
    }
  };

  // Function to handle left arrow click
  const handlePrevious = () => {
    if (currentIndex - 4 >= 0) {
      setCurrentIndex(currentIndex - 4);
    }
  };

  return (
    <div className="flex flex-col items-center justify-center py-10 bg-gray-100">
      {/* Heading */}
      <h2 className="text-3xl mb-8">Lives Changed Through Meditation</h2>

      {/* Slider Container */}
      <div className="w-full max-w-6xl">
        {/* Box Container */}
        <div className="flex flex-col md:flex-row justify-between mb-6 overflow-hidden">
          {visibleBoxes.map((content, index) => (
            <div
              key={index}
              className="h-20 w-full sm:h-40 md:h-48 lg:h-60 md:w-48 lg:w-72 mx-3 flex items-center justify-center text-gray-600 text-center bg-white shadow-xl p-4 md:p-8 border border-gray-200"
            >
              {content}
            </div>
          ))}
        </div>

        {/* Arrow Container Positioned at Bottom */}
        <div className="flex justify-center items-center mt-6 space-x-4">
          {/* Left Arrow */}
          <button
            onClick={handlePrevious}
            disabled={currentIndex === 0}
            className={`h-10 w-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-200 transition focus:outline-none ${
              currentIndex === 0 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            &lt; {/* Left Arrow */}
          </button>

          {/* Right Arrow */}
          <button
            onClick={handleNext}
            disabled={currentIndex + 4 >= boxesContent.length}
            className={`h-10 w-10 flex items-center justify-center bg-white text-black rounded-full hover:bg-gray-200 transition focus:outline-none ${
              currentIndex + 4 >= boxesContent.length ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            &gt; {/* Right Arrow */}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Slider;















