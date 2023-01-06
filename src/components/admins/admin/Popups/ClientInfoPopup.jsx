import React from "react"
import {Icon} from "@iconify/react"

export default function ClientInfoPopup(props) {
  const {closeModal, fetchedBookings, elementid} = props
  console.log(fetchedBookings)
  // console.log(fetchedBookings[elementid])
  const userObject = fetchedBookings.find((user) => user._id === elementid)
  // console.log(userObject)
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
          <h2 className="text-2xl">{userObject.patient.name}</h2>
        </div>
        <div className="flex gap-8">
          <h2 className="text-2xl font-semibold w-24">Tests:</h2>
          <div className="text-2xl">
            {userObject.tests.map((test) => (
              <h2 key={test._id}>{test.name}</h2>
            ))}
          </div>
        </div>
        <div className="flex gap-8">
          <h2 className="text-2xl font-semibold w-24">Mobile:</h2>
          <h2 className="text-2xl">{userObject.patient.phone}</h2>
        </div>
        <div className="flex gap-8">
          <h2 className="text-2xl font-semibold w-24">Age:</h2>
          <h2 className="text-2xl">{userObject.patient.age}</h2>
        </div>
        <div className="flex gap-8">
          <h2 className="text-2xl font-semibold w-24">Charge: </h2>
          <h2 className="text-2xl">₹{userObject.price}</h2>
        </div>
        <div className="flex gap-8">
          <h2 className="text-2xl font-semibold w-24">Address: </h2>
          <h2 className="text-2xl">{userObject.patient.address}</h2>
        </div>
      </div>
    </div>
  )
}
