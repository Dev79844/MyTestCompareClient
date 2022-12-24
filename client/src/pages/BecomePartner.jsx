import {Icon} from "@iconify/react"
import React from "react"
import "../style.css"
import {useNavigate} from "react-router-dom"

import MiniNav from "../components/MiniNav"
import Nav from "../components/Nav"
import Footer from "../components/Footer"

export default function BecomePartner() {

  const navigate = useNavigate()

  return (
    <div className="bg-background font-Roboto">
      <MiniNav />
      <Nav />
      <div className="h-screen becomePartnerBg  flex justify-center items-center py-6">
        <div className="bg-primary px-4 py-4 rounded-2xl w-full mx-8 xs:w-auto xs:px-12 lg:px-24 h-fit lg:py-8">
          <h1 className="text-2xl text-center relative after:absolute after:bg-white after:w-full after:h-[1px] after:bottom-0 pb-1 after:left-0 text-white font-bold md:text-3xl">
            Become Partner
          </h1>

          <div className="space-y-4 mt-4 flex flex-col items-center">
            <div>
              <input
                type="text"
                placeholder="Laboratory Name"
                className="bg-background px-3 py-1 lg:py-2 text-lg lg:px-5 rounded"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Address"
                className="bg-background px-3 py-1 text-lg lg:py-2 lg:px-5 rounded"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="State"
                className="bg-background px-3 py-1 text-lg lg:py-2 lg:px-5 rounded"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="City"
                className="bg-background px-3 py-1 text-lg lg:py-2 lg:px-5 rounded"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Zip Code"
                className="bg-background px-3 py-1 text-lg lg:py-2 lg:px-5 rounded"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Phone/Email"
                className="bg-background px-3 py-1 text-lg lg:py-2 lg:px-5 rounded"
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="License Number"
                className="bg-background px-3 py-1 text-lg lg:py-2 lg:px-5 rounded"
              />
            </div>
          </div>
          <div className="mt-4 flex flex-col items-center space-y-2">
            <div className="flex gap-2 items-center">
              <Icon
                icon={"material-symbols:upload-rounded"}
                color={"black"}
                className="text-3xl"
              />
              <button className="text-xl w-[205px] text-white border-[1px] font-bold border-black px-4 py-[2px] rounded">
                Upload Logo
              </button>
            </div>
            <div className="flex gap-2 items-center">
              <Icon
                icon={"material-symbols:upload-rounded"}
                color={"black"}
                className="text-3xl"
              />
              <button className="text-xl text-white border-[1px] font-bold border-black px-4 py-[2px] rounded">
                Upload Lab Images
              </button>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-secondary text-white font-bold text-xl px-8 rounded py-1 lg:px-12" onClick={() => navigate("/adminprofile")}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
