import React from 'react';

const TemplateLinks = ({ sections }) => {
  return (
    <div className="max-w-1140 mx-auto pt-10 p-4 sm:py-20">
      <h1 className="text-4xl sm:text-[70px] font-island mb-4">Links</h1>

      {sections.map((section, index) => (
        <div key={index} className="mb-6 sm:mb-8">
          <h2 className="text-lg sm:text-xl font-gilda bg-coklat text-white px-2 sm:px-4 py-1 sm:py-2">{section.title}</h2>
          <ul className="pl-2 sm:pl-4 mt-2 space-y-2 sm:space-y-4">
            {section.links.map((link, linkIndex) => (
              <li key={linkIndex} className="space-y-1 sm:space-y-2">
                <h3 className="text-base sm:text-lg font-semibold font-barlow">{link.name}</h3>
                <a href={link.url} className="text-blue-500 underline font-gilda" target="_blank" rel="noopener noreferrer">
                  {link.url}
                </a>
                <p className="text-sm sm:text-base font-barlow">{link.description}</p>
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default TemplateLinks;
