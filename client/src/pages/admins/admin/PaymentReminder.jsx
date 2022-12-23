import React from "react"

import Sidebar from "../../../components/admins/Sidebar"
import TopStrip from "../../../components/admins/TopStrip"

export default function PaymentReminder() {
  return (
    <div className="font-Roboto bg-background">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <Sidebar active="paymentReminders" />
        <div className="px-5 mt-4">
          <TopStrip />
          <div className="mt-5 ml-5">
            <h1>Content</h1>
          </div>
        </div>
      </div>
    </div>
  )
}
