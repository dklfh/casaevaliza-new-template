import React from 'react';
import { FaStar } from "react-icons/fa6";


const Template1 = ({ subtitle, title, paragraphs }) => {
  return (
    <div className="bg-white text-gray-800 font-playfair my-[40px] sm:my-[60px] md:my-[80px]">
      <div className="max-w-4xl mx-auto p-4 sm:p-6 md:p-8">
        <div className="flex items-center mb-4">
          <div className="flex text-yellow-500 space-x-1">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>
        </div>
        <span className="mt-2 sm:mt-auto text-coklat mb-2">{subtitle}</span>
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-gilda">{title}</h1>
        {paragraphs.map((paragraph, index) => (
          <p key={index} className="text-gray-600 mt-4 leading-relaxed font-barlow text-base sm:text-lg">
            {paragraph}
          </p>
        ))}
      </div>
    </div>
  );
}

export default Template1;

