import React from "react"
import {Icon} from "@iconify/react"

export default function LoginPopup(props) {
  const [index, setIndex] = React.useState(0)
  const colors = [
    {
      icon: "arcticons:bestprice",
      text: "Best Price Guarantee",
    },
    {
      icon: "ic:baseline-access-time",
      text: "On Time Reports",
    },
    {
      icon: "ion:ribbon",
      text: "Certified Labs",
    },
    {
      icon: "ri:customer-service-2-fill",
      text: "Customer Support",
    },
  ]
  const delay = 2500

  const timeoutRef = React.useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

    React.useEffect(() => {
      resetTimeout()
      timeoutRef.current = setTimeout(
        () =>
          setIndex((prevIndex) =>
            prevIndex === colors.length - 1 ? 0 : prevIndex + 1
          ),
        delay
      )
      return () => {
        resetTimeout()
      }
    }, [index])

  const colorsArr = colors.map((item, index) => {
    return (
      <div
        className="slide w-full inline-block"
        key={index}
      >
        <div className="flex flex-col items-center py-6">
          <div>
            <Icon icon={item.icon} color={"white"} className="text-[140px]" />
          </div>
          <div>
            <h1 className="text-2xl text-white mt-4">{item.text}</h1>
          </div>
        </div>
      </div>
    )
  })

  const indicators = colors.map((_, idx) => {
    return (
      <div
        key={idx}
        className={`slideshowDot  h-3 w-3 rounded-full inline-block border-white border-[1px] cursor-pointer m-2
        ${index === idx ? "bg-white" : "bg-transparent"}
         `}
        onClick={() => setIndex(idx)}
      ></div>
    )
  })

  return (
    <div className="font-Roboto lg:grid lg:grid-cols-2">
      {/* Left Div */}
      <div className="hidden lg:block bg-secondary">
        <div className="slideshow my-0 mx-auto overflow-hidden max-w-[500px] flex flex-col justify-center items-center h-full">
          <div
            className="slideshowSlider whitespace-nowrap transition duration-[1500ms] ease"
            style={{transform: `translateX(${-index * 100}%)`}}
          >
            {colorsArr}
          </div>
          <div className="text-center">{indicators}</div>
        </div>
      </div>

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
            />
            <button className="bg-primary block w-3/5 sm:w-1/2 sm:mx-0 mt-4 mx-auto text-white font-medium px-4 text-lg rounded py-1">
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
          <button className="bg-primary block w-3/5 mt-4 mx-auto text-white font-medium px-4 text-lg rounded py-1 sm:w-2/5">
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
