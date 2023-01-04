import React from "react"
import {Icon} from "@iconify/react"
import { fromJSON } from "postcss"

export default function AssignPlebotomistPopup(props) {
  const {closeModal} = props

  const {data} = props

  console.log(data)

  const [form, setForm] = React.useState({
    name: "",
    mobile:""
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setForm({...form, [name]: value})
  }

  return (
    <div className="px-12 py-8">
      <Icon
        icon="radix-icons:cross-2"
        color="#f03a47"
        className="text-3xl cursor-pointer absolute right-0 lg:right-6 lg:top-5"
        onClick={closeModal}
      />
      <h1 className="text-center font-semibold text-3xl mt-6">
        Assign Phlebotomist
      </h1>
      <div className="mt-8 space-y-4">
        <div className="flex gap-5">
          <h2 className="text-2xl font-semibold w-36">Name:</h2>
          <input type="text" className="border-[1px] border-secondary ml-4" onChange={(e) => handleChange(e)} />
        </div>
        <div className="flex gap-5">
          <h2 className="text-2xl font-semibold w-36">Contact No:</h2>
          <input type="text" className="border-[1px] border-secondary ml-4" />
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button className="border-[1px] border-secondary px-8 py-1 rounded-lg text-2xl font-semibold">
          Assign
        </button>
      </div>
    </div>
  )
}
