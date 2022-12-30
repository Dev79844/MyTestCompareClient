import React from "react"
import {Icon} from "@iconify/react"

import DiscountStrip from "../components/DiscountStrip"
import MiniNav from "../components/MiniNav"
import Nav from "../components/Nav"
import LabDetails from "../components/summary/LabDetails"
import TestSummary from "../components/summary/TestSummary"
import Footer from "../components/Footer"
import {Link, useLocation} from "react-router-dom"

export default function Success() {
  const location = useLocation()
  const data = location.state.data

  /**
   * Structure of data
    data ={
  "patient": {
    "name": "",
    "address": "",
    "age": "",
    "phone": ""
  },
  "appointmentAt": "31 Dec 2022 , 12:00 PM ",
  "tests": [
    "CBC - Complete Blood Count"
  ],
  "lab": {
    "labName": "Preet's Lab",
    "labId": "63ab45aead8eae227ce2cf74"
  }
}
   */

  return (
    <div className="font-Roboto bg-background">
      <MiniNav />
      <Nav />
      <DiscountStrip />

      <div className="mt-6 pb-10 lg:relative lg:before:w-full lg:before:h-1/2 lg:before:bg-primary lg:before:bottom-0 lg:before:absolute lg:mt-14">
        <div
          className="flex justify-between 
        mx-4"
        >
          <h1 className="font-bold text-xl sm:text-3xl">Booking Status</h1>
          <div className="flex items-center">
            <Link to="/trackOrder">
              <h1 className="font-medium text-lg lg:text-2xl">
                Track your order
              </h1>
            </Link>
            <Icon
              icon="carbon:chevron-right"
              color="black"
              inline={true}
              className="text-2xl"
            />
          </div>
        </div>

        <div className="py-8 lg:flex lg:bg-white lg:mx-12 lg:mt-10 lg:rounded-3xl lg:gap-7 lg:pt-18 md:relative md:z-1 ">
          <LabDetails lab={data.lab} />
          <div className=" m-4 rounded-2xl xs:mx-8 sm:w-3/4 md:w-3/5 sm:mx-auto lg:w-4/5 xl:w-3/4 lg:pr-7 xl:px-10">
            <TestSummary data={data} />
            <div className="flex items-center gap-4 mt-4 justify-center xl:gap-6">
              <img
                src="images/summary-success/booked.png"
                alt="booked icon"
                className="w-[20%] lg:w-[15%] xl:w-[10%]"
              />
              <h1 className="font-[900] text-2xl lg:text-3xl  xl:text-4xl">
                Successfully Booked!
              </h1>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
