import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/home"
import Restaurant from "./component/Restaurant"
import About1 from "./component/About1"
import OtherService from "./component/OtherService"
import Home1 from "./component/Home1"
import Gallery1 from "./component/Gallery1"
import Spa1 from "./component/Spa1"
import EnjoyaLuxuryExperience from "./component/EnjoyaLuxuryExperience"
import WhatClientSay from "./component/WhatClientSay"
import Ourroompres from "./component/Ourroompres"
import Hotelfacilities from "./component/Hotelfacilities"
import About from "./pages/about"
import Acco from "./pages/acco"
import Masterroom from "./pages/masterroom"
import Guestbedroom from "./pages/guestbedroom"
import Contactus from "./pages/contactus"
import Facilities from "./pages/facilities"
import Foodbeverages from "./pages/foodbeverages"
import France from "./pages/france"
import Gallery from "./pages/gallery"
import Kitchen from "./pages/kitchen"
import Livingdining from "./pages/livingdining"
import Mastersuite from "./pages/mastersuite"
import Privategym from "./pages/privategym"
import Services from "./pages/services"
import Spaservices from "./pages/spaservices"
import Swimmingpool from "./pages/swimmingpool"
import Mediaroom from "./pages/mediaroom"
import Location from "./pages/location"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/about' element = {<About/>}></Route>
          <Route path='/acco' element = {<Acco/>}></Route>
          <Route path='/master' element = {<Masterroom/>}></Route>
          <Route path='/guest' element = {<Guestbedroom/>}></Route>
          <Route path='/contact' element = {<Contactus/>}></Route>
          <Route path='/facilities' element = {<Facilities/>}></Route>
          <Route path='/foodbeverages' element = {<Foodbeverages/>}></Route>
          <Route path='/france' element = {<France/>}></Route>
          <Route path='/gallery' element = {<Gallery/>}></Route>
          <Route path='/kitchen' element = {<Kitchen/>}></Route>
          <Route path='/living' element = {<Livingdining/>}></Route>
          <Route path='/location' element = {<Location/>}></Route>
          <Route path='/mastersuite' element = {<Mastersuite/>}></Route>
          <Route path='/mediaroom' element = {<Mediaroom/>}></Route>
          <Route path='/privategym' element = {<Privategym/>}></Route>
          <Route path='/services' element = {<Services/>}></Route>
          <Route path='/spaservices' element = {<Spaservices/>}></Route>
          <Route path='/swimmingpool' element = {<Swimmingpool/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
