import React, { useState } from 'react';
import TemplateImg from '../component/TemplateImg';
import Header from '../component/header';
import Navbar from '../component/navbar/navbar';
import Footer from '../component/footer/footer';
import Img1 from '../assets/image/livingrom.jpg';

const Kitchen = () => {
  const [backgroundImage] = useState(Img1);
  const [subtitle] = useState("A EXPERIENCE FOR THE SENSE");
  const [title] = useState("Media Room");
  const [paragraphs] = useState([
    "The Media Room is situated on the ground floor next to the living & dining area. This cosy, air-conditioned room is accessed by folding glass doors and features a cool terrazzo floor.",
    "A built-in L-shaped couch hugs the walls, creating a comfortable space for watching the 45 satellite-channel TV, complete with DVD/CD player and a good selection of DVDs. WiFi Internet access is available throughout the villa.",
  ]);
  const [subheadingText] = useState("Luxury Hotel");
  const [headingText] = useState("Media Room");

  return (
    <div>
      <Navbar/>
      <TemplateImg backgroundImage={backgroundImage} subheadingText={subheadingText} headingText={headingText} />
      <Header subtitle={subtitle} title={title} paragraphs={paragraphs} />
      <Footer/>
    </div>
  );
};

export default Kitchen;
