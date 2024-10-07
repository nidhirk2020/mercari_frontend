import React from 'react';
import { Carousel } from 'react-responsive-carousel'; // Ensure you have react-responsive-carousel installed
import 'react-responsive-carousel/lib/styles/carousel.min.css'; // Import carousel styles
import girl from '../../assets/girl.jpeg';

const CarouselComponent = () => {
  return (
    <div className="relative w-full h-[550px] md:h-[767px] bg-[#164453] overflow-hidden ">
      <Carousel 
        autoPlay
        interval={3000}
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        className="h-full"
      >
        {/* Carousel Item 1 */}
        <div className="flex items-center justify-between h-full">
          <div className="text-white px-10 w-full lg:w-1/2 text-left"> {/* Added text-left here */}
            <h2 className="text-5xl font-bold mb-12">Lorem, amet consectetur</h2>
            <p className="mt-4 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum ullam porro voluptate? Illum illo itaque esse mollitia exercitationem! Impedit minus odio nemo, velit maiores quasi aperiam consectetur non facere ea recusandae. Officiis facilis sunt ullam maiores eveniet nostrum sequi molestias tenetur possimus quod, sed consequuntur minus eius similique praesentium nobis exercitationem laudantium aperiam unde modi debitis. Saepe expedita non iusto ipsum quod ad, cupiditate harum sint doloremque possimus corrupti.
            </p>
        <button className="mt-8 px-6 py-2 bg-white text-gray-800 font-semibold  shadow hover:bg-gray-200 transition duration-300">
      Join Meditation
    </button>
          </div>
          <div className="hidden lg:block relative w-1/2 mr-0">
            <img
              src={girl} // Ensure this image path is correct
              alt="Carousel"
              className="w-1/4 h-[767px] object-cover rounded-l-full"
              style={{ borderRadius: 'px' }} // Apply a custom radius to achieve the semicircle effect
            />
          </div>
        </div>
        
        {/* Carousel Item 2 */}
        <div className="flex items-center justify-between h-full">
          <div className="text-white px-10 w-full lg:w-1/2 text-left"> {/* Added text-left here */}
            <h2 className="text-5xl font-bold mb-12">Lorem, amet consectetur</h2>
            <p className="mt-4 text-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum ullam porro voluptate? Illum illo itaque esse mollitia exercitationem! Impedit minus odio nemo, velit maiores quasi aperiam consectetur non facere ea recusandae. Officiis facilis sunt ullam maiores eveniet nostrum sequi molestias tenetur possimus quod, sed consequuntur minus eius similique praesentium nobis exercitationem laudantium aperiam unde modi debitis. Saepe expedita non iusto ipsum quod ad, cupiditate harum sint doloremque possimus corrupti.
            </p>
            <button className="mt-8 px-6 py-2 bg-white text-gray-800 font-semibold  shadow hover:bg-gray-200 transition duration-300">
      Join Meditation
    </button>
          </div>
          <div className="hidden lg:block relative w-1/2">
            <img
              src={girl} // Ensure this image path is correct
              alt="Carousel"
              className="w-1/4 h-[767px] object-cover rounded-l-full"
              // Apply a custom radius to achieve the semicircle effect
            />
          </div>
        </div>
      </Carousel>
    </div>
  );
};

export default CarouselComponent;