import React from 'react';

const Gallery1 = ({ images }) => {
  return (
    <section className='md:m-32 my-10 mx-5'>
      <div className="text-center">
        <h3 className="text-15 tracking-custom font-barlowcondensed text-coklat">IMAGES</h3>
        <h1 className="text-45 font-island text-text">Image Gallery</h1>
      </div>
      <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4 p-8 xl:mt-0 mt-1">
        {images.map((image, index) => (
          <div key={index} className="relative h-min w-full">
            <img
              className="object-cover w-full h-full brightness-90"
              src={image}
              alt={`Img ${index + 1}`}
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery1;