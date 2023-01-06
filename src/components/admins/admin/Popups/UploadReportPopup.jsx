import React from "react"
import {Icon} from "@iconify/react"

export default function UploadReportPopup(props) {
  const {closeModal} = props
  return (
    <div className="px-12 py-8">
      <Icon
        icon="radix-icons:cross-2"
        color="#f03a47"
        className="text-3xl cursor-pointer absolute right-0 lg:right-6 lg:top-5"
        onClick={closeModal}
      />
      <h1 className="text-center font-semibold text-3xl mt-6">
        Upload Reports
      </h1>
      <div className="mt-8 space-y-4">
        <div className="flex gap-5">
          <h2 className="text-2xl font-semibold w-20">Name:</h2>
          <h2 className="text-2xl">Ankush Raje</h2>
        </div>
        <div className="flex gap-5">
          <h2 className="text-2xl font-semibold w-20">Tests:</h2>
          <div className="text-2xl space-y-2">
            <div className="flex items-center gap-3 ">
              <h2>1. CBC - Complete Blood Count</h2>
              <Icon
                icon={"material-symbols:upload-rounded"}
                className="text-3xl"
              />
            </div>
            <div className="flex items-center gap-3 ">
              <h2>2. CBC - Complete Blood Count</h2>
              <Icon
                icon={"material-symbols:upload-rounded"}
                className="text-3xl"
              />
            </div>
            <div className="flex items-center gap-3 ">
              <h2>3. CBC - Complete Blood Count</h2>
              <Icon
                icon={"material-symbols:upload-rounded"}
                className="text-3xl"
              />
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-center mt-6">
        <button className="border-[1px] border-secondary px-8 py-1 rounded-lg text-2xl font-semibold">
          Upload Reports
        </button>
      </div>
    </div>
  )
}
