import React from "react"

export default function Transactions(props) {
  const {data, type} = props

  const renderTableData = data.map((item, index) => (
    <div
      key={index}
      className={`grid grid-cols-2 px-3 text-xl py-4 ${
        index % 2 != 0 ? "bg-secondary-withOpacity" : "bg-transparent"
      } `}
    >
      <h1>{item.name}</h1>
      <h1>{item.value}</h1>
    </div>
  ))

  return (
    <div className="mt-4">
      <div
        className="grid grid-cols-2 font-medium text-2xl  relative after:absolute after:w-full after:h-[2px] after:bg-borderGray after:bottom-0 px-1 py-3
      before:absolute before:w-full before:h-[2px] before:bg-borderGray before:top-0
      "
      >
        <h1>{type === "lab" ? "Lab" : "Test"} Name</h1>
        <h1>Income (₹)</h1>
      </div>
      {renderTableData}
    </div>
  )
}
