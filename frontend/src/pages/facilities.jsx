import React, { useState } from 'react';
import TemplateImg from '../component/TemplateImg';
import Template1 from '../component/Template1';
import Navbar from '../component/navbar/navbar';
import Footer from '../component/footer/footer';
import Img1 from '../assets/image/facilities.jpg';
import Hotelfacilities from '../component/Hotelfacilities';
import TemplateImg2 from '../component/TemplateImg2';

const  Facilities = () => {
  const [backgroundImage] = useState(Img1);
  const [subheadingText] = useState("our hotel facilities");
  const [headingText] = useState("Facilities");

  return (
    <div>
      <Navbar/>
      <TemplateImg2 image={Img1} headText={headingText} subText={subheadingText}/>
      <Hotelfacilities/>
      <Footer/>
    </div>
  );
};

export default  Facilities;
