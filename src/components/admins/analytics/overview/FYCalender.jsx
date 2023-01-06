import React, { useState } from "react";
import { Icon } from "@iconify/react";
import Calendar from "react-calendar";

export default function FYCalender() { 
    const [value, onChange] = useState(new Date())
      const [showCalendar, setShowCalendar] = useState(false)
      const [selectedFiscalYear, setSelectedFiscalYear] = useState(
        currentFiscalYear()
      )
      function currentFiscalYear() {
        let date = new Date()
        let year = date.getFullYear()
        let month = date.getMonth()
        if (month < 3) {
          return year - 1 + "-" + year
        } else {
          return year + "-" + (year + 1)
        }
      }

      const toggleCalendar = () => {
        setShowCalendar(!showCalendar)
      }

      const selectFiscalYear = (value) => {
        setShowCalendar(false)
        setSelectedFiscalYear(
          value.getFullYear() + "-" + (value.getFullYear() + 1)
        )
    }
    
    return (
      <div className="space-y-1">
        <div className="flex items-center">
          <h1 className="text-2xl font-semibold">Financial year</h1>
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
                maxDetail="decade"
                onClickYear={selectFiscalYear}
              />
            </div>
          </div>
        </div>
        <h2 className="text-primary text-center text-xl font-medium">
          {selectedFiscalYear}
        </h2>
      </div>
    )
}