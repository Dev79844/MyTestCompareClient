import React from "react"
import SuperAdminSidebar from "../../../components/admins/superadmin/SuperAdminSidebar"
import PendingClientRequest from "../../../components/admins/superadmin/PendingClientRequest"

export default function AcceptClientBooking() {

  

  return (
    <div className="font-Roboto bg-background">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <SuperAdminSidebar active="acceptBookings" />
        <div className="px-5 mt-4">
          <div className="mt-5 ml-5">
            <h2 className="text-4xl font-medium ">Pending Client Requests</h2>
            <PendingClientRequest />
          </div>
        </div>
      </div>
    </div>
  )
}
