import React from "react"
import Sidebar from "../components/clientDashboard/Sidebar"
import TopStrip from "../components/clientDashboard/TopStrip"
import Nav from "../components/Nav"
import MiniNav from "../components/MiniNav"
import Footer from "../components/Footer"
import DiscountStrip from "../components/DiscountStrip"
import OrderTracking from "../components/clientDashboard/OrderTracking"

export default function TrackOrder() {
  const [show, setShow] = React.useState(false)

  return (
    <div className="font-Roboto bg-background">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <Sidebar show={show} setShow={setShow} active="trackOrder" />

        <div>
          <MiniNav />
          <Nav />
          <DiscountStrip />
          <div className="px-3 pt-7 xs:px-6 sm:px-8 lg:px-8 pb-20">
            <TopStrip show={show} setShow={setShow} />

            <div className="px-2 mt-5">
              <h1 className="text-3xl lg:text-4xl font-medium">
                Track your Order
              </h1>
            </div>
            <OrderTracking />

            <div className="mt-10">
              <h2 className=" text-2xl lg:text-3xl font-medium">
                Assigned Phlebotomist
              </h2>

              <div className="mt-4 space-y-3">
                <div className="flex gap-3 items-center text-2xl">
                  <h2 className="font-medium w-[14%]">Name: </h2>
                  <h2> Lorem Ipsum</h2>
                </div>
                <div className="flex gap-3 items-center text-2xl">
                  <h2 className="font-medium  w-[14%]">Mobile: </h2>
                  <h2> +91 8980XXXXXX</h2>
                </div>
                <div className="flex gap-3 items-center text-2xl">
                  <h2 className="font-medium w-[14%]">Arriving On: </h2>
                  <h2> 4 Dec 2022</h2>
                </div>
                <div className="flex gap-3 items-center text-2xl">
                  <h2 className="font-medium w-[14%]">Arriving at: </h2>
                  <h2> 9:00 AM </h2>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
