import React from "react"
import {Icon} from "@iconify/react"

import tests from "../../data/tests"

export default function SelectedTest() { 
  const selectedTests = tests.map((entry) => {
    return (
      <div className="flex justify-between text-[0.85rem] bg-[#01B37A] gap-2 p-1 px-2 rounded text-white">
        <p>{entry.test}</p>
        <Icon icon="radix-icons:cross-2" color="#f03a47" className="text-xl" />
      </div>
    )
      
  })

  return <div className="flex flex-wrap px-3 sm:justify-start justify-center gap-2 mt-3">{selectedTests}</div>
}



