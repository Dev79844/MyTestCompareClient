import {Icon} from "@iconify/react"
import React, {useState, ChangeEvent} from "react"
import "../../style.css"
import axios from "axios"

export default function PartnerSignUp() {
  const [isSubmitting, setIsSubmitting] = React.useState(false)

  const [logo, setLogo] = React.useState(null)
  const [labImages, setLabImages] = useState([])

  const handleLogoUpload = (e) => {
    setLogo(e.target.files[0])
  }

  const handleLabImagesUpload = (e) => {
    // setLabImages([...labImages, e.target.files[0]])
    setLabImages(e.target.files)
  }
  console.log(labImages)
  console.log(logo)

  const [formDetails, setFormDetails] = React.useState({
    submitter_name: "",
    submitter_email: "",
    submitter_phone: "+91",
    name: "",
    address: "",
    state: "",
    city: "",
    zipcode: "",
    certificate: "",
    timings: "",
  })

  const handleChange = (e) => {
    const {name, value} = e.target
    setFormDetails({...formDetails, [name]: value})
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    try {
      await axios.post(
        `${import.meta.env.VITE_APP_URI}/api/v1/lab`,
        formDetails
      )
      setFormDetails({
        submitter_name: "",
        submitter_email: "",
        submitter_phone: "+91",
        name: "",
        address: "",
        state: "",
        city: "",
        zipcode: "",
        certificate: "",
        timings: "",
      })
      alert("Your request has been submitted")
    } catch (err) {
      console.log(err)
    } finally {
      setIsSubmitting(false)
    }

    // const formData = new FormData()
    // formData.append("labLogo", file)
    // console.log(logo)
    // console.log(labImages)
  }

  return (
    <div className="h-screen becomePartnerBg  flex justify-center items-center py-6 lg:h-auto">
      <div className="bg-primary px-4 py-4 rounded-2xl w-full mx-8 xs:w-auto xs:px-12 lg:px-24 lg:py-8">
        <h1 className="text-2xl text-center relative after:absolute after:bg-white after:w-full after:h-[1px] after:bottom-0 pb-1 after:left-0 text-white font-bold md:text-3xl">
          Become Partner
        </h1>

        <div className="space-y-4 mt-4 flex flex-col items-center">
          <div>
            <input
              type="text"
              placeholder="Manager Name"
              className="bg-background px-3 py-1 lg:py-2 text-lg lg:px-5 rounded"
              name="submitter_name"
              value={formDetails.submitter_name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Manager Email"
              className="bg-background px-3 py-1 lg:py-2 text-lg lg:px-5 rounded"
              name="submitter_email"
              value={formDetails.submitter_email}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Manager Phone"
              className="bg-background px-3 py-1 lg:py-2 text-lg lg:px-5 rounded"
              name="submitter_phone"
              value={formDetails.submitter_phone}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Laboratory Name"
              className="bg-background px-3 py-1 lg:py-2 text-lg lg:px-5 rounded"
              name="name"
              value={formDetails.name}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Address"
              className="bg-background px-3 py-1 text-lg lg:py-2 lg:px-5 rounded"
              name="address"
              value={formDetails.address}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="State"
              className="bg-background px-3 py-1 text-lg lg:py-2 lg:px-5 rounded"
              name="state"
              value={formDetails.state}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="City"
              className="bg-background px-3 py-1 text-lg lg:py-2 lg:px-5 rounded"
              name="city"
              value={formDetails.city}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Zip Code"
              className="bg-background px-3 py-1 text-lg lg:py-2 lg:px-5 rounded"
              name="zipcode"
              value={formDetails.zipcode}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Certificate"
              className="bg-background px-3 py-1 text-lg lg:py-2 lg:px-5 rounded"
              name="certificate"
              value={formDetails.certificate}
              onChange={handleChange}
            />
          </div>
          <div>
            <input
              type="text"
              placeholder="Timings(9AM-5PM)"
              className="bg-background px-3 py-1 text-lg lg:py-2 lg:px-5 rounded"
              name="timings"
              value={formDetails.timings}
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="mt-4 flex flex-col items-center space-y-2">
          <div className="flex gap-4 items-center">
            <Icon
              icon={"material-symbols:upload-rounded"}
              color={"black"}
              className="text-3xl"
            />
            <label className="text-base xs:text-xl w-[180px] xs:w-[210px] text-white border-[1px] font-bold border-black px-4 py-[2px] rounded text-center">
              <input
                type="file"
                className="cursor-pointer"
                onClick={handleLogoUpload}
              />
              Upload Logo
            </label>
          </div>
          <div className="flex gap-4 items-center">
            <Icon
              icon={"material-symbols:upload-rounded"}
              color={"black"}
              className="text-3xl"
            />
            <label className="text-base xs:text-xl w-[180px] xs:w-[210px] text-white border-[1px] font-bold border-black px-4 py-[2px] rounded">
              <input
                type="file"
                className="cursor-pointer"
                multiple="multiple"
                onChange={handleLabImagesUpload}
              />
              Upload Lab Images
            </label>
          </div>
        </div>
        <div className="flex justify-center mt-4">
          <button
            className="bg-secondary text-white font-bold text-xl px-8 rounded py-1 lg:px-12"
            onClick={handleSubmit}
          >
            {isSubmitting ? "Submitting" : "Submit"}
          </button>
        </div>
      </div>
    </div>
  )
}
