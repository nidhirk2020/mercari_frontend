import React from 'react';
import CarouselComponent from '../Home/crousel';
import Product from '../Home/product';
import ImageTextComponent from '../Home/ImageTextComponent';
import Testimonial from '../Home/Testimonial';

// import Resource from '../Home/resource';

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <CarouselComponent />
      <Product/>
      {/* <ImageTextComponent/> */}
    <Testimonial/>
      {/* <Resource/> */}
    </div>
  );
};

export default Home;
