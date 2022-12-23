import React from "react"
import {Icon} from "@iconify/react"

export default function ClientInfoPopup(props) {
  const {closeModal, bookingsArr, elementid} = props
  return (
    <div className="px-12 py-8">
      <Icon
        icon="radix-icons:cross-2"
        color="#f03a47"
        className="text-3xl cursor-pointer absolute right-0 lg:right-6 lg:top-5"
        onClick={closeModal}
      />
      <h1 className="text-center font-semibold text-3xl mt-6">
        Client Information
      </h1>
      <div className="mt-5 space-y-4">
        <div className="flex gap-8">
          <h2 className="text-2xl font-semibold w-24">Name:</h2>
          <h2 className="text-2xl">{bookingsArr[elementid]}</h2>
        </div>
        <div className="flex gap-8">
          <h2 className="text-2xl font-semibold w-24">Tests:</h2>
          <div className="text-2xl">
            <h2>1. CBC - Complete Blood Count</h2>
            <h2>2. CBC - Complete Blood Count</h2>
            <h2>3. CBC - Complete Blood Count</h2>
          </div>
        </div>
        <div className="flex gap-8">
          <h2 className="text-2xl font-semibold w-24">Mobile:</h2>
          <h2 className="text-2xl">+91 8980XXXXXX</h2>
        </div>
        <div className="flex gap-8">
          <h2 className="text-2xl font-semibold w-24">Email:</h2>
          <h2 className="text-2xl">loremipsum@gmail.com</h2>
        </div>
        <div className="flex gap-8">
          <h2 className="text-2xl font-semibold w-24">Charge: </h2>
          <h2 className="text-2xl">₹750</h2>
        </div>
        <div className="flex gap-8">
          <h2 className="text-2xl font-semibold w-24">Address: </h2>
          <h2 className="text-2xl">
            lorem ipsum dolor isit, lorem, dolor vitesat , 385620
          </h2>
        </div>
      </div>
    </div>
  )
}
