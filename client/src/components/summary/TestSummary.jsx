import React from "react"

export default function TestSummary(props) {
  const {data} = props

  // console.log(props)

  /**
   * data = {
  "patient": {
    "name": "",
    "address": "",
    "age": "",
    "phone": ""
  },
  "appointmentAt": "31 Dec 2022 ,  ",
  "tests": [
    "CBC - Complete Blood Count"
  ],
  "lab": {
    "labName": "Preet's Lab",
    "labId": "63ab45aead8eae227ce2cf74"
  },
  "totalCharge": 400
}
   */

  // console.log(data)

  const dateString = data.appointmentAt.split(",")[0]
  const timeString = data.appointmentAt.split(",")[1]
  // const TestSummary = [
  //   {
  //     heading: "Tests",
  //     value: {
  //       test1: "Calcium Test",
  //       test2: "CBC-Complete Blood Count",
  //       test3: "Complete Urine Routine Analysis",
  //     },
  //   },
  //   {
  //     heading: "Date",
  //     value: "4 Decemeber 2022",
  //   },
  //   {
  //     heading: "Time",
  //     value: "10:00 AM",
  //   },
  //   {
  //     heading: "Name",
  //     value: "John Doe",
  //   },
  //   {
  //     heading: "Phone",
  //     value: "9876543210",
  //   },
  // ]

  // const TestSummaryArr = TestSummary.map((item, index) => {
  //   return (
  //     <div key={index} className="grid grid-cols-summary mt-3">
  //       <h1 className="font-bold xs:text-lg">{item.heading}</h1>
  //       {item.heading === "Tests" ? (
  //         <div className="space-y-1 sm:text-lg">
  //           <h2>{item.value.test1}</h2>
  //           <h2>{item.value.test2}</h2>
  //           <h2>{item.value.test2}</h2>
  //         </div>
  //       ) : (
  //         <h1 className="sm:text-lg">{item.vue}</h1>
  //       )}
  //     </div>
  //   )
  // })

  return (
    <div className="bg-primary rounded-2xl xs:px-7 px-5 pt-5 pb-8 text-white lg:px-12">
      <div className="grid grid-cols-summary mt-3">
        <h1 className="font-bold xs:text-lg">Tests</h1>
        <div className="space-y-1 sm:text-lg">
          {data.tests.map((item, index) => (
            <h2 key={index}> {item} </h2>
          ))}
        </div>
        <h1 className="sm:text-lg">Date</h1>
        <h1 className="sm:text-lg">{dateString}</h1>
        <h1 className="sm:text-lg">Time</h1>
        <h1 className="sm:text-lg">{timeString}</h1>
        <h1 className="sm:text-lg">Name</h1>
        <h1 className="sm:text-lg">{data.patient.name}</h1>
        <h1 className="sm:text-lg">Address</h1>
        <h1 className="sm:text-lg">{data.patient.address}</h1>
        <h1 className="sm:text-lg">Age</h1>
        <h1 className="sm:text-lg">{data.patient.age}</h1>
        <h1 className="sm:text-lg">Phone</h1>
        <h1 className="sm:text-lg">{data.patient.phone}</h1>
        <h1 className="sm:text-lg">Charge</h1>
        <h1 className="sm:text-lg">{data.totalCharge}</h1>
      </div>
    </div>
  )
}
