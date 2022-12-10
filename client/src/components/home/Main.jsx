import React from "react"
import {Icon} from "@iconify/react"
import "../../style.css"

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
      <div className="flex items-center gap-4 mb-5 sm:gap-2 lg:mb-0">
        <Icon icon={item.icon} color="#000000" className="text-4xl" />
        <div className="text-2xl sm:text-xl lg:text-2xl">
          <h3 className="font-medium ">{item.h3}</h3>
          {item.h4 && <h3 className="font-medium">{item.h4}</h3>}
        </div>
      </div>
    )
  })

  return (
    <div className=" mainBg  pt-8 ">
      <h1 className="text-white font-bold text-4xl w-[70%]  m-auto text-center lg:text-6xl lg:w-full ">
        Book Any Test at Best Price
      </h1>
      <div className="bg-primary p-4 my-6 rounded-md w-[90%] mx-auto xs:w-4/5 sm:w-3/5 sm:px-8 lg:w-[38%] 2xl:w-[30%]">
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
          <button className="bg-secondary text-white font-bold flex justify-center items-center py-1 px-4 rounded-md w-3/5 lg:w-1/2 text-xl  group">
            Book Now
            <Icon
              icon="material-symbols:arrow-right-alt"
              color="white"
              className="text-2xl ml-3 group-hover:translate-x-1 transition-all duration-300 ease-in-out"
            />
          </button>
        </div>
      </div>

      {/* Credibility */}
      <div className="bg-primary mt-12 lg:mt-8">
        <div className="w-fit pt-6 pb-1 mx-auto sm:flex sm:gap-7 lg:justify-evenly lg:w-full lg:pt-2">{credebilityArr}</div>
      </div>
    </div>
  )
}
