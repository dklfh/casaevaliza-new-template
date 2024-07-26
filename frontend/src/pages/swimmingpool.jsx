import React, { useState } from 'react';
import TemplateImg from '../component/TemplateImg';
import Header from '../component/header';
import Navbar from '../component/navbar/navbar';
import Footer from '../component/footer/footer';
import Img1 from '../assets/image/kolamren.jpg';

const Kitchen = () => {
  const [backgroundImage] = useState(Img1);
  const [subtitle] = useState("A EXPERIENCE FOR THE SENSE");
  const [title] = useState("Swimming Pool & Garden");
  const [paragraphs] = useState([
    "The large walled garden is shaded by beautiful mature trees and landscaped with a terraced lawn on two different levels. A 'bale', an open-sided, thatched relaxation pavilion, overlooks the pool while a daybed rests under an ancient holy tree.",
    "The central feature of the garden is a 14-metre swimming pool, with its white Yogya stone surround; it features a dazzling water cascade at one end.",
  ]);
  const [subheadingText] = useState("Luxury Hotel");
  const [headingText] = useState("Swimming Pool & Garden");

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
