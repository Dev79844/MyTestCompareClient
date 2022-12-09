import React from "react"
import "../../style.css"

export default function LabPartner() {
  const partners = [
    {
      src: 1,
    },
    {
      src: 2,
    },
    {
      src: 3,
    },
    {
      src: 1,
    },
    {
      src: 2,
    },
    {
      src: 3,
    },
    {
      src: 1,
    },
  ]

  const partnerArr = partners.map((partner) => {
    return (
      <img
        src={`images/home/labpartner/${partner.src}.png`}
        alt="1mg"
        className="loop-animation"
      />
    )
  })

  return (
    <div className="text-center font-medium py-6 bg-white">
      <h1 className="text-3xl ">Our Lab Partner</h1>
      <h3 className="text-secondary text-[18px] mt-2"> 80+ Lab partnered </h3>
      <div className="flex gap-2 justify-center mt-3 overflow-hidden ">
        {partnerArr}
      </div>
    </div>
  )
}
