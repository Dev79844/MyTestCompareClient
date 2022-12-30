import React from "react"

export default function LabDetails(props) {
  const {lab} = props
  return (
    <div className="flex lg:relative flex-col items-center mt-5 lg:w-1/2 lg:after:absolute lg:after:bg-primary lg:after:w-[2px] lg:after:h-full lg:after:right-0 lg:after:top-0">
      <img
        src="images/summary-success/lab.png"
        alt="lab-logo"
        className="w-1/4 xs:w-[20%] md:w-32"
      />
      <h1 className="font-bold text-2xl mt-4">{lab.labName}</h1>
      <h3 className="font-light text-lg text-center mt-4 px-3 sm:w-3/4 sm:mx-auto sm:px-0 md:w-3/5 lg:w-4/5">
        Janta Nagar Ring Rd, Parshwanath Nagar, ONGC Colony, Chandkheda,
        Ahmedabad, Gujarat 382424
      </h3>
      <h3 className="font-medium mt-4 text-lg">Phone: 079 4000 4000</h3>
    </div>
  )
}
