import React from "react"
import {Icon} from "@iconify/react"

export default function Features() {
  const features = [
    {
      key: 0,
      icon: "arcticons:bestprice",
      text: "Lowest Price Guaranteed",
    },
    {
      key: 1,
      icon: "uil:hospital",
      text: "Choose From Different Labs",
    },
    {
      key: 2,
      icon: "ic:baseline-access-time",
      text: "On Time Reports",
    },
    {
      key: 3,
      icon: "mdi:hand-tap",
      text: "Hassle Free & Quick Booking",
    },
    {
      key: 4,
      icon: "mdi:target-arrow",
      text: "Accurate Reports",
    },
    {
      key: 5,
      icon: "ion:ribbon",
      text: "Certified Labs",
    },
    {
      key: 6,
      icon: "ri:customer-service-2-fill",
      text: "Customer Support",
    },
    {
      key: 7,
      icon: "mdi:tick-decagram",
      text: "Assured Quality or Money Back",
    },
    {
      key: 8,
      icon: "ri:spam-2-line",
      text: "Spam Free",
    },
    ]
    
    const featureArr = features.map((feature) => { 
        return (
          <div key={feature.key} className="bg-secondary-mid w-36  flex flex-col items-center p-2 rounded-2xl font-medium justify-center">
            <Icon
              icon={feature.icon}
              color="white"
              className="text-6xl"
            />
                <h3 className="text-center text-lg mt-1">{ feature.text}</h3>
          </div>
        )
    })

  return (
    <div className="bg-primary py-12 text-white">
      <h1 className="font-bold text-3xl text-center">Why My Test Labs ?</h1>

      <div className="flex px-3 gap-6 mt-10 justify-center flex-wrap md:w-4/5 md:mx-auto lg:w-3/5 lg:mb-8">
        {featureArr}
      </div>
    </div>
  )
}
