import React from "react"
import {Icon} from "@iconify/react"

export default function ManageLabPopup(props) {
  const {closeModal} = props
  return (
    <div className="px-12 py-8">
      <Icon
        icon="radix-icons:cross-2"
        color="#f03a47"
        className="text-3xl cursor-pointer absolute right-0 lg:right-6 lg:top-5"
        onClick={closeModal}
      />
      <h1 className="text-center font-semibold text-3xl mt-6">
        Lab Information
      </h1>
      <div className="mt-5 space-y-4">
        <div className="flex gap-8">
          <h2 className="text-2xl font-semibold w-[180px]">Name:</h2>
          <h2 className="text-2xl">360 Diagnotics</h2>
        </div>
        <div className="flex gap-8">
          <h2 className="text-2xl font-semibold w-[176px]">Mobile:</h2>
          <h2 className="text-2xl">+91 8980XXXXXX</h2>
        </div>
        <div className="flex gap-8">
          <h2 className="text-2xl font-semibold w-[180px]">Email:</h2>
          <h2 className="text-2xl">loremipsum@gmail.com</h2>
        </div>
        <div className="flex gap-8">
          <h2 className="text-2xl font-semibold w-80">Address: </h2>
          <h2 className="text-2xl">
            lorem ipsum dolor isit, lorem, dolor vitesat , 385620
          </h2>
        </div>
        <div className="flex gap-5">
          <h2 className="text-2xl font-semibold w-44">Discount:</h2>
          <input type="text" className="border-[1px] border-secondary ml-4" />
        </div>
        <div className="flex gap-5">
          <h2 className="text-2xl font-semibold w-44">Comission:</h2>
          <input type="text" className="border-[1px] border-secondary ml-4" />
        </div>
        <div className="flex gap-5">
          <h2 className="text-2xl font-semibold w-48">Payment Cycle:</h2>
          <div className="flex items-center gap-1 cursor-pointer">
            <h2 className="text-2xl">Monthly</h2>
            <Icon icon={"mdi:chevron-down"} className="text-3xl" />
          </div>
        </div>
      </div>
      <div className="flex justify-evenly mt-8">
        <button className="border-[1px] border-secondary px-8 py-1 rounded-lg text-2xl font-semibold">
          Save
        </button>
        <button className="border-[1px] border-secondary px-8 py-1 rounded-lg text-2xl font-semibold">
          Edit Profile
        </button>
      </div>
    </div>
  )
}
