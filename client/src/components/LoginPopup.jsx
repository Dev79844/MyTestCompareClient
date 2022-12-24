import React from "react"
import { Icon } from "@iconify/react"
import PopupSlider from "./PopupSlider"
import axios from "axios"
// import CircularJSON from "circular-json"

export default function LoginPopup(props) {

  const [phone, setPhone] = React.useState("+91")
  const [otp, setOtp] = React.useState("")

  const [isLoggedIn, setIsLoggedIn] = React.useState(false)

  // const getOtp = axios.post("http://localhost:3000/api/v1/generate-otp")

  const handlePhone = (e) => {
    setPhone(e.target.value)
  }


  const handleOtp = (e) => {
    setOtp(e.target.value)
  }
 
  const getOtp = async(phone) => {
    // phone.parent = null
    // const num = JSON.stringify(phone)
    console.log(phone)
    await axios.post("http://localhost:3000/api/v1/generate-otp", {num})
  }

  const login = async(phone,otp) => {
    try {
      const {success,data} = await axios.post("http://localhost:3000/api/v1/login", {phone,otp})
      localStorage.setItem('token', data.token)
      if(success) {
        setIsLoggedIn(true)
        return(
          <Navigate to="/booking" />
        )
      }
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <div className="font-Roboto lg:grid lg:grid-cols-2">
      {/* Left Div */}
      <PopupSlider/>

      {/* Right Div */}
      <div className="relative ">
        <Icon
          icon="radix-icons:cross-2"
          color="#f03a47"
          className="text-3xl cursor-pointer absolute right-0 lg:right-6 lg:top-5"
          onClick={props.closeModal}
        />

        <div className="pt-12 mx-4 pb-8 lg:mx-6 lg:pt-20 lg:pb-16">
          <div className="sm:flex sm:gap-8 sm:justify-between ">
            <input
              type="text"
              placeholder="Enter your Mobile Number"
              className="border-b border-black px-2 py-1 text-xl w-full  placeholder:text-black placeholder:font-bold"
              value={phone}
              onChange={handlePhone}
            />
            <button className="bg-primary block w-3/5 sm:w-1/2 sm:mx-0 mt-4 mx-auto text-white font-medium px-4 text-lg rounded py-1" onClick={getOtp}>
              Send OTP
            </button>
          </div>

          {/* Make below container flex */}
          <div className="hidden justify-between text-xs mt-3 text-gray-600">
            <h4>Didn't received OTP?</h4>
            <h4>Resend it</h4>
          </div>

          <input
            type="text"
            placeholder="Enter OTP"
            className="border-b border-black px-2 py-1 mt-3 text-xl w-full placeholder:text-black placeholder:font-bold"
            value={otp}
            onChange={handleOtp}
          />
          <div className="flex gap-4 mt-5">
            <input type="checkbox" className="" />
            <h3>
              I agree to receive communication through sms, email or whatsapp
              regarding my booking
            </h3>
          </div>
          <div className="flex gap-4 mt-5">
            <input type="checkbox" className="" />
            <h3>
              Receive latest offers & discounts through sms, email or whatsapp.
            </h3>
          </div>
          <button className="bg-primary block w-3/5 mt-4 mx-auto text-white font-medium px-4 text-lg rounded py-1 sm:w-2/5" onClick={login}>
            Login
          </button>
          <h3 className="font-light text-center mt-4">
            By logging in, you agree to our
            <span className="text-red ml-1">Terms and Conditions</span> &{" "}
            <span className="text-red ml-1">Privacy Policy</span>
          </h3>
        </div>
      </div>
    </div>
  )
}
