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
          Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWU3NmJlYjgxMzcxZWEyNjNkMGM4MiIsImlhdCI6MTY3MjM3ODA0NiwiZXhwIjoxNjcyNDY0NDQ2fQ.ErA1f_iw2xv94aeCSCKz6Y6uk288JNRJ-T7fu5mRwKw`,
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
