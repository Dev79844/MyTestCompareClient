import React, {useState} from "react"

import AdminSidebar from "../../../components/admins/admin/AdminSidebar"
import TopStrip from "../../../components/admins/admin/TopStrip"

export default function AddUpdateTests() {
  const [isUploading, setIsUploading] = useState(false)

  const headers = new Headers()
  headers.append(
    "Authorization",
    "Bearer " + localStorage.getItem("adminToken")
  )

  const [file, setFile] = useState(null)
  const [buttonDisabled, setButtonDisabled] = useState(true)

  const handleFileChange = (event) => {
    setFile(event.target.files[0])
    setButtonDisabled(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setIsUploading(true)

    // Create a FormData object to store the file
    const formData = new FormData()
    formData.append("tests", file)

    // Make a POST request to the server to upload the file
    fetch(`${import.meta.env.VITE_APP_URI}/api/v1/test/uploadTest`, {
      method: "POST",
      body: formData,
      headers: headers,
    })
      .then((response) => {
        if (!response.ok) {
          throw new Error(response.statusText)
        }
        setFile(null)
        alert("File uploaded successfully")
        setButtonDisabled(true)

        // return response.text()
      })
      .catch((error) => {
        console.error(error)
      })
      .finally(() => {
        setIsUploading(false)
        console.log(file)
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
                disabled={buttonDisabled}
                className={`bg-primary text-white px-8 text-lg rounded py-[2px] ${
                  buttonDisabled
                    ? "cursor-not-allowed opacity-60"
                    : "cursor-pointer opacity-100"
                } `}
              >
                {isUploading ? "Uploading..." : "Upload"}
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
