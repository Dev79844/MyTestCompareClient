import React from "react"
import {Icon} from "@iconify/react"

export default function Main() {
  const credebility = [
    {
      icon: "mingcute:safety-certificate-fill",
      h3: "Certified Labs",
    },
    {
      icon: "material-symbols:more-time",
      h3: "OnTime Reports",
    },
    {
      icon: "material-symbols:star",
      h3: "Rated 4.9/5",
      h4: "Customer love us!",
    },
  ]

  const credebilityArr = credebility.map((item) => {
    return (
      <div className="flex items-center gap-2 mb-5">
        <Icon icon={item.icon} color="#000000" className="text-4xl" />
        <div className="ml-3">
          <h3 className="font-medium text-2xl">{item.h3}</h3>
          {item.h4 && <h3 className="font-medium text-2xl">{item.h4}</h3>}
        </div>
      </div>
    )
  })

  return (
    <div className="bg-[#FCAB41] pt-8">
      <h1 className="text-white font-bold text-4xl w-[70%]  m-auto text-center ">
        Book Any Test at Best Price
      </h1>
      <div className="bg-primary px-4 my-6 mx-6 py-4 rounded-md">
        {/* Location input */}
        <div className="flex bg-background py-2 px-5 items-center rounded-md my-3">
          <Icon
            icon="material-symbols:my-location-rounded"
            color="#22242e"
            className="opacity-50 text-2xl"
          />
          <input
            type="text"
            className="pl-3 w-full text-lg bg-transparent"
            placeholder="Select Location"
          />
        </div>

        {/* Test input */}
        <div className="flex bg-background py-2 px-5 items-center rounded-md my-3">
          <Icon
            icon="mdi:test-tube"
            color="#22242e"
            className="opacity-50 text-2xl"
          />
          <input
            type="text"
            className="pl-3 w-full text-lg bg-transparent"
            placeholder="Select Tests"
          />
        </div>

        {/* Book Now */}
        <div className="flex justify-center">
          <button className="bg-secondary text-white font-bold py-1 px-4 rounded-md w-1/2 text-xl">
            Book Now
          </button>
        </div>
      </div>

      {/* Credibility */}
      <div className="bg-primary mt-12">
        <div className="w-fit pt-6 pb-1 ml-auto mr-auto">{credebilityArr}</div>
      </div>
    </div>
  )
}
