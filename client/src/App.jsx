import React from "react"

import MiniNav from "./components/MiniNav"
import Nav from "./components/Nav"
import DiscountStrip from "./components/home/DiscountStrip"
import Main from "./components/home/Main"
import LabPartner from "./components/home/LabPartner"
import Concern from "./components/home/Concern"
import Features from "./components/home/Features"
import Testimonial from "./components/home/Testimonial"
import Footer from "./components/Footer"
import AboutUs from "./components/home/AboutUs"

function App() {
  return (
    <div className="font-Roboto bg-background">
      <MiniNav />
      <Nav />
      <DiscountStrip />
      <Main />
      <LabPartner />
      <Concern />
      <Features />
      <Testimonial/>
      <AboutUs/>
      <Footer/>
    </div>
  )
}

export default App
