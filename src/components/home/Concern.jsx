import React from "react"
import "../../style.css"

export default function Concern() {
  const concerns = [
    {
      key: 0,
      src: "healthcheckup",
      background: "bg-[#E8F3F9]",
      text: "Health Checkups",
      overlay: true,
      widthFull: false,
    },
    {
      key: 1,
      src: "vitamins",
      background: "bg-[#EFF0EB]",
      text: "Vitamins",
      overlay: true,
      widthFull: false,
    },
    {
      key: 2,
      src: "womencare",
      background: false,
      text: "Women Care",
      overlay: false,
      widthFull: true,
    },
    {
      key: 3,
      src: "pregnancy",
      background: "bg-[#FF1E34]",
      text: "Pregnancy",
      overlay: false,
      widthFull: false,
    },
    {
      key: 4,
      src: "bonehealth",
      background: false,
      text: "Bone Health",
      overlay: true,
      widthFull: true,
    },
    {
      key: 5,
      src: "fever",
      background: false,
      text: "Fever",
      overlay: true,
      widthFull: true,
    },
    {
      key: 6,
      src: "diabetes",
      background: "bg-[#151618]",
      text: "Diabetes",
      overlay: false,
      widthFull: false,
    },
    {
      key: 7,
      src: "sexual",
      background: "bg-[#F3F7F8]",
      text: "Sexual Wellness",
      overlay: true,
      widthFull: false,
    },
    {
      key: 8,
      src: "hormones",
      background: false,
      text: "Horomone",
      overlay: true,
      widthFull: true,
    },
  ]

  const concernArr = concerns.map((concern) => {
    return (
      <div
        key={concern.key}
        className={`${
          concern.background ? `${concern.background}` : ""
        } flex justify-end cursor-pointer w-[320px] rounded-2xl  relative ${
          concern.overlay ? "img-overlay" : ""
        } `}
      >
        <img
          key={concern.key}
          src={`images/home/concerns/${concern.src}.png`}
          className={`h-[180px] ${concern.widthFull ? "w-full" : ""} `}
        />
        <h3 className="font-bold text-white absolute text-2xl bottom-3 left-5 z-10">
          {concern.text}
        </h3>
      </div>
    )
  })

  return (
    <div className="my-14 xl:mb-16">
      <h1 className="font-medium text-3xl text-center">Tests by Concerns</h1>
      <div className="flex justify-center mt-7 flex-wrap gap-7 xl:grid xl:grid-cols-3 xl:place-items-center xl:w-fit xl:mx-auto">
        {concernArr}
      </div>
    </div>
  )
}
