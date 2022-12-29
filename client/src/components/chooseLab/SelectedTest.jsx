import React from "react"
import {Icon} from "@iconify/react"

// import tests from "../../data/tests"
import {useLocation} from "react-router-dom"
import qs from "qs"

export default function SelectedTest() {
  const {search} = useLocation()
  const queryParams = qs.parse(search, {ignoreQueryPrefix: true})
  const {tests} = queryParams
  console.log(tests)

  const selectedTests = tests.map((entry, index) => {
    console.log(entry, index)
    return (
      <div
        key={index}
        className="flex justify-between text-[0.85rem] bg-[#01B37A] gap-2 p-1 px-2 rounded text-white"
      >
        <p>{entry}</p>
        {/* <Icon icon="radix-icons:cross-2" color="#f03a47" className="text-xl cursor-pointer" /> */}
      </div>
    )
  })

  return (
    <div className="flex flex-wrap px-3 sm:justify-start justify-center gap-2 mt-3">
      {selectedTests}
    </div>
  )
}
