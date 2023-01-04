import React from "react"
import {Icon} from "@iconify/react"

import MiniNav from "../components/MiniNav"
import Nav from "../components/Nav"
import DiscountStrip from "../components/DiscountStrip"
import SelectedTest from "../components/chooseLab/SelectedTest"
import IndividualSelectedTest from "../components/SelectedTests/IndividualSelectedTest"
import Footer from "../components/Footer"
import Calendar from "react-calendar"
import "react-calendar/dist/Calendar.css"
import time from "../data/time"
import {useNavigate, useLocation} from "react-router-dom"
import LoginPopup from "../components/LoginPopup"
import ReactModal from "react-modal"
import qs from "qs"
import axios from "axios"

export default function SelectedTests() {
  /**
   // TODO: Fetch all test data from backend (sample type, special instructions, processing time, parameters covered)
   // TODO: Fetch Lab Certificate from backend (if any)
   */

  const navigate = useNavigate()
  const {search} = useLocation()
  const queryParams = qs.parse(search, {ignoreQueryPrefix: true})
  const {lab, tests} = queryParams

  const isUserLoggedIn = localStorage.getItem("token") ? true : false
  // localStorage.removeItem("token")
  // console.log(localStorage.getItem("token"))

  // For getting lab details and test details from backend
  const [response, setResponse] = React.useState({})
  const [testArr, setTestArr] = React.useState([])

  React.useEffect(() => {
    const getTestDeatils = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_APP_URI}/api/v1/lab/test`,
          {
            params: {
              name: lab,
              tests: tests,
            },
          }
        )
        setResponse(response.data.data)
        // console.log(response.data.data)
        setTestArr(response.data.data.test)
      } catch (error) {
        console.log(error)
      }
    }
    getTestDeatils()
  }, [])
  // console.log(response.test)
  // console.log(response.labDetails)
  // console.log(response)
  /**
   * response has 2 keys:
   * 1. labData - contains lab details
   * 2. test - contains test details asscociated with that lab
   */

  const removeTest = (item) => {
    const filteredArr = testArr.filter((test) => test.name !== item.name)
    setTestArr(filteredArr)
  }

  // console.log(testArr && testArr)

  // For Time
  const [appoint, setTime] = React.useState("")

  // For Modal
  const [modalIsOpen, setModalIsOpen] = React.useState(false)

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    content: {
      height: "fit-content",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      width: "75vw",
    },
  }

  function closeModal() {
    setModalIsOpen(false)
  }
  // document.body.style.overflow = modalIsOpen ? "hidden" : "auto"

  // For Total Price
  const testprice = testArr && testArr.map((item) => item.price)
  const totalMrp = testprice && testprice.reduce((a, b) => a + b, 0)
  // const discount = response.labDetails && response.labDetails.discount
  const discount = response.labData && response.labData.discount
  const discountPrice = (totalMrp * discount) / 100
  const finalPrice = totalMrp - discountPrice

  // For Calendar
  const [visible, setVisible] = React.useState(true)
  const [addBgToSelectedTime, setAddBgToSelectedTime] = React.useState()
  function showDateAndTime() {
    setVisible(!visible)
  }

  const tomorrow = new Date()
  tomorrow.setDate(tomorrow.getDate() + 1)
  const [value, setValue] = React.useState(tomorrow)
  const onChange = (value) => setValue(value)

  const monthNames = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]

  function returnAppointmentDate() {
    const date = value.getDate()
    const month = value.getMonth()
    const year = value.getFullYear()
    return `${date} ${monthNames[month]} ${year}`
  }

  // For Patient Details
  const [patientData, setPatientData] = React.useState({
    name: "",
    address: "",
    age: "",
    phone: "",
  })
  const handleChange = (e) => {
    const {name, value} = e.target
    setPatientData({...patientData, [name]: value})
  }

  const patientbookingData = {
    patient: patientData,
    appointmentAt: `${returnAppointmentDate()} , ${appoint} `,
    labId: response.labDetails && response.labDetails.labId,
    testIds: testArr && testArr.map((item) => item._id),
  }

  const bookingConfiremedData = {
    patient: patientData,
    appointmentAt: `${returnAppointmentDate()} , ${appoint} `,
    totalCharge: finalPrice,
    tests: testArr && testArr.map((item) => item.name),
    lab: response.labDetails && response.labDetails,
  }

  // For Booking
  function handleSubmit() {
    // isUserLoggedIn ? navigate("/booking") : setModalIsOpen(true)

    if (!isUserLoggedIn) {
      setModalIsOpen(true)
      return
    }

    const patientDataIsEmpty = Object.values(patientData).includes("")
    const patientMobile = patientData.phone
    let isMobileValid = false
    if (
      patientMobile.length === 12 ||
      patientMobile.substring(3).length === 10
    ) {
      isMobileValid = true
    }

    if (patientDataIsEmpty) {
      alert("Please fill all the details")
      return
    } else if (!isMobileValid) {
      alert("Please enter a valid mobile number")
      return
    } else if (!appoint) {
      alert("Please select a time slot")
      return
    } else {
      // Make Post Request to backend
      axios
        .post(`${import.meta.env.VITE_APP_URI}/api/v1/booking`, patientbookingData, {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        })
        .then((response) => {
          // console.log(response.data)
          navigate("/confirmed", {
            state: {
              data: bookingConfiremedData,
            },
          })
        })
        .catch((err) => {
          if (err.response.status === 401) {
            alert("Session Expired. Please Login Again")
            setModalIsOpen(true)
          }
          console.log(err)
        })
      // console.log("Booking Confirmed")
      // console.log(bookingConfiremedData)
    }

    // console.log(patientbookingData)
  }

  // Rendering Timings
  const timingArr = time.map((item, index) => {
    const handleClick = (e) => {
      setTime(e.target.innerHTML)
      setAddBgToSelectedTime(item)
    }

    return (
      <button
        key={index}
        className={`border-[1px] border-secondary rounded px-3 ${
          item === addBgToSelectedTime ? "bg-secondary" : "bg-transparent"
        } `}
        onClick={(e) => handleClick(e)}
      >
        {item}
      </button>
    )
  })

  return (
    <div className="font-Roboto bg-background">
      {testArr && response.labData && (
        <div>
          <MiniNav />
          <Nav />
          <DiscountStrip />

          {/* Whole container */}
          <div className="my-8 px-2">
            <div
              className="flex items-center gap-3"
              onClick={() => navigate(-1)}
            >
              <Icon
                icon="carbon:chevron-left"
                color="black"
                inline={true}
                className="text-3xl sm:text-4xl cursor-pointer"
              />
              <h3 className="text-2xl font-medium lg:text-3xl">
                Choose Other Lab
              </h3>
            </div>
            <div className="flex bg-secondary-withOpacity gap-2 py-2 px-3 rounded mt-4 w-[90%] mx-auto md:w-[98%] md:mx-3">
              <Icon
                icon="ic:baseline-search"
                color="black"
                inline={true}
                className="text-3xl sm:text-4xl"
              />
              <input
                type="text"
                className="bg-transparent rounded w-full "
                placeholder="Add more tests or health packages"
              />
            </div>

            <div className="md:flex md:gap-5 md:items-center md:mt-4">
              <div className="text-center pt-4 md:pt-0 text-xl font-medium md:mt-3 sm:text-left sm:mx-4 md:flex-shrink-0">
                <h1>Selected Lab: {response.labData.name}</h1>
              </div>

              <div className="sm:flex sm:px-3 sm:items-center">
                <p className="text-center pt-4 md:pt-0 text-xl font-medium md:mt-3">
                  Selected Tests
                </p>
                <div>
                  <SelectedTest />
                </div>
              </div>
            </div>

            <div className="mt-3 sm:px-4 sm:mt-8">
              <h1 className="text-lg sm:text-left sm:text-xl font-medium text-center">
                Enter Patient Details:
              </h1>
              <div className="px-4 sm:px-0 sm:flex sm:flex-wrap sm:justify-between sm:gap-x-4 lg:w-3/4 xl:w-full">
                <div className="flex gap-5 xs:gap-2 items-center justify-between mt-2">
                  <h1 className="font-medium text-lg">1. Name:</h1>
                  <input
                    type="text"
                    className="bg-transparent border w-[65%] xs:w-auto border-secondary px-2 py-1 rounded "
                    placeholder="Patient Name"
                    name="name"
                    value={patientData.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex gap-5 xs:gap-2 items-center justify-between mt-2">
                  <h1 className="font-medium text-lg">2. Address:</h1>
                  <input
                    type="text"
                    className="bg-transparent border w-[65%] xs:w-auto border-secondary px-2 py-1 rounded "
                    placeholder="Enter Address"
                    name="address"
                    value={patientData.address}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex gap-5 xs:gap-2 items-center justify-between mt-2">
                  <h1 className="font-medium text-lg">3. Age:</h1>
                  <input
                    type="text"
                    className="bg-transparent border w-[65%] xs:w-auto border-secondary px-2 py-1 rounded "
                    placeholder="Enter Age"
                    name="age"
                    value={patientData.age}
                    onChange={handleChange}
                  />
                </div>
                <div className="flex gap-5 xs:gap-2 items-center justify-between mt-2">
                  <h1 className="font-medium text-lg">4. Mobile:</h1>
                  <input
                    type="text"
                    className="bg-transparent border w-[65%] xs:w-auto border-secondary px-2 py-1 rounded "
                    placeholder="Patient Mobile"
                    name="phone"
                    // readOnly
                    defaultValue={"+91"}
                    onChange={handleChange}
                  />
                </div>
              </div>

              {/* For date & time */}
              <div className="mt-3">
                <h1 className="text-lg gap-2 flex font-semibold text-center items-center px-4 sm:px-0">
                  3. Select Date & Time
                  <Icon
                    icon="tabler:chevron-down"
                    color="black"
                    className="text-3xl cursor-pointer"
                    onClick={showDateAndTime}
                  />
                </h1>
                {/* Date and Time Container */}
                <div className={` ${visible ? "md:flex" : "hidden"}`}>
                  {/* Date Container */}
                  <div className="mx-4 mt-4">
                    <Calendar
                      onChange={onChange}
                      minDate={tomorrow}
                      defaultValue={tomorrow}
                    />
                  </div>
                  {/* Time Container */}
                  <div className="mx-4 my-4">
                    <h1 className="font-bold text-lg">Time</h1>
                    <div className="flex gap-3 mt-2 flex-wrap xl:w-[90%]">
                      {timingArr}
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid with 2 columns */}
            <div className="lgGrid:grid lgGrid:grid-cols-[70%_30%] 2xl:w-[95%]">
              {/* Left Side */}
              <div className="md:mt-8 lgGrid:mt-4">
                <IndividualSelectedTest
                  filteredTests={testArr}
                  removeTest={removeTest}
                />
              </div>
              {/* End of Left Side */}
              {/* Right Side */}
              <div>
                {/* about Lab */}
                <div className="border-[1px] rounded border-borderGray mt-4 mx-2 sm:w-1/2 sm:mx-auto lgGrid:w-full">
                  <div className="p-3">
                    <h1 className="font-medium text-lg">
                      {response.labData.name}
                    </h1>
                    <div className="space-y-1 mt-2">
                      <div className="flex gap-1 items-center">
                        <Icon
                          icon={"bxs:certification"}
                          color={"#E97F0E"}
                          className="text-lg"
                        />
                        <h3>Certified by NABL</h3>
                      </div>
                      {/* <div className="flex gap-1 items-center">
                    <Icon
                      icon={"material-symbols:group"}
                      color={"#E97F0E"}
                      className="text-lg"
                    />
                    <h3>15 booked this week</h3>
                  </div> */}
                    </div>
                  </div>
                  {/* <div className="border-t border-borderGray">
                <div className="flex items-center justify-between px-3 py-1">
                  <h2 className="text-lg">About Lab</h2>
                  <Icon
                    icon="tabler:chevron-down"
                    color="black"
                    className="text-3xl"
                  />
                </div>
              </div> */}
                </div>
                {/* end about lab*/}

                {/* selected date time */}
                <div className="mx-3 mt-3 sm:text-center lgGrid:text-left">
                  <h2 className="text-lg font-medium">Selected Date & Time</h2>
                  <h3 className="">Date: {value.toLocaleDateString()}</h3>
                  {appoint === "" ? (
                    <h3 className="text-red font-semibold">
                      Please Select Time
                    </h3>
                  ) : (
                    <h3>Time: {appoint}</h3>
                  )}
                  {/* <h3>Time: {appoint}</h3> */}
                </div>
                {/* end selected date time */}

                {/* Booking Summary */}
                <div className="mt-4 sm:w-3/4 md:w-3/5 lg:w-1/2 sm:mx-auto lgGrid:w-full">
                  <h1 className="text-center font-bold text-2xl">
                    Booking Summary
                  </h1>
                  <div className="border-[1px] border-borderGray px-3 py-4 space-y-1 rounded mt-3 mx-2  ">
                    {/* Test prices div */}
                    {testArr.map((test) => {
                      return (
                        <div
                          key={test._id}
                          className="flex gap-1 justify-between"
                        >
                          <h1 className="font-medium w-[77%] text-xl">
                            {test.name}
                          </h1>
                          <h1 className="text-xl">₹ {test.price}</h1>
                        </div>
                      )
                    })}
                    {/* Test Prices Div end */}

                    {/* Discount div */}
                    <div className="border-t border-b border-borderGray py-3 space-y-2">
                      <div className="flex gap-1 justify-between">
                        <h1 className="font-semibold text-xl">Total MRP</h1>
                        <h1 className="font-medium text-xl">₹{totalMrp}</h1>
                      </div>
                      <div className="flex gap-1 justify-between">
                        <h1 className="font-medium text-lg">
                          Discount ({response.labData.discount}%)
                        </h1>
                        <h1 className="font-medium text-xl">
                          ₹ {discountPrice}
                        </h1>
                      </div>
                      {/* <div className="flex gap-1 justify-between">
                        <input
                          type="text"
                          placeholder="Apply Coupon"
                          className="font-medium text-base border-[1px] rounded border-borderGray placeholder:font-light px-1"
                        />
                        <button className="font-medium text-base bg-primary text-white px-2 rounded">
                          Apply
                        </button>
                      </div> */}
                    </div>
                    {/* Discount div end */}

                    {/* Total Price */}
                    <div className="pt-2">
                      <div className="flex gap-1 justify-between">
                        <h1 className="font-semibold text-xl">Total Amount</h1>
                        <h1 className="font-medium text-xl">₹{finalPrice}</h1>
                      </div>
                    </div>
                    {/* Total Price END */}
                  </div>
                  {/* <Link to="/booking"> */}
                  <div className="flex justify-center mx-3 my-4">
                    <button
                      className="bg-secondary text-white font-medium text-xl px-2 rounded-lg py-1 w-full"
                      onClick={handleSubmit}
                    >
                      Continue
                    </button>
                    <ReactModal
                      isOpen={modalIsOpen}
                      style={customStyles}
                      ariaHideApp={false}
                    >
                      <LoginPopup
                        closeModal={closeModal}
                        whereToNavigate="/confirmed"
                        type="user"
                        postreqData={patientbookingData}
                        origin="booking"
                        bookingConfiremedData={bookingConfiremedData}
                      />
                    </ReactModal>
                  </div>
                  {/* </Link> */}
                </div>
                {/* End Booking Summary */}

                {/* End of Right Side */}
              </div>

              {/* End of Grid */}
            </div>

            {/* End of Whole Container . Add all things before this */}
          </div>

          <Footer />
        </div>
      )}
    </div>
  )
}
