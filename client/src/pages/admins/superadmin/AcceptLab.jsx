import React from "react"
import SuperAdminSidebar from "../../../components/admins/superadmin/SuperAdminSidebar"
import RequestContainer from "../../../components/admins/superadmin/RequestContainer"
import pendingLabRequests from "../../../data/pendingLabRequests"
import axios from "axios"

export default function AcceptClientBooking() {
  axios
    .get("http://localhost:3000/api/v1/admin/lab", {
      params: {
        pendingOnly: true,
      },
      headers: {
        Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYzYWU3NmJlYjgxMzcxZWEyNjNkMGM4MiIsImlhdCI6MTY3MjM3ODA0NiwiZXhwIjoxNjcyNDY0NDQ2fQ.ErA1f_iw2xv94aeCSCKz6Y6uk288JNRJ-T7fu5mRwKw`,
      },
    })
    .then((res) => {
      console.log(res.data)
    })
    .catch((err) => {
      console.log(err)
    })

  return (
    <div className="font-Roboto bg-background">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <SuperAdminSidebar active="labRequests" />
        <div className="px-5 mt-4">
          <div className="mt-5 ml-5">
            <h2 className="text-4xl font-medium ">Pending Lab Requests</h2>
            <RequestContainer data={pendingLabRequests} type="labRequest" />
          </div>
        </div>
      </div>
    </div>
  )
}
