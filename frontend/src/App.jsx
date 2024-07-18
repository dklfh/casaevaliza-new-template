import React from "react"
import { BrowserRouter as Router,Routes,Route } from "react-router-dom"
import Home from "./pages/home"
import Restaurant from "./component/Restaurant"
import About1 from "./component/About1"
import OtherService from "./component/OtherService"
import Home1 from "./component/Home1"
import Gallery1 from "./component/Gallery1"
import Spa1 from "./component/Spa1"

function App() {
  return (
    <>
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>}></Route>
          <Route path='/res' element = {<Restaurant/>}></Route>
          <Route path='/about1' element = {<About1/>}></Route>
          <Route path='/otherservice' element = {<OtherService/>}></Route>
          <Route path='/home' element = {<Home1/>}></Route>
          <Route path='/gallery1' element = {<Gallery1/>}></Route>
          <Route path='/spa1' element = {<Spa1/>}></Route>
        </Routes>
      </Router>
    </>
  )
}

export default App
