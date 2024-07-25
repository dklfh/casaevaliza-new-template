import React, { useState } from 'react';
import TemplateImg from '../component/TemplateImg';
import Template1 from '../component/Template1';
import Navbar from '../component/navbar/navbar';
import Footer from '../component/footer/footer';
import Img1 from '../assets/image/livingdinning.jpg';

const Kitchen = () => {
  const [backgroundImage] = useState(Img1);
  const [subtitle] = useState("A EXPERIENCE FOR THE SENSE");
  const [title] = useState("Living & Dining Pavilion ");
  const [paragraphs] = useState([
    "TThe expansive Living & Dining Pavilion is characterised by a soaring alang-alang (thatched) roof, cream terrazzo floor, and floor-to-ceiling glass doors that run the length of the building and along one side. These doors offer the options of different environments, and can be folded open to create an open-air, tropical living experience beside the garden and swimming pool. The pavilion is cooled by six powerful ceiling fans and also features the option of air-conditioning.",
    "At one side of the room is a dining table, comfortably seating ten to twelve on funky double seats fashioned from cowhide. The centre of the living pavilion is furnished with two deeply cushioned sofas and an antique coffee table, and at the far side is a hammock-style swinging daybed suspended on chains from the roof.",
    "This elegant room is completed with an ornately carved Javanese daybed, gorgeous fabrics, glass and aluminium candle lanterns, stools and a carved Buddha head in petrified wood and further complimented by a high quality audio system and a good selection of books.",
  ]);
  const [subheadingText] = useState("Luxury Hotel");
  const [headingText] = useState("Living & Dining Pavilion ");

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
