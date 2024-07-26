import React from 'react';

const Templatefrance = ({ textfrance }) => {
  return (
    <div className="max-w-1140 px-4 mx-auto">
      <div className="px-4">

        {textfrance.map((section, index) => (
          <div key={index} className="mb-10">
            <h1 className="text-3xl sm:text-4xl md:text-4xl text-text font-gilda border-b-text2 border-b">{section.titlefrance}</h1>
            {section.paragraphsfrance.map((teks, pIndex) => (
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

export default Templatefrance;
