import React from "react"
import {Icon} from "@iconify/react"
import {useLocation} from "react-router-dom"
import qs from "qs"

// import selectedTestData from "../../data/selectedTestData"

export default function IndividualSelectedTest(props) {
  const {filteredTests, removeTest} = props
  // const {search} = useLocation()
  // const queryParams = qs.parse(search, {ignoreQueryPrefix: true})
  // const {tests} = queryParams

  // console.log(tests)

  // const [testArr, setTestArr] = React.useState(filteredTests)
  // console.log(testArr)

  // const removeTest = (item) => {
  //   const filteredArr = testArr.filter((test) => test.name !== item.name)
  //   setTestArr(filteredArr)
  // }
  // console.log(testArr)
  // console.log(removeTest)

  const selectedTestArr = filteredTests.map((item, index) => {
    // console.log(item)
    return (
      <div
        key={index * 2}
        className="border-borderGray rounded border-[1px] pt-3  min-w-[40%]"
      >
        <div className="px-4">
          <h1 className="font-bold text-xl">{item.name}</h1>
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
              <div className="flex gap-2">
                <h3>Special Instructions: </h3>
                <div>
                  {item.specialInstruction.map((instruction, index) => {
                    return (
                      <span key={index}>
                        {instruction}
                        {index === item.specialInstruction.length - 1
                          ? ""
                          : ","}
                      </span>
                    )
                  })}
                </div>
              </div>
            </div>
            <div className="flex gap-1 items-center">
              <Icon
                icon={"mdi:information-outline"}
                color={"#E97F0E"}
                className="text-lg"
              />
              <h3>Processing Time: {item.processingTime}</h3>
            </div>
            {/* <div className="flex gap-1 items-center">
              <Icon
                icon={"mdi:information-outline"}
                color={"#E97F0E"}
                className="text-lg"
              />
              <h3>Parameters Covered: {item.parameters}</h3>
            </div> */}
          </div>
          <h3 className="font-medium text-xl mt-2">
            Price: <span className="ml-3">₹{item.price}</span>
          </h3>
        </div>
        <div className="bg-secondary-withOpacity px-4 border-t border-borderGray mt-3">
          <div
            className="flex items-center gap-2 py-2 cursor-pointer"
            onClick={() => removeTest(item)}
          >
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
