import React from 'react';
import { FaStar } from "react-icons/fa6";

const Templateservices = ({ subtitle, content, staf }) => {
  return (
    <div className="py-20">
      <div className="max-w-1140 px-4 mx-auto">
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
