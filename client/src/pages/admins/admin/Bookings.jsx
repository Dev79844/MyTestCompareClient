import React from "react"
import AdminSidebar from "../../../components/admins/admin/AdminSidebar"
import TopStrip from "../../../components/admins/admin/TopStrip"
import {Icon} from "@iconify/react"
import ReactModal from "react-modal"
import ClientInfoPopup from "../../../components/admins/admin/Popups/ClientInfoPopup"
import AssignPhlebotomistPopup from "../../../components/admins/admin/Popups/AssignPhlebotomistPopup"
import UploadReportPopup from "../../../components/admins/admin/Popups/UploadReportPopup"
import axios from "axios"

export default function Bookings() {
  const [clientInfoModalIsOpen, setClientInfoModalIsOpen] =
    React.useState(false)
  const [assignPhlebotomistModalIsOpen, setAssignPhlebotomistModalIsOpen] =
    React.useState(false)
  const [uploadReportModalIsOpen, setUploadReportModalIsOpen] =
    React.useState(false)
  const [elementid, setElementid] = React.useState()

  // const [bookings, setBookings] = React.useState([])
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
      width: "40vw",
    },
  }

  // document.body.style.overflow = clientInfoModalIsOpen ? "hidden" : "auto"

  function openClientInfoModal(booking) {
    setElementid(booking._id)
    setClientInfoModalIsOpen(true)
    // console.log(elementid)
  }

  function openAssignPhlebotomistModal() {
    setAssignPhlebotomistModalIsOpen(true)
  }

  function openUploadReportModal() {
    setUploadReportModalIsOpen(true)
  }

  function closeModal() {
    setClientInfoModalIsOpen(false)
    setAssignPhlebotomistModalIsOpen(false)
    setUploadReportModalIsOpen(false)
  }

  const bookings = [
    "Ankush Raje",
    "John David",
    "Victoria Rose",
    "Michael Thompson",
    "Sarah Johnson",
    "Jason Reed",
    "Adam Hernandez",
    "Jessica Davis",
  ]

  const [fetchedBookings, setFetchedBookings] = React.useState([])

  React.useEffect(() => {
    const getBookings = async () => {
      const booking = await axios.get(
        "http://localhost:3000/api/v1/manage/booking",
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("adminToken")}`,
          },
        }
      )
      // console.log(booking.data.data.bookings)
      setFetchedBookings(booking.data.data.bookings)
      // setBookings(booking.data.data.bookings)
    }
    getBookings()
  }, [])

  // Booking object
  /**
   * {
  "patient": {
    "name": "Athena Noel",
    "address": "Architecto asperiore",
    "phone": "+918980856832",
    "age": "Omnis quidem minima "
  },
  "_id": "63b02291080e204637dabe1c",
  "user": "63b0106ab81371ea269d3a94",
  "lab": "63b01069080e204637dabcb7",
  "tests": [
    {
      "testId": "63b01722080e204637dabd78",
      "name": "2D Echo",
      "price": 1120,
      "_id": "63b02291080e204637dabe1d"
    },
    {
      "testId": "63b01722080e204637dabd79",
      "name": "CBC - Complete Blood Count",
      "price": 500,
      "_id": "63b02291080e204637dabe1e"
    }
  ],
  "price": 1620,
  "verified": true,
  "completed": false,
  "status": "CREATED",
  "createdAt": "2022-12-31T11:52:49.651Z",
  "updatedAt": "2022-12-31T11:52:49.651Z",
  "__v": 0
}
   */

  const bookingsArr = fetchedBookings.map((booking) => (
    <div
      key={booking._id}
      className="grid grid-cols-4 border-[1px] border-secondary rounded-2xl px-6 py-3 gap-3"
    >
      <h2
        className="cursor-pointer w-fit"
        onClick={() => openClientInfoModal(booking)}
      >
        {booking.patient.name}
      </h2>
      <div className="space-x-2 flex items-center">
        <input
          type="radio"
          name="assignPhlebotomist"
          id="assignPhlebotomist"
          className="h-4 w-4 accent-primary cursor-pointer"
        />
        <h2
          htmlFor="assignPhlebotomist"
          className="cursor-pointer"
          onClick={openAssignPhlebotomistModal}
        >
          Assign Phlebotomist
        </h2>
      </div>
      <div className="space-x-2 justify-self-center ">
        <input
          type="radio"
          name="sampleTested"
          id="sampleTested"
          className="h-4 w-4 accent-primary cursor-pointer"
        />
        <label htmlFor="sampleTested" className="cursor-pointer">
          Sample Tested
        </label>
      </div>
      <div className="flex gap-2 items-center justify-center ">
        <Icon
          icon="material-symbols:upload-rounded"
          className="text-[26px] cursor-pointer"
        />
        <h2 className="cursor-pointer" onClick={openUploadReportModal}>
          Upload Report
        </h2>
      </div>
    </div>
  ))

  return (
    <div className="font-Roboto bg-background">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <AdminSidebar active="bookings" />
        <div className="px-5 mt-4">
          <TopStrip />
          <div className="mt-5 ml-5">
            <h2 className="text-4xl font-medium ">Client Bookings</h2>
            {/* All Bookings will be shown in this div */}
            <div className="bg-white mt-5 p-7  rounded-3xl space-y-4">
              {bookingsArr}
            </div>
          </div>
        </div>
      </div>
      <ReactModal
        isOpen={clientInfoModalIsOpen}
        style={customStyles}
        ariaHideApp={false}
      >
        <ClientInfoPopup
          closeModal={closeModal}
          fetchedBookings={fetchedBookings}
          elementid={elementid}
        />
      </ReactModal>
      <ReactModal
        isOpen={assignPhlebotomistModalIsOpen}
        style={customStyles}
        ariaHideApp={false}
      >
        <AssignPhlebotomistPopup closeModal={closeModal} />
      </ReactModal>
      <ReactModal
        isOpen={uploadReportModalIsOpen}
        style={customStyles}
        ariaHideApp={false}
      >
        <UploadReportPopup closeModal={closeModal} />
      </ReactModal>
    </div>
  )
}
