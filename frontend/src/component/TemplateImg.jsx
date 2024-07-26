import React from 'react';

const Templateimg = ({ backgroundImage, headingText, subheadingText }) => {
  return (
    <div className="w-auto h-[410px] bg-cover bg-center" style={{ backgroundImage: `url(${backgroundImage})` }}>
      <div className="bg-black bg-opacity-50 w-full h-full">
        <div className="container mx-auto h-full flex items-center justify-center">
          <div className="text-center mt-8 sm:mt-12 md:mt-16">
            <h5 className="text-white text-[18px] font-gilda mb-[13px] uppercase tracking-widest font-semibold">{subheadingText}</h5>
            <h1 className="capitalize text-[30px] sm:text-[40px] md:text-[50px] lg:text-6xl text-white mb-[20px] font-gilda">{headingText}</h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Templateimg;
