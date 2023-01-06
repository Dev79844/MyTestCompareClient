import React from "react"
// import "../style.css"

import MiniNav from "../components/MiniNav"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import PartnerSignUp from "../components/becomePartner/PartnerSignUp"

export default function BecomePartner() {
  return (
    <div className="bg-background font-Roboto">
      <MiniNav />
      <Nav />
      <PartnerSignUp />
      <Footer />
    </div>
  )
}
