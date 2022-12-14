import React from "react"
import "../../style.css"

export default function LabPartner() {
  const partners = [
    {
      id:0,
      src: 1,
    },
    {
      id:1,
      src: 2,
    },
    {
      id:2,
      src: 3,
    },
    {
      id:3,
      src: 4,
    },
    {
      id:4,
      src: 2,
    },
    {
      id:5,
      src: 3,
    },
    {
      id:6,
      src: 4,
    },
    {
      id:7,
      src: 1,
    },
    {
      id:8,
      src: 3,
    },
    {
      id:9,
      src: 4,
    },
    {
      id:10,
      src: 2,
    },
    {
      id:11,
      src: 4,
    },
    {
      id:12,
      src: 3,
    },
    {
      id:13,
      src: 2,
    },
  ]

  const partnerArr = partners.map((partner) => {
    return (
      <img
        key={partner.id}
        src={`images/home/labpartner/${partner.src}.jpeg`}
        alt="1mg"
        className="loop-animation w-[700px] h-14"
      />
    )
  })

  return (
    <div className="text-center font-medium py-6 bg-white md:flex md:items-center md:justify-center md:gap-3 lg:px-10 md:px-2">
      <div className="lg:w-[20%] md:w-2/5">
        <h1 className="text-3xl md:text-2xl ">Our Lab Partners</h1>
        <h3 className="text-secondary text-[18px] mt-2 lg:mt-0">
          80+ Lab partnered
        </h3>
      </div>
      <div className="flex gap-2  mt-3 overflow-hidden lg:ml-3 lg:gap-5 lg:w-full">
        {partnerArr}
      </div>
    </div>
  )
}
