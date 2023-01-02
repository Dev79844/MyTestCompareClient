import React, {useState} from "react"
import axios from "axios"
// import viewBookings from "../../data/viewBookings"

export default function IndividualViewBooking() {
  // TODO: Fix the date issue

  // const [response, setResponse] = useState([])
  const [bookings, setBookings] = useState([])

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/booking", {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        // console.log(res.data.data.bookings)
        const bookings = res.data.data.bookings
        const allBookings = bookings.flatMap((booking) => {
          return {
            labName: booking.labName,
            tests: booking.tests,
          }
        })
        setBookings(allBookings)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  const transformedBookings =
    bookings &&
    bookings.flatMap((booking) => {
      return booking.tests.map((test) => {
        return {
          ...test,
          labName: booking.labName,
        }
      })
    })

  // console.log(bookings)
  // console.log(response && response[0].labname)

  const bookingsArr =
    transformedBookings &&
    transformedBookings.map((booking, index) => {
      return (
        <div
          key={booking._id}
          className="flex justify-between items-center gap-2"
        >
          <div className="mt-4 px-3 py-2">
            <h2 className="text-lg font-medium">
              {index + 1}. {booking.name}
            </h2>
            <h3 className="text-[17px] ">
              <span className="font-medium mr-2">Date:</span>
              {/* {booking.date} */}
              To fix
            </h3>
            <h3 className="text-[17px] ">
              <span className="font-medium mr-2">LabName:</span>
              {booking.labName}
            </h3>
          </div>
          <h2 className="text-lg font-medium text-center cursor-pointer">
            {booking.price}
          </h2>
        </div>
      )
    })

  const largeScreenbookingsArr = transformedBookings.map((booking, index) => {
    return (
      <div
        className={`lg:grid lg:grid-cols-clientBookings px-3 py-4 mt-2
              ${index % 2 != 0 ? "bg-secondary-withOpacity" : "bg-transparent"}
              `}
        key={booking._id}
      >
        <div className="">
          <h2 className="text-lg font-medium">
            {index + 1}.{booking.name}
          </h2>
        </div>
        <h3 className="text-[17px] justify-self-center self-center">
          {/* {booking.date} */}
          To fix
        </h3>
        <h3 className="text-[17px] justify-self-center self-center">
          {booking.price}
        </h3>
        <h2 className="text-lg font-medium justify-self-center self-center cursor-pointer">
          {booking.labName}
        </h2>
      </div>
    )
  })

  if (!bookings) {
    return <div>Loading...</div>
  }

  return (
    <div className="">
      <div className="lg:hidden">{bookingsArr}</div>
      <div className="hidden lg:block">{largeScreenbookingsArr}</div>
    </div>
  )
}
