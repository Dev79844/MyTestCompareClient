import React from "react"
import {Link} from "react-router-dom"

import allLabPaymentBreakup from "../../../data/allLabPaymentBreakup"

export default function LabPaymentBreakup() {
  const allLabPaymentBreakupArr = allLabPaymentBreakup.map((item, index) => (
    <div
      key={index}
      className={`grid grid-cols-labPaymentReminder px-3 py-4 ${
        index % 2 != 0 ? "bg-secondary-withOpacity" : "bg-transparent"
      } `}
    >
      <Link to={"/labPayments/individualLab"}>
        <h2 className="font-medium text-lg cursor-pointer">{item.name}</h2>
      </Link>

      <h2 className="justify-self-center self-center">{item.discount}</h2>
      <h2 className="justify-self-center self-center">{item.comission}</h2>
      <h2 className="justify-self-center self-center">{item.paymentCycle}</h2>
      <h2 className="justify-self-center self-center">{item.duePayment}</h2>
    </div>
  ))

  return <div className="space-y-2 mt-4">{allLabPaymentBreakupArr}</div>
}
