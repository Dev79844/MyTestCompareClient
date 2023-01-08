import React from "react"
import axios from "axios"

export default function RequestContainer(props) {
  const data = props.data
  const type = props.type
  // const onBookingAccepted = props.onBookingAccepted

  // console.log("rendered");
  // console.log(data)

  const [fetchedData, setFetchedData] = React.useState(data && data)

  React.useEffect(() => {
    setFetchedData(data && data)
  }, [data])

  // console.log(fetchedData)

  const handleClick = (item) => {
    if (type == "clientData") {
      axios
        .patch(
          `${import.meta.env.VITE_APP_URI}/api/v1/admin/booking/accept`,
          {
            bookingId: item._id,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(
                "superAdminToken"
              )}`,
            },
          }
        )
        .then((res) => {
          // onBookingAccepted(item._id)
          item.verified = true
          setFetchedData(data.filter((booking) => booking.verified == false))

          //  console.log(item._id)
          //  console.log(res.data.message)
        })
        .catch((err) => {
          console.log(err)
        })
    }
    if (type == "labRequest") {
      axios
        .patch(
          `${import.meta.env.VITE_APP_URI}/api/v1/admin/lab/${item._id}`,
          {
            verified: true,
          },
          {
            headers: {
              Authorization: `Bearer ${localStorage.getItem(
                "superAdminToken"
              )}`,
            },
          }
        )
        .then((res) => {
          item.verified = true
          setFetchedData(data.filter((lab) => lab.verified == false))
          // console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  const handleReject = (item) => {
    if (type === "clientData") {
      axios
        .delete(`${import.meta.env.VITE_APP_URI}/api/v1/admin/booking/reject`, {
          data: {
            bookingId: item._id,
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("superAdminToken")}`,
          },
        })
        .then((res) => {
          setFetchedData(data.filter((booking) => booking._id !== item._id))
          // console.log(res.data.message)
        })
        .catch((err) => {
          console.log(err)
          // console.log("request object:", JSON.stringify(err.config, null, 2))
        })
      item.status = "REJECTED"
      setFetchedData(data.filter((booking) => booking.status == "CREATED"))
    }
    if (type === "labRequest") {
      axios
        .delete(`${import.meta.env.VITE_APP_URI}/api/v1/admin/lab/${item._id}`, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("superAdminToken")}`,
          },
        })
        .then((res) => {
          item.verified = "rejected"
          setFetchedData(data.filter((lab) => lab.verified !== "rejected"))
          // console.log(res.data)
        })
        .catch((err) => {
          console.log(err)
        })
    }
  }

  // console.log(fetchedData)

  if (!fetchedData) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  if (fetchedData && fetchedData.length == 0) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <h1 className="text-3xl font-medium">No Requests</h1>
      </div>
    )
  }

  const allRequests = fetchedData.map((item, index) => (
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
            <span className="font-medium mr-4">Mobile:</span>
            {item.submitter.phone}
          </h2>
          <h2>
            <span className="font-medium mr-7">Email:</span>
            {item.submitter.email}
          </h2>
          <h2>
            <span className="font-medium mr-2">Address:</span>
            {item.address.address}
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
        <button
          className="text-xl font-medium border-[1px] border-secondary rounded-md px-4 w-1/2"
          onClick={() => handleReject(item)}
        >
          Reject
        </button>
      </div>
    </div>
  ))

  return <div className="flex flex-wrap gap-5 mt-7">{allRequests}</div>
}
