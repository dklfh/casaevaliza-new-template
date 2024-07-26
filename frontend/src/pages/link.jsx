import React, { useState } from 'react';
import TemplateImg from '../component/TemplateImg';
import Navbar from '../component/navbar/navbar';
import Footer from '../component/footer/footer';
import Img1 from '../assets/image/IMG-20240618-WA0009.jpg';

const Link = () => {
  const [backgroundImage] = useState(Img1);
  const [subheadingText] = useState("Luxury Hotel");
  const [headingText] = useState("Link");

  return (
    <div>
      <Navbar/>
      <TemplateImg backgroundImage={backgroundImage} subheadingText={subheadingText} headingText={headingText} />
      <Footer/>
    </div>
  );
};

export default Link;
