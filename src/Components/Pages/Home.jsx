import React from 'react';
import CarouselComponent from '../Home/crousel';
import ShambhalaComponent from '../Home/ShambhalaComponent';
import ImageTextComponent from '../Home/ImageTextComponent';
import Slider from '../Home/slider';
// import Resource from '../Home/resource';

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <CarouselComponent />
      <ShambhalaComponent/>
      <ImageTextComponent/>
      <Slider/>
      {/* <Resource/> */}
    </div>
  );
};

export default Home;
