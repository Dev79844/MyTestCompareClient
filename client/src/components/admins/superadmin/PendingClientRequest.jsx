import React from "react"
import RequestContainer from "./RequestContainer"
import axios from "axios"
import {useNavigate} from "react-router-dom"

export default function PendingClientRequest() {
  const navigate = useNavigate()

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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWRmOGNmYjgxMzcxZWEyNjg5YmNlZiIsImlhdCI6MTY3MjM5NjUyMCwiZXhwIjoxNjcyNDgyOTIwfQ.OukbtIlti0A1be2ixtIebRdbXwPKsebyeW0mG72FuM4`,
        },
      })
      .then((res) => {
        const data = res.data.data.bookings

        // console.log(data);
        setPendingClientRequests(data)
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("Please login again")
          navigate("/")
        }
        if (err.response.status === 403) {
          alert("You are not authorized to access this page")
          navigate("/")
        }
        // console.log(err)
      })
  }

  React.useEffect(() => {
    const intervalId = setInterval(fetchPendingClientRequests, 1000)

    return () => clearInterval(intervalId)
  }, [])

  if (pendingClientRequests.length === 0) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <h1 className="text-3xl font-medium">Loading</h1>
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
