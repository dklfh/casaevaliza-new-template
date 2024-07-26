import React, { useState } from 'react';
import TemplateImg from '../component/TemplateImg';
import Header from '../component/header';
import Navbar from '../component/navbar/navbar';
import Footer from '../component/footer/footer';
import MasterImg1 from '../assets/image/mastersu.jpg';

const Kitchen = () => {
  const [backgroundImage] = useState(MasterImg1);
  const [subtitle] = useState("A EXPERIENCE FOR THE SENSE");
  const [title] = useState("Master Suite");
  const [paragraphs] = useState([
    "The Master Suite encompasses the ground floor of the two-storey building. The suite is dominated by a king-size bed with a yielding padded headboard, while the wall behind displays a carved panel from a traditional house in Toraja, Sulawesi. In front of the bed is a pair of large wooden statues, depicting a Javanese wedding couple.",
    "Generously-sized, this bedroom also incorporates a sitting area furnished with a daybed and an antique desk. A 45” satellite-channel TV and DVD player rests on an antique ‘gerobok’ rice chest, juxtaposed with a window to one side that overlooks a small pebbled garden.",
    "Accessed via dramatic sliding doors, is the grand, ensuite, air-conditioned bathroom. It features an avocado-green terrazzo floor, a huge central bathtub, and two lazy chairs. A double vanity unit is fashioned in the same green terrazzo and presents two well-lit mirrors and twin washbasins. There is also a walk-in shower and a toilet hidden within an alcove. Floor-to-ceiling mirrored doors slide open to reveal a dressing room, fitted with a wall of white wardrobes.",
    "Sliding glass doors from the bedroom open onto a covered veranda that runs the length of the building and looks out over the garden and is complimented with a wooden Kartini sofa and a brass gong."
  ]);
  const [subheadingText] = useState("Luxury Hotel");
  const [headingText] = useState("Master Suite");

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
