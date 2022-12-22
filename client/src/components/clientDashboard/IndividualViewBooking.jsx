import React from "react"

import viewBookings from "../../data/viewBookings"

export default function IndividualViewBooking() {
  const bookingsArr = viewBookings.map((booking, index) => {
    return (
      <div className="flex justify-between items-center sm:w-4/5 gap-2">
        <div className="mt-4 px-3 py-2" key={index}>
          <h2 className="text-lg font-medium">
            {index + 1}.{booking.name}
          </h2>
          <h3 className="text-[17px] ">
            <span className="font-medium">Date:</span>
            {booking.date}
          </h3>

          <h4 className="cursor-pointer">Lab Name: {booking.labname}</h4>
        </div>
        <h2 className="text-lg font-medium text-center cursor-pointer">
          Price : {booking.price}
        </h2>
      </div>
    )
  })

  //   const largeScreenbookingsArr = viewbooking.map((booking, index) => {
  //     return (
  //       <div
  //         className={`lg:grid lg:grid-cols-3 px-3 py-3 mt-2
  //             ${index % 2 != 0 ? "bg-secondary-withOpacity" : "bg-transparent"}
  //             `}
  //         key={index}
  //       >
  //         <div className="">
  //           <h2 className="text-lg font-medium">
  //             {index + 1}.{booking.name}
  //           </h2>
  //           <div className="flex items-center gap-2">
  //             <Icon icon="clarity:cursor-hand-click-line" className="text-xl" />
  //             <h4 className="cursor-pointer">View booking</h4>
  //           </div>
  //         </div>
  //         <h3 className="text-[17px] justify-self-center self-center">
  //           {booking.date}
  //         </h3>
  //         <h2 className="text-lg font-medium justify-self-center self-center cursor-pointer">
  //           Download booking
  //         </h2>
  //       </div>
  //     )
  //   })

  return (
    <div className="">
      <div className="lg:hidden">{bookingsArr}</div>
      {/* <div className="hidden lg:block">{largeScreenbookingsArr}</div> */}
    </div>
  )
}
