import React from "react"
import RequestContainer from "./RequestContainer"
import axios from "axios"

export default function PendingClientRequest() {
  const [pendingClientRequests, setPendingClientRequests] = React.useState([])

  const handleBookingAccept = (bookingId) => {
    setPendingClientRequests(
      pendingClientRequests.filter((booking) => booking._id !== bookingId)
    )
  }

  const fetchPendingClientRequests = () => {
    axios
      .get("http://localhost:3000/api/v1/admin/booking/pending-to-verify", {
        headers: {
          // Authorization: `Bearer ${localStorage.getItem("token")}`,
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWM2YThlYjgxMzcxZWEyNjNlNGEzYyIsImlhdCI6MTY3MjI0Mzg1NCwiZXhwIjoxNjcyMzMwMjU0fQ.5e96I-vM3tCnMgV5krUnSmKB-vbuJhmV1-4ffdc66O0`,
        },
      })
      .then((res) => {
        const data = res.data.data.bookings

        // console.log(data);
        setPendingClientRequests(data)
      })
      .catch((err) => {
        console.log(err)
      })
  }

  React.useEffect(() => {
    const intervalId = setInterval(fetchPendingClientRequests, 1000)

    return () => clearInterval(intervalId)
  }, [])

  if (pendingClientRequests.length === 0) {
    return (
      <div>
        <h1>No Pending Requests</h1>
      </div>
    )
  }
  return (
    <RequestContainer
      data={pendingClientRequests}
      type="clientData"
      onBookingAccepted={handleBookingAccept}
    />
  )
}
