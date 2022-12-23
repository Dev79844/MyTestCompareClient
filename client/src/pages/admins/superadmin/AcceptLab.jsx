import React from "react"
import SuperAdminSidebar from "../../../components/admins/superadmin/SuperAdminSidebar"
import RequestContainer from "../../../components/admins/superadmin/RequestContainer"
import pendingLabRequests from "../../../data/pendingLabRequests"

export default function AcceptClientBooking() {
  return (
    <div className="font-Roboto bg-background">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <SuperAdminSidebar active="labRequests" />
        <div className="px-5 mt-4">
          <div className="mt-5 ml-5">
            <h2 className="text-4xl font-medium ">Pending Lab Requests</h2>
            <RequestContainer data={pendingLabRequests} type="labRequest" />
          </div>
        </div>
      </div>
    </div>
  )
}
