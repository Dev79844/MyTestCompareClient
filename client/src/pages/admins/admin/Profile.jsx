import React from "react"
import {Icon} from "@iconify/react"
import Sidebar from "../../../components/admins/Sidebar"
import TopStrip from "../../../components/admins/TopStrip"

export default function Profile() {
  return (
    <div className="font-Roboto bg-background">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <Sidebar active="profile" />
        <div className="px-5 mt-4">
          <TopStrip />
          {/* Lab Profile Div */}
          <div className="mt-8">
            <h2 className="text-2xl font-medium ml-5">Lab Profile</h2>
            <div className="bg-white rounded-3xl flex px-5 py-4 mt-6">
              {/* Logo Div */}
              <div>
                <img src="images/summary-success/lab.png" />
                <h2 className="text-3xl font-semibold">
                  Anushka Pathology Laboratory
                </h2>
                <p className="font-light">
                  Janta Nagar Ring Rd, Parshwanath Nagar, ONGC Colony,
                  Chandkheda, Ahmedabad, Gujarat 382424
                </p>
              </div>
              {/* Info Div */}
              <div className="w-4/5">
                <div className="flex justify-end">
                  <Icon icon="mdi:pencil-plus" className="text-3xl " />
                </div>
                <div className="mt-5">
                  <div className="flex justify-between">
                    <h2>Dr's Name</h2>
                    <div>
                      <h3>Dr. Murari Thaker ( M.D.)</h3>
                      <h3>Dr. Jasvant Singh ( Pharmisist)</h3>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h2>Information</h2>
                    <p>
                      Our Labs is an aggregator of medical diagnostic services.
                      You can check medical diagnostic test prices for more than
                      2000 tests in 400+ cities of India. We also list
                      diagnostic centers in India with their price, discount,
                      address & contact numbers.
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <h2>Timings</h2>
                    <div>
                      <h2>9 AM to 8 PM</h2>
                      <div>Mon-Fri</div>
                    </div>
                  </div>
                  <div className="flex justify-between">
                    <h2>Ratings</h2>
                    <p>4.5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
