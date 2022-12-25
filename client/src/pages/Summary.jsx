import React from "react"
import {Icon} from "@iconify/react"
import { Link } from "react-router-dom"
import { useNavigate } from "react-router-dom"

import DiscountStrip from "../components/DiscountStrip"
import MiniNav from "../components/MiniNav"
import Nav from "../components/Nav"
import LabDetails from "../components/summary/LabDetails"
import TestSummary from "../components/summary/TestSummary"
import Footer from "../components/Footer"

export default function Summary() {

  const navigate = useNavigate()

  return (
    <div className="font-Roboto bg-background">
      <MiniNav />
      <Nav />
      <DiscountStrip />
      <div className="mt-6 pb-10 lg:relative lg:before:w-full lg:before:h-1/2 lg:before:bg-primary lg:before:bottom-0 lg:before:absolute lg:mt-16">
        <div className="flex gap-1 lg:ml-12" onClick={() => navigate(-1)}>
          <Icon
            icon="carbon:chevron-left"
            color="black"
            inline={true}
            className="text-3xl sm:text-4xl"
          />
          <h1 className="font-bold text-2xl sm:text-3xl">Booking Summary</h1>
        </div>
        <div className="py-8 lg:flex lg:bg-white lg:mx-12 lg:mt-8 lg:rounded-3xl lg:gap-7 lg:pt-18 md:relative md:z-1">
          <LabDetails />
          <div className="lg:w-full">
            <div className="shadow-summary bg-white m-4 rounded-2xl xs:mx-8 sm:w-3/4 md:w-3/5 sm:mx-auto lg:w-4/5 xl:w-3/4">
              <TestSummary />
              <div className="grid relative before:absolute before:bg-primary before:w-full before:h-[2px] before:top-2 grid-cols-priceSummary gap-y-4 mx-5 py-5 gap-x-4 xs:mt-3 xs:pt-8 lg:mx-12">
                <h1 className="text-lg font-bold lg:text-xl">Charges</h1>
                <div className="grid grid-cols-testPrices col-span-2 gap-y-2 sm:text-lg">
                  <h1>Calcium Test</h1>
                  <h1 className="justify-self-end align-self-center">₹ 300</h1>
                  <h1>CBC - Complete Blood Count</h1>
                  <h1 className="justify-self-end align-self-center">₹ 300</h1>
                  <h1>Complete Routine Urine Analysis</h1>
                  <h1 className="justify-self-end align-self-center">₹ 300</h1>
                </div>
                <h1 className="col-span-2 lg:text-xl text-lg font-bold">
                  Discount Received
                </h1>
                <h1 className="justify-self-end font-medium sm:text-xl">20%</h1>
                <h1 className="col-span-2 font-bold text-xl">Total</h1>
                <h1 className="justify-self-end font-bold text-lg lg:text-xl">
                  ₹ 720
                </h1>
              </div>
              <Link to="/confirmed">
                <div className="flex justify-center pb-7">
                  <button className="text-white bg-secondary px-4 py-2 font-bold text-xl rounded-2xl">
                    Confirm Booking
                  </button>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
