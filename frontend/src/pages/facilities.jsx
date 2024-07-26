import React, { useState } from 'react';
import TemplateImg from '../component/TemplateImg';
import Template1 from '../component/Template1';
import Navbar from '../component/navbar/navbar';
import Footer from '../component/footer/footer';
import Img1 from '../assets/image/IMG-20240618-WA0009.jpg';
import Hotelfacilities from '../component/Hotelfacilities';

const  Facilities = () => {
  const [backgroundImage] = useState(Img1);
  const [subheadingText] = useState("Luxury Hotel");
  const [headingText] = useState("Facilities");

  return (
    <div>
      <Navbar/>
      <TemplateImg backgroundImage={backgroundImage} subheadingText={subheadingText} headingText={headingText} />
      <Hotelfacilities/>
      <Footer/>
    </div>
  );
};

export default  Facilities;
