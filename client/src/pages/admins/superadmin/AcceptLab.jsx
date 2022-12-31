import React from "react"
import SuperAdminSidebar from "../../../components/admins/superadmin/SuperAdminSidebar"
import RequestContainer from "../../../components/admins/superadmin/RequestContainer"
import pendingLabRequests from "../../../data/pendingLabRequests"
import axios from "axios"

export default function AcceptClientBooking() {
  const [allLabs, setAllLabs] = React.useState([])

  React.useEffect(() => {
    axios
      .get("http://localhost:3000/api/v1/admin/lab", {
        params: {
          pendingOnly: true,
        },
        headers: {
          Authorization: `Bearer ${localStorage.getItem("superAdminToken")}`,
        },
      })
      .then((res) => {
        setAllLabs(res.data.data.labs)
        // console.log(res.data.data)
      })
      .catch((err) => {
        console.log(err)
      })
  }, [])

  // allLabs && console.log(allLabs)

  if (!allLabs) {
    return <div>Loading...</div>
  }

  return (
    <div className="font-Roboto bg-background">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <SuperAdminSidebar active="labRequests" />
        <div className="px-5 mt-4">
          <div className="mt-5 ml-5">
            <h2 className="text-4xl font-medium ">Pending Lab Requests</h2>
            <RequestContainer data={allLabs} type="labRequest" />
          </div>
        </div>
      </div>
    </div>
  )
}
