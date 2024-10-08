// CarouselComponent.jsx
import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import Banner from './Banner'; // Import the Banner component

const CarouselComponent = () => {
  return (
    <div className="relative w-full h-[550px] md:h-[767px] bg-[#164453] overflow-hidden">
      <Carousel
        autoPlay
        interval={3000}
        infiniteLoop
        showArrows={false}
        showIndicators={false}
        showStatus={false}
        className="h-[60vh]"
      >
        {/* Carousel Item 1 */}
        <Banner
          title="Lorem, amet consectetur"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum ullam porro voluptate? Illum illo itaque esse mollitia exercitationem! Impedit minus odio nemo, velit maiores quasi aperiam consectetur non facere ea recusandae. Officiis facilis sunt ullam maiores eveniet nostrum sequi molestias tenetur possimus quod, sed consequuntur minus eius similique praesentium nobis exercitationem laudantium aperiam unde modi debitis. Saepe expedita non iusto ipsum quod ad, cupiditate harum sint doloremque possimus corrupti."
          buttonText="Join Meditation"
        />
        
        {/* Carousel Item 2 */}
        <Banner
          title="Lorem, amet consectetur"
          description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis eum ullam porro voluptate? Illum illo itaque esse mollitia exercitationem! Impedit minus odio nemo, velit maiores quasi aperiam consectetur non facere ea recusandae. Officiis facilis sunt ullam maiores eveniet nostrum sequi molestias tenetur possimus quod, sed consequuntur minus eius similique praesentium nobis exercitationem laudantium aperiam unde modi debitis. Saepe expedita non iusto ipsum quod ad, cupiditate harum sint doloremque possimus corrupti."
          buttonText="Join Meditation"
        />
      </Carousel>
    </div>
  );
};

export default CarouselComponent;
