import React from 'react';
import CarouselComponent from '../Home/crousel';
import ImageTextComponent from '../Home/ImageTextComponent';
import Slider from '../Home/slider';
import Resource from '../Home/resource';
import ShambhalaComponent from '../Home/ShambhalaComponent';
const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <CarouselComponent />
      <ShambhalaComponent/>
      <ImageTextComponent/>
      <Slider/>
      <Resource/>
    </div>
  );
};

export default Home;
