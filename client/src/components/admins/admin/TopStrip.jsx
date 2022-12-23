import {Icon} from "@iconify/react"
import React from "react"

export default function TopStrip() {
  return (
    <div>
      <div className="flex gap-2 items-center justify-end">
        <Icon icon={"ion:notifcations"} color="black" className="text-3xl" />
        <h2 className="font-medium  text-2xl"> Anushka Pathology Laboratory</h2>
      </div>
    </div>
  )
}
