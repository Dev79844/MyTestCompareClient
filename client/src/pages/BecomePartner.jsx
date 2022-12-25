import {Icon} from "@iconify/react"
import React from "react"
import "../style.css"
import {useNavigate} from "react-router-dom"

import MiniNav from "../components/MiniNav"
import Nav from "../components/Nav"
import Footer from "../components/Footer"
import axios from "axios"

export default function BecomePartner() {

  const navigate = useNavigate()

  const [name, setName] = React.useState("")
  const [address, setAddress] = React.useState("")
  const [city, setCity] = React.useState("")
  const [zipcode, setZipcode] = React.useState("")
  const [state, setState] = React.useState("")
  const [licenseNumber, setLicenseNumber] = React.useState("")
  const [submitter_phone, setsubmitter_phone] = React.useState("+91")
  const [logo, setLogo] = React.useState([])
  const [images, setImages] = React.useState([])
  const [submitter_name, setsubmitter_name] = React.useState("")
  const [submitter_email, setsubmitter_email] = React.useState("")

  const handleSubmit = async({name,address,city,zipcode,state,licenseNumber, submitter_phone, submitter_name, submitter_email}) => {
    JSON.stringify(name)
    JSON.stringify(address)
    JSON.stringify(city)
    JSON.stringify(zipcode)
    JSON.stringify(state)
    JSON.stringify(licenseNumber)
    JSON.stringify(submitter_phone)
    JSON.stringify(submitter_name)
    JSON.stringify(submitter_email)
    
    const {data} = await axios.post("http://localhost:3000/api/v1/lab", {submitter_name, submitter_email, submitter_phone, name, address, city, zipcode, state, licenseNumber})

    localStorage.setItem('token', data.token)

    navigate("/adminProfile")
  }


  return (
    <div className="bg-background font-Roboto">
      <MiniNav />
      <Nav />
      <div className="h-screen becomePartnerBg  flex justify-center items-center py-6">
        <div className="bg-primary px-4 py-4 rounded-2xl w-full mx-8 xs:w-auto xs:px-12 lg:px-24 h-fit lg:py-8">
          <h1 className="text-2xl text-center relative after:absolute after:bg-white after:w-full after:h-[1px] after:bottom-0 pb-1 after:left-0 text-white font-bold md:text-3xl">
            Become Partner
          </h1>

          <div className="space-y-4 mt-4 flex flex-col items-center">
            <div>
              <input
                type="text"
                placeholder="Manager Name"
                className="bg-background px-3 py-1 lg:py-2 text-lg lg:px-5 rounded"
                value={submitter_name}
                onChange={(e) => setsubmitter_name(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Manager Email"
                className="bg-background px-3 py-1 lg:py-2 text-lg lg:px-5 rounded"
                value={submitter_email}
                onChange={(e) => setsubmitter_email(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Manager Phone"
                className="bg-background px-3 py-1 lg:py-2 text-lg lg:px-5 rounded"
                value={submitter_phone}
                onChange={(e) => setsubmitter_phone(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Laboratory Name"
                className="bg-background px-3 py-1 lg:py-2 text-lg lg:px-5 rounded"
                value={name}
                onChange={(e) => setName(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Address"
                className="bg-background px-3 py-1 text-lg lg:py-2 lg:px-5 rounded"
                value={address}
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="State"
                className="bg-background px-3 py-1 text-lg lg:py-2 lg:px-5 rounded"
                value={state}
                onChange={(e) => setState(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="City"
                className="bg-background px-3 py-1 text-lg lg:py-2 lg:px-5 rounded"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="Zip Code"
                className="bg-background px-3 py-1 text-lg lg:py-2 lg:px-5 rounded"
                value={zipcode}
                onChange={(e) => setZipcode(e.target.value)}
              />
            </div>
            <div>
              <input
                type="text"
                placeholder="License Number"
                className="bg-background px-3 py-1 text-lg lg:py-2 lg:px-5 rounded"
                value={licenseNumber}
                onChange={(e) => setLicenseNumber(e.target.value)}
              />
            </div>
          </div>
          <div className="mt-4 flex flex-col items-center space-y-2">
            <div className="flex gap-2 items-center">
              <Icon
                icon={"material-symbols:upload-rounded"}
                color={"black"}
                className="text-3xl"
              />
              <label className="text-xl w-[150px] text-white border-[1px] font-bold border-black px-4 py-[2px] rounded">
                <input type="file" />
                  Upload Logo
              </label>
            </div>
            <div className="flex gap-2 items-center">
              <Icon
                icon={"material-symbols:upload-rounded"}
                color={"black"}
                className="text-3xl"
              />
              <label className="text-xl w-[210px] text-white border-[1px] font-bold border-black px-4 py-[2px] rounded">
                <input type="file" />
                  Upload Lab Images
              </label>
            </div>
          </div>
          <div className="flex justify-center mt-4">
            <button className="bg-secondary text-white font-bold text-xl px-8 rounded py-1 lg:px-12" onClick={() => handleSubmit({name,address,city,zipcode,state,licenseNumber,submitter_phone, submitter_name, submitter_email})}>
              Submit
            </button>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}
