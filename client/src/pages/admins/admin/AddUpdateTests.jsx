import React from "react"

import AdminSidebar from "../../../components/admins/admin/AdminSidebar"
import TopStrip from "../../../components/admins/admin/TopStrip"

export default function AddUpdateTests() {
  return (
    <div className="font-Roboto bg-background">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <AdminSidebar active="addUpdateTests" />
        <div className="px-5 mt-4">
          <TopStrip />
          <div className="mt-5 ml-5 flex justify-between">
            <h2 className="text-4xl font-medium "> Add/Update Tests</h2>
            <button className="bg-primary text-white px-8 text-lg rounded py-[2px]">
              Add Excel
            </button>
          </div>
          <div className="ml-5 mt-8">
            <h2 className="text-2xl font-medium ">
              Important Instructions for Uploading Excel
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
