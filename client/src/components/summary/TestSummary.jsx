import React from "react"

export default function TestSummary() {
  const TestSummary = [
    {
      heading: "Tests",
      value: {
        test1: "Calcium Test",
        test2: "CBC-Complete Blood Count",
        test3: "Complete Urine Routine Analysis",
      },
    },
    {
      heading: "Date",
      value: "4 Decemeber 2022",
    },
    {
      heading: "Time",
      value: "10:00 AM",
    },
    {
      heading: "Name",
      value: "John Doe",
    },
    {
      heading: "Phone",
      value: "9876543210",
    }
  ]

  const TestSummaryArr = TestSummary.map((item) => { 
    return (
      <div className="grid grid-cols-summary mt-3">
        <h1 className="font-bold xs:text-lg">{item.heading}</h1>
        {item.heading === "Tests" ? (
          <div className="space-y-1 sm:text-lg">
            <h2>{ item.value.test1 }</h2>
            <h2>{ item.value.test2}</h2>
            <h2>{ item.value.test2 }</h2>
          </div>
        ) : (
          <h1 className="sm:text-lg">{item.value}</h1>
        )}
      </div>
    )
  })

  return (
    <div className="bg-primary rounded-2xl xs:px-7 px-5 pt-5 pb-8 text-white lg:px-12">
      {TestSummaryArr}
    </div>
  )
}
