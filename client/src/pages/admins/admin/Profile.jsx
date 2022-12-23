import React from "react"
import {Icon} from "@iconify/react"
import Sidebar from "../../../components/admins/Sidebar"
import TopStrip from "../../../components/admins/TopStrip"

export default function Profile() {
  const images = [1, 2, 3, 4, 5, 6, 7, 8].map((_, index) => (
    <div key={index} className="bg-[#D9D9D9] w-56 h-56"></div>
  ))

  return (
    <div className="font-Roboto bg-background">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <Sidebar active="profile" />
        <div className="px-5 mt-4">
          <TopStrip />
          {/* Lab Profile Div */}
          <div className="mt-8">
            <h2 className="text-2xl font-medium ml-5">Lab Profile</h2>
            <div className="bg-white rounded-3xl flex p-8 mt-6 gap-6">
              {/* Logo Div */}
              <div className="relative after:absolute after:bg-primary after:h-full after:w-[2px] after:top-0 after:right-0">
                <img
                  src="images/summary-success/lab.png"
                  className="mt-3 w-28"
                />
                <h2 className="text-4xl font-semibold mt-2 w-4/5">
                  Anushka Pathology Laboratory
                </h2>
                <p className="font-light mt-2">
                  Janta Nagar Ring Rd, Parshwanath Nagar, ONGC Colony,
                  Chandkheda, Ahmedabad, Gujarat 382424
                </p>
              </div>
              {/* Info Div */}
              <div className="w-4/5">
                <div className="flex justify-end">
                  <Icon icon="mdi:pencil-plus" className="text-3xl " />
                </div>
                <div className="mt-5 space-y-2">
                  <div className="flex gap-12">
                    <h2 className="font-semibold">Dr's Name</h2>
                    <div>
                      <h3 className="font-light">Dr. Murari Thaker ( M.D.)</h3>
                      <h3 className="font-light">
                        Dr. Jasvant Singh ( Pharmisist)
                      </h3>
                    </div>
                  </div>
                  <div className="flex gap-10">
                    <h2 className="font-semibold">Information</h2>
                    <p className="font-light">
                      Our Labs is an aggregator of medical diagnostic services.
                      You can check medical diagnostic test prices for more than
                      2000 tests in 400+ cities of India. We also list
                      diagnostic centers in India with their price, discount,
                      address & contact numbers.
                    </p>
                  </div>
                  <div className="flex gap-16 ">
                    <h2 className="font-semibold">Timings</h2>
                    <div>
                      <h2 className="font-light">9 AM to 8 PM</h2>
                      <div className="font-light">Mon-Fri</div>
                    </div>
                  </div>
                  <div className="flex gap-[65px]">
                    <h2 className="font-semibold">Ratings</h2>
                    <p className="font-light">4.5</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* Image Div */}
          <div className="mt-8">
            <div className="flex items-center gap-3">
              <h2 className="text-2xl font-medium ml-5">Lab Images</h2>
              <Icon icon="mdi:pencil-plus" className="text-3xl " />
            </div>

            <div className="flex gap-5 flex-wrap mt-5">{images}</div>
          </div>
        </div>
      </div>
    </div>
  )
}
