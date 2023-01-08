import {Icon} from "@iconify/react"
import React from "react"
import axios from "axios"
import { useNavigate } from "react-router-dom"

export default function PartnerSignUp() {

  const navigate = useNavigate()

  const [formDetails, setFormDetails] = React.useState({
    email: "",
    password: ""
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormDetails({...formDetails, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    const data = await axios.post(
      `${import.meta.env.VITE_APP_URI}/api/v1/adminlogin`,
      formDetails,
    )
      console.log(data.data.data.token)
    // setFormDetails({
    //   email: "",
    //   password: ""
    // })
    // console.log(localStorage.getItem('superAdminToken'))
    if (data.status === 200) {
      navigate("/clientRequests", {
        state: data.data
      })
      localStorage.setItem("superAdminToken", data.data.data.token)
    }
    // console.log(formDetails)
  }

  return (
    <div className="h-screen becomePartnerBg  flex justify-center items-center py-6 lg:h-auto">
      <div className="bg-primary px-4 py-4 rounded-2xl w-full mx-8 xs:w-auto xs:px-12 lg:px-24 lg:py-8">
        <h1 className="text-2xl text-center relative after:absolute after:bg-white after:w-full after:h-[1px] after:bottom-0 pb-1 after:left-0 text-white font-bold md:text-3xl">
          Login
        </h1>

        <div className="space-y-4 mt-4 flex flex-col items-center">
          <div>
            <input
              type="text"
              placeholder="Email"
              className="bg-background px-3 py-1 lg:py-2 text-lg lg:px-5 rounded"
              name="email"
              value={formDetails.email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="password"
              placeholder="Password"
              className="bg-background px-3 py-1 lg:py-2 text-lg lg:px-5 rounded"
              name="password"
              value={formDetails.password}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-secondary text-white font-bold text-xl px-8 rounded py-1 lg:px-12"
            onClick={handleSubmit}
          >
            Login
          </button>
        </div>
      </div>
    </div>
  )
}
