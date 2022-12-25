import React, {useState} from "react"
import {Icon} from "@iconify/react"
import Calendar from "react-calendar"

export default function MonthlyCalender() {
  const [value, onChange] = useState(new Date())
  const [showCalendar, setShowCalendar] = useState(false)
  const [selectedMonth, setSelectedMonth] = useState(new Date().getMonth())
  const [selectedYear, setSelectedYear] = useState(new Date().getFullYear())

  const monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"]

  const selectMonth = (value) => {
    setShowCalendar(false)
    setSelectedMonth(value.getMonth())
    setSelectedYear(value.getFullYear())
  }

  const toggleCalendar = () => {
    setShowCalendar(!showCalendar)
  }

  return (
    <div className="space-y-1">
      <div className="flex items-center">
        <h1 className="text-2xl font-semibold">Select Month</h1>
        <div className="relative">
          <Icon
            icon={"mdi:chevron-down"}
            className={`text-3xl cursor-pointer mt-[2px] ${
              showCalendar ? `rotate-180` : `rotate-0`
            } `}
            onClick={toggleCalendar}
          />
          <div
            className={` ${
              showCalendar ? "block" : "hidden"
            } absolute right-0 top-9 z-10`}
          >
            <Calendar
              onChange={onChange}
              value={value}
              maxDetail="year"
              onClickMonth={selectMonth}
            />
          </div>
        </div>
      </div>
      <h2 className="text-primary text-center text-xl font-medium">
        {monthNames[selectedMonth]} - {selectedYear}
      </h2>
    </div>
  )
}
