import React from 'react';
import CarouselComponent from '../Home/crousel';
import ShambhalaComponent from '../Home/ShambhalaComponent';
import ImageTextComponent from '../Home/ImageTextComponent';
import Testimonial from '../Home/Testimonial';

// import Resource from '../Home/resource';

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <CarouselComponent />
      <ShambhalaComponent/>
      <ImageTextComponent/>
    <Testimonial/>
      {/* <Resource/> */}
    </div>
  );
};

export default Home;
