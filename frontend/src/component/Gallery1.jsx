import React from 'react';

const Gallery1 = ({ images }) => {
  return (
    <section className='md:m-32 my-10 mx-5'>
      <div class="text-center">
        <h3 class="text-[15px] font-barlowcondensed tracking-widest text-coklat">IMAGES</h3>
        <h1 class="text-[45px] font-island text-gray-700">Image Gallery</h1>
      </div>
      <div className="columns-1 md:columns-2 lg:columns-4 gap-4 space-y-4 p-8 xl:mt-0 mt-1">
        {images.map((image, index) => (
          <div key={index} className="h-min w-full">
            <img data-modal-target="modal" className="object-cover cursor-pointer" src={image} alt={`Img ${index + 1}`} />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Gallery1;
