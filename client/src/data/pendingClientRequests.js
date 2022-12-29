import axios from "axios"

const pendingClientRequests = []

axios
  .get("http://localhost:3000/api/v1/admin/booking/pending-to-verify", {
    headers: {
      // Authorization: `Bearer ${localStorage.getItem("token")}`,
      Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWM2YThlYjgxMzcxZWEyNjNlNGEzYyIsImlhdCI6MTY3MjI0Mzg1NCwiZXhwIjoxNjcyMzMwMjU0fQ.5e96I-vM3tCnMgV5krUnSmKB-vbuJhmV1-4ffdc66O0`,
    },
  })
  .then((res) => {
    const data = res.data.data.bookings

    data.forEach((booking) => {
      pendingClientRequests.push(booking)
    })
    console.log(pendingClientRequests)
  })
  .catch((err) => {
    console.log(err)
  })

export default pendingClientRequests
