import React from "react"
import {Icon} from "@iconify/react"

import SuperAdminSidebar from "../../../components/admins/superadmin/SuperAdminSidebar"
import LabPaymentBreakup from "../../../components/admins/superadmin/LabPaymentBreakup"

export default function Payments() {
  return (
    <div className="font-Roboto bg-background">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <SuperAdminSidebar active="labPayments" />
        <div className="px-5 mt-4">
          <div className="mt-5 ml-5">
            <h2 className="text-4xl font-medium ">Pending Payments from Labs</h2>
            <div className="mt-5 flex gap-3 items-center">
              <h2 className="text-2xl font-medium ">For Month: </h2>
              <div className="border-[1px] border-secondary rounded flex gap-2 items-center px-3 py-[2px] cursor-pointer">
                <h2 className="text-lg font-medium">December 2022</h2>
                <Icon icon="mdi:chevron-down" className="text-3xl" />
              </div>
            </div>
            <div className="mt-5 flex gap-3 items-center">
              <h2 className="text-xl font-regular "> Payment Due: </h2>

              <h2 className="text-xl font-medium"> ₹5000</h2>
            </div>

            {/* Payment Grid */}
            <div className="mt-10">
              <h2 className="text-3xl font-medium ">Lab Wise Breakup: </h2>
              <div
                className="grid grid-cols-labPaymentReminder 
                          font-medium px-3 mt-3
                          relative before:absolute before:bg-borderGray before:w-full before:h-[2px] before:top-0 before:left-0
                          after:absolute after:bg-borderGray after:w-full after:h-[1px] after:bottom-0 after:left-0
                          py-4
              "
              >
                <h2 className="ml-2">Lab Name</h2>
                <h2 className="justify-self-center">Discount(10%)</h2>
                <h2 className="justify-self-center">Commission(20%)</h2>
                <h2 className="justify-self-center">Payment Cycle (₹)</h2>
                <h2 className="justify-self-center">Due Payment(₹)</h2>
              </div>
              <LabPaymentBreakup />
              <div className="grid grid-cols-labPaymentReminder pt-2 mt-4 px-3 relative before:absolute before:bg-borderGray before:w-full before:h-[2px] before:top-0 before:left-0 ">
                <h1 className="font-bold col-span-4 text-4xl">Total</h1>
                <h2 className="text-2xl font-medium justify-self-center">
                  ₹8000
                </h2>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
