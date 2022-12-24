import React from "react"
import Sidebar from "../components/clientDashboard/Sidebar"
import TopStrip from "../components/clientDashboard/TopStrip"
import Nav from "../components/Nav"
import MiniNav from "../components/MiniNav"
import Footer from "../components/Footer"
import DiscountStrip from "../components/DiscountStrip"

export default function ViewProfile() {
  const [show, setShow] = React.useState(false)

  return (
    <div className="font-Roboto bg-background">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <Sidebar show={show} setShow={setShow} active="profile" />

        <div>
          <MiniNav />
          <Nav />
          <DiscountStrip />
          <div className="px-3 pt-7 xs:px-6 sm:px-8 lg:px-8">
            <TopStrip show={show} setShow={setShow} />

            <div className="px-2 mt-5">
              <h1 className="text-2xl md:text-3xl lg:text-4xl font-medium">Your Profile</h1>
            </div>
            <div className="px-2 space-y-6 mt-6">
              <div className="flex gap-5">
                <h1 className="font-medium text-xl">Mobile No:</h1>
                <h1 className="text-lg">+91 9856532124</h1>
              </div>
              <div className="flex gap-14">
                <h1 className="font-medium text-xl">Email:</h1>
                <h1 className="text-lg">youremail123@gmail.com</h1>
              </div>
              <div className="flex gap-7">
                <h1 className="font-medium text-xl">Address:</h1>
                <h1 className="text-lg">
                  lorem ipsum dolor, near lorem ipsim, dolor , india - 123456
                </h1>
              </div>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
