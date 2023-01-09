import {Icon} from "@iconify/react"
import React from "react"
import axios from "axios"

export default function TopStrip() {
  const [labName, setLabName] = React.useState("")
  const [loading, setLoading] = React.useState(true)

  axios
    .get(`${import.meta.env.VITE_APP_URI}/api/v1/manage/lab`, {
      headers: {
        Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
      },
    })
    .then((res) => {
      setLabName(res.data.data.lab.name)
      setLoading(false)
    })
    .catch((err) => {
      console.log(err)
    })

  if (loading) {
    return (
      <div>
        <h1>Loading...</h1>
      </div>
    )
  }

  return (
    <div>
      <div className="flex gap-2 items-center justify-end">
        {/* <Icon icon={"ion:notifcations"} color="black" className="text-3xl" /> */}
        <h2 className="font-medium  text-2xl"> {labName}</h2>
      </div>
    </div>
  )
}
