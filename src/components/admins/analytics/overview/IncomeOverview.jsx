import React from "react"

import FYCalender from "./FYCalender"
import MonthlyCalender from "../monthly/MonthlyCalender";

export default function IncomeOverview(props) {
  return (
    <div className="bg-secondary-withOpacity flex justify-between px-8 py-8 gap-3 rounded-3xl">
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">Total Income</h1>
        <h2 className="text-primary text-center text-xl font-medium">
          Rs. 1000
        </h2>
      </div>
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">Tests Sold</h1>
        <h2 className="text-primary text-center text-xl font-medium">132</h2>
      </div>
      <div className="space-y-1">
        <h1 className="text-2xl font-semibold">Customers</h1>
        <h2 className="text-primary text-center text-xl font-medium">129</h2>
      </div>
      {props.type === "monthly" ?  <MonthlyCalender/> : <FYCalender />}
    </div>
  )
}
