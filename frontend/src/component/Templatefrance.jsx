import React from 'react';

const Templatefrance = ({ textfrance }) => {
  return (
    <div className="max-w-1140 px-4 mx-auto pb-20">
      <div className="px-4">
        {textfrance.map((section, index) => (
          <div key={index} className="">
            <h1 className="text-3xl sm:text-4xl md:text-4xl mb-4 text-text font-gilda border-b-text2 border-b">{section.titlefrance}</h1>
            <div className='space-y-4'>
              {section.paragraphsfrance.map((teks, pIndex) => (
                <p key={pIndex} className="font-barlow text-15 text-text2">
                  {teks}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Templatefrance;