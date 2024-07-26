import React from 'react';

const Templatefrance = ({ subtitle, content, textfrance }) => {
  return (
    <div className="max-w-1140 px-4 mx-auto my-20">
      <div className="px-4">
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

        {textfrance.map((section, index) => (
          <div key={index} className="my-10">
            <h1 className="text-3xl sm:text-4xl md:text-5xl font-gilda border-b-black border-b-2">{section.titlefrance}</h1>
            {section.paragraphsfrance.map((teks, pIndex) => (
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

export default Templatefrance;
