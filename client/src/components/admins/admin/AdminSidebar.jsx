import {Icon} from "@iconify/react"
import React from "react"
import {Link, useNavigate} from "react-router-dom"

export default function AdminSidebar(props) {
  const navigate = useNavigate()

  const handleLogOut = () => {
    localStorage.removeItem("adminToken")
    navigate("/")
  }

  const sidebarItems = [
    {
      name: "Profile",
      icon: "pajamas:profile",
      link: "/adminProfile",
      active: "profile",
    },
    {
      name: "Bookings",
      icon: "uis:calender",
      link: "/labBookings",
      active: "bookings",
    },
    // {
    //   name: "Previous Bookings",
    //   icon: "ic:baseline-history-toggle-off",
    //   link: "/labPreviousBookings",
    //   active: "previousBookings",
    // },
    {
      name: "Analytics",
      icon: "ic:baseline-analytics",
      link: "/labAnalytics",
      active: "analytics",
    },
    {
      name: "Monthly Analytics",
      icon: "mdi:graph-bar",
      link: "/labMonthlyAnalytics",
      active: "monthlyAnalytics",
    },
    {
      name: "Add/Update Tests",
      icon: "mdi:test-tube",
      link: "/labAddUpdateTests",
      active: "addUpdateTests",
    },
    {
      name: "Payment Reminders",
      icon: "material-symbols:payments-outline-rounded",
      link: "/labPaymentReminder",
      active: "paymentReminders",
    },
  ]

  const sidebarItemsList = sidebarItems.map((item, index) => (
    <div
      key={index}
      className={`flex items-center gap-3 p-3 ${
        props.active == item.active ? "bg-secondary-withOpacity" : null
      } `}
    >
      <Icon icon={item.icon} color={"black"} className="text-3xl" />
      <Link to={item.link}>
        <h2 className="text-2xl font-medium">{item.name}</h2>
      </Link>
    </div>
  ))

  return (
    <div
      className={` flex w-fit px-4 bg-white min-h-screen xs:w-4/5 sm:w-3/5 lg:w-full
        `}
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
        </div>

        <div className="px-3 mt-4 space-y-4">{sidebarItemsList}</div>

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
