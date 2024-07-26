import React, { useState } from 'react';
import Navbar from '../component/navbar/navbar'
import Footer from '../component/footer/footer'
import img from '../assets/image/imgfrance.jpg'
import Templateimg from '../component/TemplateImg'
import Header from '../component/header'

function France() {
  const [backgroundImage] = useState(img);
  const [subheadingText] = useState("TRANSLATED LANGUAGE");
  const [headingText] = useState("FRANCE");

  const subtitle = "L'HÔTEL DE LUXE";
  const title = "Casa Evaliza";
  const paragraphs = ["Casa Evaliza est une spacieuse villa située à 250 mètres de la plage faisant face aux hôtels et restaurants de luxe du quartier de Seminyak/Oberoi. L'accès se fait par une allée privée menant également aux suites de l'hôtel Legian. Evaliza a été totalement redécorée en 2009 et elle est une des villas pris ée de la région avec son style colonial mélangeant harmonieusement le traditionnel local et le contemporain.",
      "La taille du jardin permet d'offrir une belle pelouse entourant une piscine de 14 mètres. Un pavillon de détente permet de se relaxer en profitant de cet environnement dépaysant et peut également servir de lieu de cérémonie pour un mariage.",
  ];

  return (
    <div>
      <Navbar/>
      <Templateimg backgroundImage={backgroundImage} subheadingText={subheadingText} headingText={headingText} />
      <Header subtitle={subtitle} title={title} paragraphs={paragraphs} />
      <Footer/>
    </div>
  )
}

export default France
