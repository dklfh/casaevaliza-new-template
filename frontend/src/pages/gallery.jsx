import React, { useState } from 'react';
import Navbar from '../component/navbar/navbar';
import Footer from '../component/footer/footer';
import Gallery1 from '../component/Gallery1';

// Import images
import Casa1 from '../assets/image/casa-vila-1.jpg';
import Casa2 from '../assets/image/casa-vila-2.jpg';
import Casa3 from '../assets/image/casa-vila-3.jpg';
import Casa5 from '../assets/image/casa-vila-5.jpg';
import Casa6 from '../assets/image/casa-vila-6.jpg';
import Casa7 from '../assets/image/casa-vila-7.jpg';
import Casa8 from '../assets/image/casa-vila-8.jpg';
import Casa9 from '../assets/image/casa-vila-9.jpg';
import Casa10 from '../assets/image/casa-vila-10.jpg';
import Casa12 from '../assets/image/casa-vila-12.jpg';
import Casa14 from '../assets/image/casa-vila-14.jpg';
import Casa15 from '../assets/image/casa-vila-15.jpg';
import Casa16 from '../assets/image/casa-vila-16.jpg';
import Casa17 from '../assets/image/casa-vila-17.jpg';
import Casa20 from '../assets/image/casa-vila-20.jpg';
import TemplateImg from '../component/TemplateImg';
import Img1 from '../assets/image/galleryhead.jpg';
import TemplateImg2 from '../component/TemplateImg2';

const Gallery = () => {
  const images = [
    Casa1, Casa2, Casa3, Casa5, Casa6, Casa7, Casa8,
    Casa9, Casa10, Casa12, Casa14, Casa15, Casa16, Casa17, Casa20
  ];
  const [backgroundImage] = useState(Img1);
  const [subheadingText] = useState("Images");
  const [headingText] = useState("Image Gallery");

  return (
    <div>
      <Navbar/>
      <TemplateImg2 image={Img1} headText={headingText} subText={subheadingText}/>
      <Gallery1 images={images} />
      <Footer/>
    </div>
  );
}

export default Gallery;
