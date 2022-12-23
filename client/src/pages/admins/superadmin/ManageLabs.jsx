import {Icon} from "@iconify/react"
import React from "react"
import SuperAdminSidebar from "../../../components/admins/superadmin/SuperAdminSidebar"
import IndividualLab from "../../../components/admins/superadmin/IndividualLab"

export default function ManageLabs() {
  return (
    <div className="font-Roboto bg-background">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <SuperAdminSidebar active="manageLabs" />
        <div className="px-5 mt-4">
          <div className="mt-5 ml-5">
            <h2 className="text-4xl font-medium ml-3">All Labs</h2>

            <div className="mt-5">
              <div
                className="font-medium text-lg grid grid-cols-manageLabs relative after:absolute after:bg-borderGray after:w-full after:h-[1px] after:bottom-0 after:left-0
                          py-3"
              >
                <h2 className="ml-3">Lab Name</h2>
                <h2 className="justify-self-center">Discount (%)</h2>
                <h2 className="justify-self-center">Comission (%)</h2>
                <h2 className="justify-self-center">Payment Cycle</h2>
              </div>
              <IndividualLab />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
