import {Icon} from "@iconify/react"
import React from "react"

export default function OrderTracking() {
  const steps = [
    {
      name: "Booking Confirmed",
      icon: "uis:calender",
      completed: true,
    },
    {
      name: "Confirmed by Lab",
      icon: "mdi:microscope",
      completed: true,
    },
    {
      name: "Phlebotomist Assigned",
      icon: "ic:baseline-delivery-dining",
      completed: false,
    },
    {
      name: "Sample Tested",
      icon: "fluent-emoji-high-contrast:test-tube",
      completed: false,
    },
    {
      name: "Report Sent",
      icon: "mdi:file-document",
      completed: false,
      // or icon: "fluent:document"
      // or icon: "material-symbols:lab-profile-sharp"
    },
  ]

  const stepsList = steps.map((step, index) => (
    <div
      key={index}
      className={`w-1/2 flex flex-col items-center relative after:w-3/5 after:h-[2px] after:bg-black ${
        index != 4 ? `after:absolute` : `after:static after:w-0`
      } after:top-[26%] after:right-[-35%]`}
    >
      <div className={`border-[2px] border-black p-4 ${step.completed ? `bg-[#01b37a54]` : `bg-transparent` }  rounded-full`}>
        <Icon icon={step.icon} className="text-5xl" />
      </div>
      <h2 className="text-2xl font-medium text-center mt-4 w-[90%]">
        {" "}
        {step.name}{" "}
      </h2>
    </div>
  ))

  return <div className="flex gap-5 px-2 mt-6">{stepsList}</div>
}
