import React from 'react';
import CarouselComponent from '../Home/crousel';
import Product from '../Home/product';
import Testimonial from '../Home/Testimonial';
import TeamCard from '../Home/TeamCard';
import teamData from '../Home/teamdata';
// import Resource from '../Home/resource';

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <CarouselComponent />
      <Product/>
    <section className="px-4 pt-20 pb-48">
        <div className="container mx-auto">
          {/* <PageTitle section="Testimonials" heading="Here are our heroes">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </PageTitle> */}
           <h3 className="text-xl font-bold text-center text-black mb-2">
        TESTIMONIALS
      </h3>
      <h1 className="text-5xl font-bold text-center mb-8">
  <span className="text-black">Here Are Our </span>
  <span className="text-red-500">Heroes</span>
</h1>
      
          <div className="mt-24 grid grid-cols-1 gap-12 gap-x-24 md:grid-cols-2 xl:grid-cols-4">
            {teamData.map(({ img, name, position, socials }) => (
              <TeamCard
                key={name}
                img={img}
                name={name}
                position={position}
                
              />
            ))}
          </div>
        </div>
      </section>
      {/* <Resource/> */}
    </div>
  );
};

export default Home;
