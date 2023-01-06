import React from "react"

import testwisebreakup from "../../../data/testwisebreakup"

export default function IndividualTestBreakup() {
  const testWiseBreakupArr = testwisebreakup.map((item, index) => (
    <div
      key={index}
      className={`grid grid-cols-labPaymentReminder px-3 py-2 ${
        index % 2 != 0 ? "bg-secondary-withOpacity" : "bg-transparent"
      } `}
    >
      <div>
        <h2 className="font-medium text-lg">{item.testname}</h2>
        <h3>
          <span className="text-primary">Booked on:</span> {item.bookedOn}
        </h3>
        <h3>
          <span className="text-primary">Booked by: </span>
          {item.bookedBy}
        </h3>
      </div>
      <h2 className="justify-self-center self-center">{item.price}</h2>
      <h2 className="justify-self-center self-center">{item.discount}</h2>
      <h2 className="justify-self-center self-center">{item.comission}</h2>
      <h2 className="justify-self-center self-center">{item.amountPayable}</h2>
    </div>
  ))

  return (
    <div className="space-y-4 mt-4">
    {testWiseBreakupArr}
    </div>
  )
}
