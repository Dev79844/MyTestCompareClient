import React from "react"
import {Icon} from "@iconify/react"
import PopupSlider from "./PopupSlider"
import axios from "axios"
import {useNavigate} from "react-router-dom"

export default function LoginPopup(props) {
  const {whereToNavigate, type, postreqData, origin, bookingConfiremedData} =
    props
  const navigate = useNavigate()

  // console.log(type)

  const [phone, setPhone] = React.useState("+91")
  const [otp, setOtp] = React.useState("")
  const [otpButtonDisabled, setOtpButtonDisabled] = React.useState(false)

  const handlePhone = (e) => {
    e.preventDefault()
    setPhone(e.target.value)
    // alert(e.target.value)
  }
  const getOtp = async (phone) => {
    JSON.stringify(phone)
    setOtpButtonDisabled(true)
    const otp = await axios.post(
      `${import.meta.env.VITE_APP_URI}/api/v1/user/generate-otp`,
      {
        phone,
      }
    )
  }

  const handleOtp = (e) => {
    e.preventDefault()
    setOtp(e.target.value)
  }

  const login = async (phone, otp) => {
    JSON.stringify(phone)
    JSON.stringify(otp)
    // console.log(phone, otp)
    try {
      const {data} = await axios.post(
        `${import.meta.env.VITE_APP_URI}/api/v1/user/login`,
        {
          phone,
          otp,
        }
      )
      // console.log(data.data)

      if (type === "admin") {
        localStorage.setItem("adminToken", data.data.token)
        navigate("/adminProfile")
      } else if (type === "user" && origin === "login") {
        localStorage.setItem("token", data.data.token)
        navigate("/")
      } else if (type === "user" && origin === "booking") {
        localStorage.setItem("token", data.data.token)
        console.log(token)
        axios
          .post(`${import.meta.env.VITE_APP_URI}/api/v1/booking`, postreqData, {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((response) => {
            console.log(response.data)
            navigate(whereToNavigate, {
              state: {
                data: bookingConfiremedData,
              },
            })
          })
      }
    } catch (error) {
      console.log(error)
    }

    if (origin === "booking" && localStorage.getItem("token") !== null) {
      axios
        .post(`${import.meta.env.VITE_APP_URI}/api/v1/booking`, postreqData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          console.log(response.data)
          navigate(whereToNavigate, {
            state: {
              data: bookingConfiremedData,
            },
          })
        })
    }
  }

  console.log(localStorage.getItem("token"))

  return (
    <div className="font-Roboto lg:grid lg:grid-cols-2">
      {/* Left Div */}
      <PopupSlider />

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
            <button
              type="submit"
              disabled={otpButtonDisabled}
              className={`bg-primary block w-3/5 sm:w-1/2 sm:mx-0 mt-4 mx-auto text-white font-medium px-4 text-lg rounded py-1
            ${otpButtonDisabled && "opacity-50 cursor-not-allowed"}
            `}
              onClick={() => {
                getOtp(phone)
              }}
            >
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
          <button
            type="submit"
            className="bg-primary block w-3/5 mt-4 mx-auto text-white font-medium px-4 text-lg rounded py-1 sm:w-2/5"
            onClick={() => login(phone, otp)}
          >
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
