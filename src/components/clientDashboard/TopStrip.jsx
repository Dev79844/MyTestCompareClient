import {Icon} from "@iconify/react"
import React from "react"

export default function TopStrip(props) {
  const {show, setShow} = props

  const handleShow = () => {
    setShow(!show)
  }


  return (
    <div>
      <div className="flex justify-between pt-2 lg:justify-end">
        <Icon
          icon={"heroicons:bars-3-bottom-right"}
          color={"black"}
          className="text-5xl cursor-pointer lg:hidden"
          onClick={handleShow}
        />
        <div>
          <h2 className="font-medium  text-xl"> +91 9856532124</h2>
          <h2 className="text-right text-slate-500 cursor-pointer"> Edit Profile</h2>
        </div>
      </div>
    </div>
  )
}
