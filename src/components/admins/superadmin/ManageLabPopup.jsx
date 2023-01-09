import React from "react"
import {Icon} from "@iconify/react"
import Select from "react-select"
import axios from "axios"

export default function ManageLabPopup(props) {
  const {closeModal, selectedLab} = props

  const [saveDisabled, setSaveDisabled] = React.useState(true)

  // console.log(selectedLab)

  const paymentCycleOptions = [
    {value: "Weekly", label: "Weekly"},
    {value: "Monthly", label: "Monthly"},
    {value: "Quarterly", label: "Quarterly"},
    {value: "Half-yearly", label: "Half-yearly"},
    {value: "Yearly", label: "Yearly"},
  ]

  const [labData, setLabData] = React.useState({
    discount: "",
    comission: "",
    homeCharge: "",
    minimumCharge: "",
  })

  const handleLabData = (e) => {
    const {name, value} = e.target
    setLabData({...labData, [name]: value})

    if (labData.discount != "" && labData.comission != "") {
      setSaveDisabled(false)
    }
  }

  const [paymentCycle, setPaymentCycle] = React.useState("")

  const handlePaymentCycleChange = (paymentCycle) => {
    setPaymentCycle(paymentCycle.value)
  }

  // console.log(paymentCycle)

  const handleSave = () => {
    axios
      .patch(
        `${import.meta.env.VITE_APP_URI}/api/v1/admin/lab/${selectedLab._id}`,
        {
          discount: labData.discount,
          comission: labData.comission,
          homeCharge: labData.homeCharge,
          minimumCharge: labData.minimumCharge,
          paymentCycle: paymentCycle,
        },
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("superAdminToken")}`,
          },
        }
      )
      .then((res) => {
        closeModal()
        // console.log(res.data)
      })
      .catch((err) => {
        console.log(err)
        // console.log(err.request)
      })
    // console.log(selectedLab._id)
    // console.log(labData)
  }

  return (
    <div className="px-12 py-8">
      <Icon
        icon="radix-icons:cross-2"
        color="#f03a47"
        className="text-3xl cursor-pointer absolute right-0 lg:right-6 lg:top-5"
        onClick={closeModal}
      />
      <h1 className="text-center font-semibold text-3xl mt-6">
        Lab Information
      </h1>
      <div className="mt-5 space-y-4">
        <div className="flex gap-8">
          <h2 className="text-2xl font-semibold min-w-[18rem]">Name:</h2>
          <h2 className="text-2xl">{selectedLab.name}</h2>
        </div>
        <div className="flex gap-8">
          <h2 className="text-2xl font-semibold min-w-[18rem]">Mobile:</h2>
          <h2 className="text-2xl">{selectedLab.submitter.phone}</h2>
        </div>
        <div className="flex gap-8">
          <h2 className="text-2xl font-semibold min-w-[18rem]">Email:</h2>
          <h2 className="text-2xl">{selectedLab.submitter.email}</h2>
        </div>
        <div className="flex gap-8">
          <h2 className="text-2xl font-semibold min-w-[18rem]">Address: </h2>
          <h2 className="text-2xl">{selectedLab.address.address}</h2>
        </div>
        <div className="flex gap-5">
          <h2 className="text-2xl font-semibold min-w-[18rem]">Discount:</h2>
          <input
            type="text"
            className="border-[1px] border-secondary ml-4"
            name="discount"
            onChange={handleLabData}
            value={labData.discount}
            // defaultValue={selectedLab.discount}
          />
        </div>
        <div className="flex gap-5">
          <h2 className="text-2xl font-semibold min-w-[18rem]">Comission:</h2>
          <input
            type="text"
            className="border-[1px] border-secondary ml-4"
            name="comission"
            onChange={handleLabData}
            value={labData.comission}
            // defaultValue={selectedLab.comission}
          />
        </div>
        <div className="flex gap-5">
          <h2 className="text-2xl font-semibold min-w-[18rem]">
            Home Collection Charge:
          </h2>
          <input
            type="text"
            className="border-[1px] border-secondary ml-4"
            name="homeCharge"
            onChange={handleLabData}
            value={labData.homeCharge}
            // defaultValue={selectedLab.comission}
          />
        </div>
        <div className="flex gap-5">
          <h2 className="text-2xl font-semibold min-w-[18rem]">
            Minimum Charge:
          </h2>
          <input
            type="text"
            className="border-[1px] border-secondary ml-4"
            name="minimumCharge"
            onChange={handleLabData}
            value={labData.minimumCharge}
            // defaultValue={selectedLab.comission}
          />
        </div>
        <div className="flex gap-5">
          <h2 className="text-2xl font-semibold min-w-[18rem]">
            Payment Cycle:
          </h2>
          <Select
            options={paymentCycleOptions}
            className="w-[30%]"
            onChange={handlePaymentCycleChange}
          />
          {/* <div className="flex items-center gap-1 cursor-pointer">
            <h2 className="text-2xl">Monthly</h2>
            <Icon icon={"mdi:chevron-down"} className="text-3xl" />
          </div> */}
        </div>
      </div>
      <div className="flex justify-evenly mt-8">
        <button
          className={`border-[1px] border-secondary px-8 py-1 rounded-lg text-2xl font-semibold ${
            saveDisabled
              ? "cursor-not-allowed opacity-50"
              : "opacity-100 cursor-pointer"
          } `}
          disabled={saveDisabled}
          onClick={handleSave}
        >
          Save
        </button>
        {/* <button className="border-[1px] border-secondary px-8 py-1 rounded-lg text-2xl font-semibold">
          Edit Profile
        </button> */}
      </div>
    </div>
  )
}
