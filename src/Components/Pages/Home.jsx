import React from 'react';
import CarouselComponent from '../Home/crousel';
import Product from '../Home/product';
import Testimonial from '../Home/Testimonial';
import TeamCard from '../Home/TeamCard';
import teamData from '../Home/teamdata';
import contactData from '../Home/contact-data';
import PageTitle from '../Home/page-title';
import {
  Card,
  Typography,
} from "@material-tailwind/react";
// import Resource from '../Home/resource';

const Home = () => {
  return (
    <div>
      {/* <Navbar /> */}
      <CarouselComponent />
      <Product/>
    <section className="px-4 pt-20 pb-10">
        <div className="container mx-auto">
          {/* <PageTitle section="Testimonials" heading="Here are our heroes">
            According to the National Oceanic and Atmospheric Administration,
            Ted, Scambos, NSIDClead scentist, puts the potentially record
            maximum.
          </PageTitle> */}
           <h3 className="text-xl font-bold text-center text-black mb-2">
        Testimonials
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
      <section className="relative bg-white py-24 px-4 flex flex-col align-center justify-center">
        <div className="container mx-auto flex flex-col justify-center">
        <h3 className="text-xl font-bold text-center text-black mb-2">
        Communities
      </h3>
      <h1 className="text-5xl font-bold text-center mb-8">
  <span className="text-black">The </span>
  <span className="text-red-500">Circle</span>
  <span className="text-black"> of Support</span>
</h1>
      
          <div className="mx-auto mt-20 mb-5 grid max-w-3xl grid-cols-1 gap-16 md:grid-cols-2 lg:grid-cols-2">
            {contactData.map(({ title, icon, description }) => (
              <Card
                key={title}
                color="transparent"
                shadow={false}
                className="text-center text-blue-gray-900"
              >
                <div className="mx-auto mb-6 grid place-items-center">
                  <img src={icon} alt={title} className="h-48 w-48 rounded-3xl bg-blue-gray-900 shadow-lg shadow-gray-500/20" />
                </div>
                <Typography variant="h5" color="blue-gray" className="mb-2">
                  {title}
                </Typography>
                <Typography className="font-normal text-blue-gray-500">
                  {description}
                </Typography>
              </Card>
            ))}
          </div>
           <button
      className="mt-8 mx-auto px-6 py-4 rounded-xl border border-red-500 text-red-500 hover:bg-red-500 hover:text-white transition"
    >
      See all
    </button>
        </div>
      </section>
    </div>
  );
};

export default Home;
