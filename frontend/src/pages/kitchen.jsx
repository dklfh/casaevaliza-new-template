import React, { useState } from 'react';
import TemplateImg from '../component/TemplateImg';
import Template1 from '../component/Template1';
import Navbar from '../component/navbar/navbar';
import Footer from '../component/footer/footer';
import KitchenImg1 from '../assets/image/dapurvil.jpg';
import KitchenImg2 from '../assets/image/france.jpg'; // Example additional image

const Kitchen = () => {
  const [backgroundImage] = useState(KitchenImg1);
  const [subtitle] = useState("A EXPERIENCE FOR THE SENSE");
  const [title] = useState("Kitchen");
  const [paragraphs] = useState([
    "The fully equipped, modern kitchen is strategically positioned between the Living & Dining Pavilion and the staff service area.",
    "Presenting fresh white walls, grey marble work surfaces, a central island bench and immaculate stainless steel appliances, this is both a workspace and a space of inspiration."
  ]);
  const [subheadingText] = useState("Luxury Hotel");
  const [headingText] = useState("Kitchen");

  return (
    <div>
      <Navbar/>
      <TemplateImg backgroundImage={backgroundImage} subheadingText={subheadingText} headingText={headingText} />
      <Template1 subtitle={subtitle} title={title} paragraphs={paragraphs} />
      <Footer/>
    </div>
  );
};

export default Kitchen;
