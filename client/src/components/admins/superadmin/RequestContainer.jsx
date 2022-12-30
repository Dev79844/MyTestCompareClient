import React from "react"
import axios from "axios"

export default function RequestContainer(props) {
  const data = props.data
  const type = props.type
  const onBookingAccepted = props.onBookingAccepted

  // console.log("rendered");

  const handleClick = (item) => {
    if (type == "clientData") {
      axios
        .patch(
          "http://localhost:3000/api/v1/admin/booking/accept",
          {
            bookingId: item._id,
          },
          {
            headers: {
              // Authorization: `Bearer ${localStorage.getItem("token")}`,
              Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWM2YThlYjgxMzcxZWEyNjNlNGEzYyIsImlhdCI6MTY3MjI0Mzg1NCwiZXhwIjoxNjcyMzMwMjU0fQ.5e96I-vM3tCnMgV5krUnSmKB-vbuJhmV1-4ffdc66O0`,
            },
          }
        )
        .then((res) => {
          onBookingAccepted(item._id)
          //  console.log(item._id)
          //  console.log(res.data.message)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const allRequests = data.map((item, index) => (
    <div
      key={index}
      className="border-[1px] border-borderGray text-lg px-5 py-5 max-w-[32%] "
    >
      {type == "clientData" ? (
        // type == "clientData"
        <div className="space-y-2 mb-3">
          <div className="font-medium">
            {item.tests.map((test, index) => (
              <h2 key={index}>
                {index + 1}. {test.name}
              </h2>
            ))}
          </div>
          <h2>
            <span className="font-medium mr-5">Name:</span> {item.patient.name}
          </h2>
          <h2>
            <span className="font-medium mr-3">Mobile:</span>{" "}
            {item.patient.phone}
          </h2>
          <h2>
            <span className="font-medium mr-3">Charge:</span> {item.price}
          </h2>
          <h2>
            <span className="font-medium mr-2">Address:</span>{" "}
            {item.patient.address}
          </h2>
        </div>
      ) : (
        // type == "labRequest"
        <div className="space-y-3 mb-4">
          <h2 className="font-medium text-xl">{item.name}</h2>
          <h2>
            <span className="font-medium mr-4">Mobile:</span> {item.mobile}
          </h2>
          <h2>
            <span className="font-medium mr-7">Email:</span> {item.email}
          </h2>
          <h2>
            <span className="font-medium mr-2">Address:</span> {item.address}
          </h2>
        </div>
      )}

      <div className="space-x-4 flex justify-between">
        <button
          className="text-xl font-medium border-[1px] border-secondary rounded-md px-4 w-1/2"
          onClick={() => handleClick(item)}
        >
          Confirm
        </button>
        <button className="text-xl font-medium border-[1px] border-secondary rounded-md px-4 w-1/2">
          Reject
        </button>
      </div>
    </div>
  ))

  return <div className="flex flex-wrap gap-5 mt-7">{allRequests}</div>
}
