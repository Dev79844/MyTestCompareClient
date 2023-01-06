import React from "react"
import PopupSlider from "../PopupSlider"
import {Icon} from "@iconify/react"

export default function SpecifyLabPopup(props) {
  return (
    <div className="font-Roboto lg:grid lg:grid-cols-2">
      {/* Left Div */}
      <PopupSlider />

      {/* Right Div */}
      <div className="relative ">
        <Icon
          icon="radix-icons:cross-2"
          color="#f03a47"
          className="text-3xl cursor-pointer absolute right-0 lg:right-6 lg:top-5"
          onClick={props.closeModal}
        />

        <div className="pt-12 mx-4 pb-8 lg:mx-6 lg:pt-20 lg:pb-16">
          <h1 className="font-medium text-2xl ml-2 mb-3">Enter Lab Details</h1>
          <input
            type="text"
            placeholder="Lab Name"
            className="border-b border-black px-2 py-1 text-xl w-full  placeholder:text-black placeholder:font-bold"
          />
          <input
            type="text"
            placeholder="Lab Address"
            className="border-b border-black px-2 py-1 mt-5 text-xl w-full placeholder:text-black placeholder:font-bold"
          />
          <input
            type="text"
            placeholder="Lab Email"
            className="border-b border-black px-2 py-1 mt-5 text-xl w-full placeholder:text-black placeholder:font-bold"
          />
          <input
            type="text"
            placeholder="Lab Phone Number"
            className="border-b border-black px-2 py-1 mt-5 text-xl w-full placeholder:text-black placeholder:font-bold"
          />
          <button className="bg-primary block w-3/5 mt-5 mx-auto text-white font-medium px-4 text-lg rounded py-1 sm:w-2/5">
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}
