import {Icon} from "@iconify/react"
import React from "react"
import {Link, useNavigate} from "react-router-dom"

export default function Sidebar(props) {
  const {show, setShow} = props

  const handleShow = () => {
    setShow(!show)
  }

  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem("token")
    navigate("/")
  }

  return (
    <div
      className={` flex w-fit px-4 bg-white min-h-screen xs:w-4/5 sm:w-3/5 absolute 
        top-0 left-0 z-1 transition-all duration-500 ease-in-out lg:static lg:w-full lg:transition-none lg:duration-0 lg:ease-none z-10
        ${show ? "translate-x-0" : "-translate-x-full lg:translate-x-0"}`}
    >
      <div className="mt-5">
        <div className="flex justify-between items-center">
          <Link to="/">
            <div className="flex items-center">
              <img
                src="images/logo.png"
                alt="MyTestCompare Logo"
                className="w-1/5"
              />
              <h1 className="font-medium text-secondary-dark text-2xl">
                My Test <span className="text-primary">Compare</span>
              </h1>
            </div>
          </Link>

          <Icon
            icon="radix-icons:cross-2"
            color="#f03a47"
            className="text-6xl cursor-pointer lg:hidden"
            onClick={handleShow}
          />
        </div>

        <div className="px-3 mt-4 space-y-5">
          <div
            className={`flex items-center gap-3 p-4 ${
              props.active == "profile" ? "bg-secondary-withOpacity" : null
            } `}
          >
            <Icon
              icon={"pajamas:profile"}
              color={"black"}
              className="text-3xl"
            />
            <Link to="/viewProfile">
              <h2 className="text-2xl font-medium">View Profile</h2>
            </Link>
          </div>
          <div
            className={`flex items-center gap-3 p-4 ${
              props.active == "reports" ? "bg-secondary-withOpacity" : null
            } `}
          >
            <Icon
              icon={"material-symbols:lab-profile-sharp"}
              color={"black"}
              className="text-3xl"
            />
            <Link to="/viewReports">
              <h2 className="text-2xl font-medium">View Reports</h2>
            </Link>
          </div>
          <div
            className={`flex items-center gap-3 p-4 ${
              props.active == "bookings" ? "bg-secondary-withOpacity" : null
            } `}
          >
            <Icon icon={"uis:calender"} color={"black"} className="text-3xl" />
            <Link to="/viewBookings">
              <h2 className="text-2xl font-medium">My Bookings</h2>
            </Link>
          </div>
          <div
            className={`flex items-center gap-3 p-4 ${
              props.active == "trackOrder" ? "bg-secondary-withOpacity" : null
            } `}
          >
            <Icon
              icon={"material-symbols:location-on"}
              color={"black"}
              className="text-3xl"
            />
            <Link to="/trackOrder">
              <h2 className="text-2xl font-medium">Track order</h2>
            </Link>
          </div>
        </div>

        <div className="mt-4 px-3">
          <button
            className="bg-primary text-white font-medium px-5 py-1 rounded w-3/5 text-2xl lg:w-4/5"
            onClick={handleLogOut}
          >
            Log Out
          </button>
        </div>
      </div>
    </div>
  )
}
