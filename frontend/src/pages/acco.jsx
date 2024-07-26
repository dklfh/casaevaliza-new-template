import React, { useState } from 'react';
import TemplateImg from '../component/TemplateImg';
import Header from '../component/header';
import Navbar from '../component/navbar/navbar';
import Footer from '../component/footer/footer';
import Img1 from '../assets/image/accommodation.jpg';
import About1 from '../component/About1';
import Kkk from '../component/header';
import Template1 from '../component/Template1';
import TemplateImg2 from '../component/TemplateImg2';

const Kitchen = () => {
  const [backgroundImage] = useState(Img1);
  const [subtitle] = useState("A EXPERIENCE FOR THE SENSE");
  const [title] = useState("Accommodation");
  const [paragraphs] = useState([
    "Accommodations at Casa Evaliza comprise an expansive living & dining room, an air-conditioned media room, and four air-conditioned bedrooms complete with ensuite bathrooms.",
    "The bedrooms are situated in a two-storey building, which stands adjacent to the single storey pavilion that houses the living and dining areas. Each bedroom is equipped a satellite-channel TV and DVD player, and a safe deposit box, while WiFi Internet is accessible throughout the property.",
  ]);
  const [subheadingText] = useState("Our Accommodation");
  const [headingText] = useState("Accommodation");

  return (
    <div>
      <Navbar/>
      <TemplateImg2 image={Img1} headText={headingText} subText={subheadingText}/>
      <Header subtitle={subtitle} title={title} paragraphs={paragraphs} />
      <Footer/>
    </div>
  );
};

export default Kitchen;
