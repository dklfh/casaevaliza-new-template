import React, { useState } from 'react';
import TemplateImg from '../component/TemplateImg';
import Templateservices from '../component/Templateservices'; // Corrected the import name
import Navbar from '../component/navbar/navbar';
import Footer from '../component/footer/footer';
import Img1 from '../assets/image/kolamren.jpg';

const Services = () => {
  const [backgroundImage] = useState(Img1);
  const [subtitle] = useState("A EXPERIENCE FOR THE SENSE");
  const [content] = useState([
    {
      title: "Kitchen",
      paragraphs: [
        "The fully equipped, modern kitchen is strategically positioned between the Living & Dining Pavilion and the staff service area.",
        "Presenting fresh white walls, grey marble work surfaces, a central island bench and immaculate stainless steel appliances, this is both a workspace and a space of inspiration."
      ]
    }
  ]);
  const [staf] = useState([
    {
      jabatan: "Chef",
      paragraphs: [
        "Our chef has years of experience in fine dining   ssafsadsfsfsfddesafdsaaf.",
      ]
    },
    {
      jabatan: "Sous Chef",
      paragraphs: [
        "Assisting the chef, our sous chef ensures every dish is perfect.",
      ]
    }
  ]);

  const [subheadingText] = useState("Luxury Hotel");
  const [headingText] = useState("Swimming Pool & Garden");

  return (
    <div>
      <Navbar />
      <TemplateImg backgroundImage={backgroundImage} subheadingText={subheadingText} headingText={headingText} />
      <Templateservices subtitle={subtitle} content={content} staf={staf} />
      <Footer />
    </div>
  );
};

export default Services;
