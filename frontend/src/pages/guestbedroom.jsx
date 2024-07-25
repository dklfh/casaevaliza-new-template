import React, { useState } from 'react';
import TemplateImg from '../component/TemplateImg';
import Template1 from '../component/Template1';
import Navbar from '../component/navbar/navbar';
import Footer from '../component/footer/footer';
import GuestImg1 from '../assets/image/guestroomvil.jpg';

const Kitchen = () => {
  const [backgroundImage] = useState(GuestImg1);
  const [subtitle] = useState("A EXPERIENCE FOR THE SENSE");
  const [title] = useState("Guest Bedroom");
  const [paragraphs] = useState([
    "The three air-conditioned guest bedrooms are located on the upper floor, accessed by a timber-clad staircase. Two of the rooms are bordered by a delightful covered balcony with a timber floor and elevated views of the garden. The balcony runs the length of the building and is furnished with a sofa, rattan chairs and a glass-topped table.",
    "The 'Poster Room' presents a fresh green and white colonial theme, with a romantic, king-size four poster bed, framed botanical prints on the walls and two white wicker planter chairs.",
    "The Kids' Room has a bunk bed where up to 5 kids can easily sleep. Thanks to an extension on a gorgeous featherbed, the room can be converted into a king size bedroom suitable for adult guests and couples.",
    "On the south side of the villa is the slightly smaller Zen Room, furnished with a queen size bed and its own ensuite bathroom with shower.",
    "All of these bedrooms are equipped with 30 flat screen TVs and DVD players. Two of the ensuite bathrooms are fitted with bathtubs, and all three have walk-in rain showers.",
  ]);
  const [subheadingText] = useState("Luxury Hotel");
  const [headingText] = useState("Guest Bedroom");

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
