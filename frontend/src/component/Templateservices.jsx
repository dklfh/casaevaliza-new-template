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
              <p key={pIndex} className="font-barlow text-15 text-text2 mb-5">
                {paragraph}
              </p>
            ))}
          </div>
        ))}

        <h1 className="text-3xl sm:text-4xl md:text-[30px] font-gilda border-b-2 mb-7 mt-12">The Staff</h1>

        {staf.map((section, index) => (
          <div key={index} className="my-7">
            <h1 className="mt-3 mb-1 font-gilda text-[30px] sm:text-4xl md:text-[20px] text-text2 ">{section.jabatan}</h1>
            {section.paragraphs.map((teks, pIndex) => (
              <p key={pIndex} className="font-barlow text-15 text-text2 mb-5">
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
