import React from "react"
import {Icon} from "@iconify/react"

import AdminSidebar from "../../../components/admins/admin/AdminSidebar"
import TopStrip from "../../../components/admins/admin/TopStrip"

import IndividualTestBreakup from "../../../components/admins/admin/IndividualTestBreakup"

export default function PaymentReminder() {
  return (
    <div className="font-Roboto bg-background">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <AdminSidebar active="paymentReminders" />
        <div className="px-5 mt-4">
          <TopStrip />
          <div className="mt-5 ml-5">
            <h2 className="text-4xl font-medium ">Payment Reminder</h2>
            <div className="mt-5 flex gap-3 items-center">
              <h2 className="text-2xl font-medium ">For Month: </h2>
              <div className="border-[1px] border-secondary rounded flex gap-2 items-center px-3 py-[2px] cursor-pointer">
                <h2 className="text-lg font-medium">December 2022</h2>
                <Icon icon="mdi:chevron-down" className="text-3xl" />
              </div>
            </div>
            <div className="mt-5 flex gap-3 items-center">
              <h2 className="text-xl font-regular "> Payment Due: </h2>
              <div className="flex gap-5 items-center px-3 py-[2px] ">
                <h2 className="text-xl font-medium"> ₹192</h2>
                <button className="bg-primary text-xl text-white font-medium px-3 py-[2px] w-24 rounded">
                  Pay
                </button>
              </div>
            </div>

            {/* Payment Grid */}
            <div className="mt-10">
              <h2 className="text-3xl font-medium ">Test Wise Breakup: </h2>
              <div
                className="grid grid-cols-labPaymentReminder 
                          font-medium px-3 mt-3
                          relative before:absolute before:bg-borderGray before:w-full before:h-[2px] before:top-0 before:left-0
                          after:absolute after:bg-borderGray after:w-full after:h-[1px] after:bottom-0 after:left-0
                          py-4
              "
              >
                <h2 className="ml-2">Test Name</h2>
                <h2 className="justify-self-center">Price (₹)</h2>
                <h2 className="justify-self-center">Discount(10%)</h2>
                <h2 className="justify-self-center">Commission(20%)</h2>
                <h2 className="justify-self-center">Amount Payable(₹)</h2>
              </div>
              <IndividualTestBreakup />
              <div className="grid grid-cols-labPaymentReminder pt-2 mt-4 px-3 relative before:absolute before:bg-borderGray before:w-full before:h-[2px] before:top-0 before:left-0 ">
                <h1 className="font-bold col-span-4 text-4xl">Total</h1>
                <h2 className="text-2xl font-medium justify-self-center">
                  ₹192
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
