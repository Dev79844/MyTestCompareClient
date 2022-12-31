import React from "react"
import MiniNav from "../components/MiniNav"
import Nav from "../components/Nav"
import DiscountStrip from "../components/DiscountStrip"
import Main from "../components/home/Main"
import LabPartner from "../components/home/LabPartner"
import Concern from "../components/home/Concern"
import Features from "../components/home/Features"
import Testimonial from "../components/home/Testimonial"
import AboutUs from "../components/home/AboutUs"
import Footer from "../components/Footer"

const HomePage = () => {
  return (
    <div className="font-Roboto bg-background">
      <div className="lg:h-screen">
        <MiniNav />
        <Nav />
        <DiscountStrip />
        <Main />
        <LabPartner />
      </div>
      <Concern />
      <Features />
      <Testimonial />
      <AboutUs />
      <Footer />
    </div>
  )
}

export default HomePage
