import React from 'react';
import { FaStar } from "react-icons/fa6";

const Templateservices = ({ subtitle, content, staf }) => {
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
        {content.map((section, index) => (
          <div key={index} className="mt-4">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-gilda">{section.title}</h1>
            {section.paragraphs.map((paragraph, pIndex) => (
              <p key={pIndex} className="text-gray-600 mt-4 leading-relaxed font-barlow text-base sm:text-lg">
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        <h1 className="text-3xl sm:text-4xl md:text-5xl font-gilda border-b-4 my-12">The Staff</h1>

        {staf.map((section, index) => (
          <div key={index} className="my-7">
            <h1 className="text-[30px] sm:text-4xl md:text-[35px] font-gilda">{section.jabatan}</h1>
            {section.paragraphs.map((teks, pIndex) => (
              <p key={pIndex} className="text-gray-600 mt-4 leading-relaxed font-barlow text-base sm:text-lg">
                {teks}
              </p>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templateservices;
