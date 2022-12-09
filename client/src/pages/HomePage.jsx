import React from 'react'
import MiniNav from '../components/home/MiniNav'
import Nav from '../components/home/Nav'
import DiscountStrip from '../components/home/DiscountStrip'
import Main from '../components/home/Main'
import LabPartner from '../components/home/LabPartner'
import Concern from '../components/home/Concern'
import Features from '../components/home/Features'

const HomePage = () => {
  return (
    <div className="font-Roboto bg-background">
      <MiniNav />
      <Nav />
      <DiscountStrip />
      <Main />
      <LabPartner />
      <Concern />
      <Features />
    </div>
  )
}

export default HomePage