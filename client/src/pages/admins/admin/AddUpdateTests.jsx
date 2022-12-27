import React, {useState} from "react"

import AdminSidebar from "../../../components/admins/admin/AdminSidebar"
import TopStrip from "../../../components/admins/admin/TopStrip"

export default function AddUpdateTests() {
  const [file, setFile] = useState(null)

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
  }

  const handleSubmit = (event) => {
    event.preventDefault()

    // Create a FormData object to store the file
    const formData = new FormData()
    formData.append("tests", file)

    // Make a POST request to the server to upload the file
    fetch("http://localhost:3000/api/v1/test/uplaodTest", {
      method: "POST",
      body: formData,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        return response.json()
      })
      .then((data) => {
        console.log(data)
      })
      .catch((error) => {
        console.error(error)
      })
  }

  return (
    <div className="font-Roboto bg-background">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <AdminSidebar active="addUpdateTests" />
        <div className="px-5 mt-4">
          <TopStrip />
          <div className="mt-5 ml-5 flex justify-between">
            <h2 className="text-4xl font-medium "> Add/Update Tests</h2>
            <form onSubmit={handleSubmit} className="space-x-4">
              <label
                htmlFor="file"
                className="text-2xl font-medium cursor-pointer"
              >
                {file ? file.name : " Click to select a file:"}
              </label>
              <input type="file" id="file" onChange={handleFileChange} />
              <button
                type="submit"
                className="bg-primary text-white px-8 text-lg rounded py-[2px]"
              >
                Upload
              </button>
            </form>
          </div>
          <input type={"file"} />
          <div className="ml-5 mt-8">
            <h2 className="text-2xl font-medium ">
              Important Instructions for Uploading Excel
            </h2>
          </div>
        </div>
      </div>
    </div>
  )
}
