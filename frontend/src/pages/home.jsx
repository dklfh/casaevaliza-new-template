import React from 'react'
import Navbar from '../component/navbar/navbar'
import OtherService from '../component/OtherService'
import WhatClientSay from '../component/WhatClientSay'
import Home1 from '../component/Home1'
import Footer from '../component/footer/footer'
import About1 from '../component/About1'

function Home() {
  return (
    <div>
      <Navbar/>
      <Home1/>
      <About1/>
      <OtherService/>
      <WhatClientSay/>
      <Footer/>
    </div>
  )
}

export default Home
