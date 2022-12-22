import React from "react"
import {useState} from "react"

import Sidebar from "../components/clientDashboard/Sidebar"
import TopStrip from "../components/clientDashboard/TopStrip"
import IndividualViewReport from "../components/clientDashboard/IndividualViewReport"
import Nav from "../components/Nav"
import MiniNav from "../components/MiniNav"
import Footer from "../components/Footer"
import DiscountStrip from "../components/DiscountStrip"
import IndividualViewBooking from "../components/clientDashboard/IndividualViewBooking"

export default function ViewBookings() {
  const [show, setShow] = useState(false)

  return (  
    <div className="bg-background font-Roboto ">
      <div className="lg:grid lg:grid-cols-summary pb-16 xl:grid-cols-sidebarSetGrid">
        <Sidebar show={show} setShow={setShow} active="reports" />

        <div>
          <MiniNav />
          <Nav />
          <DiscountStrip />
          <div className="px-3 pt-7 xs:px-6 sm:px-8 lg:px-8">
            <TopStrip show={show} setShow={setShow} />

            <div className="px-2 mt-5">
              <h1 className="text-2xl font-medium">My Bookings</h1>
            </div>

            {/* This is grid */}
            <div className="mt-5 ">
              <div className="lg:grid lg:grid-cols-3 relative after:absolute after:bg-borderGray after:w-full after:h-[1px] after:bottom-0 after:left-0 pb-2">
                <h1 className="text-2xl font-medium ml-2">Tests Booked</h1>
                <h2 className="hidden col-span-2 lg:block text-2xl font-medium ml-[20%]">
                  Date
                </h2>
              </div>
              <IndividualViewBooking />
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
