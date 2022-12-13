import React from "react"
import {Icon} from "@iconify/react"

import selectedTestData from "../../data/selectedTestData"

export default function IndividualSelectedTest() {
  const selectedTestArr = selectedTestData.map((item,index) => {
    return (
      <div key={index*2} className="border-borderGray rounded border-[1px] pt-3  ">
        <div className="px-4">
          <div className="flex justify-between">
            <h1 className="font-bold text-xl">{item.name}</h1>
            <div className="border-[1px] border-secondary flex rounded space-x-3 px-3 ">
              <button className="text-lg text-secondary">-</button>
              <h3 className="font-medium">1</h3>
              <button className="text-lg text-secondary">+</button>
            </div>
          </div>
          <div className="space-y-1 mt-2">
            <div className="flex gap-1 items-center">
              <Icon
                icon={"bx:injection"}
                color={"#E97F0E"}
                className="text-lg"
              />
              <h3>Sample Type: {item.sampleType}</h3>
            </div>
            <div className="flex gap-1 items-center">
              <Icon
                icon={"mdi:information-outline"}
                color={"#E97F0E"}
                className="text-lg"
              />
              <h3>Special Instructions: {item.specialInstruction}</h3>
            </div>
            <div className="flex gap-1 items-center">
              <Icon
                icon={"mdi:information-outline"}
                color={"#E97F0E"}
                className="text-lg"
              />
              <h3>Processing Time: {item.processingTime}</h3>
            </div>
            <div className="flex gap-1 items-center">
              <Icon
                icon={"mdi:information-outline"}
                color={"#E97F0E"}
                className="text-lg"
              />
              <h3>Parameters Covered: {item.parameters}</h3>
            </div>
          </div>
          <h3 className="font-medium text-xl mt-2">
            Price: <span className="ml-3">₹{item.price}</span>
          </h3>
        </div>
        <div className="bg-secondary-withOpacity px-4 border-t border-borderGray mt-3">
          <div className="flex items-center gap-2 py-2">
            <Icon
              icon={"ph:trash-fill"}
              color={"#E97F0E"}
              className="text-lg"
            />
            <h3 className="text-primary font-medium">Remove</h3>
          </div>
        </div>
      </div>
    )
  })
    
    return (
        <div className="space-y-4 md:space-y-0 md:gap-4 md:justify-center lgGrid:justify-start px-2 md:flex md:flex-wrap">
            {selectedTestArr}
        </div>
    )
}
