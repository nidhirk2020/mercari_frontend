import React from 'react';

const Banner = ({ title }) => {
  return (
    <div className="bg-accent w-full h-[250px] py-16 flex justify-center items-center">
      <h1 className="text-white text-4xl font-bold">{title}</h1>
    </div>
  );
};

export default Banner;
