import React from "react"
import RequestContainer from "./RequestContainer"
import axios from "axios"
import {useNavigate} from "react-router-dom"

export default function PendingClientRequest() {
  const navigate = useNavigate()

  const [pendingClientRequests, setPendingClientRequests] = React.useState([])

  // const handleBookingAccept = (bookingId) => {
  //   setPendingClientRequests(
  //     pendingClientRequests.filter((booking) => booking._id !== bookingId)
  //   )
  // }

  const fetchPendingClientRequests = () => {
    axios
      .get(`${process.env.VITE_APP_URI}/api/v1/admin/booking/pending-to-verify`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("superAdminToken")}`,
        },
      })
      .then((res) => {
        const data = res.data.data.bookings

        // console.log(data)
        setPendingClientRequests(data)
      })
      .catch((err) => {
        if (err.response.status === 401) {
          alert("Please login again")
          navigate("/")
        } else if (err.response.status === 403) {
          alert("You are not authorized to access this page")
          navigate("/")
        }
        // console.log(err)
      })
  }

  React.useEffect(() => {
    fetchPendingClientRequests()
  }, [])

  return (
    <RequestContainer
      data={pendingClientRequests}
      type="clientData"
      // onBookingAccepted={handleBookingAccept}
    />
  )
}
