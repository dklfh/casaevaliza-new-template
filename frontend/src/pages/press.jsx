import React, { useState } from 'react';
import Navbar from '../component/navbar/navbar'
import Footer from '../component/footer/footer'
import Templateimg from '../component/TemplateImg'
import Presscard from '../component/presscard'
import img from '../assets/image/press.jpg'

function Press() {
  const [backgroundImage] = useState(img);
  const [subheadingText] = useState("Luxury Hotel");
  const [headingText] = useState("Press");
  return (
    <div>
      <Navbar/>
      <Templateimg backgroundImage={backgroundImage} subheadingText={subheadingText} headingText={headingText}/>
      <Presscard/>
      <Footer/>
    </div>
  )
}

export default Press
