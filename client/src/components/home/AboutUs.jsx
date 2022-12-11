import React from "react"

export default function AboutUs() {
  return (
    <div className="px-3 mt-12 my-20">
      <div className="md:flex md:px-5">
        <img src="images/home/aboutus.svg" alt="discount image"  className="sm:w-4/5 sm:mx-auto md:w-3/4 lg:w-3/5 "/>
        <div className="mt-8 md:mx-5 lg:mx-10">
          <h1 className="font-bold text-2xl text-center md:text-left">About Us</h1>
          <p className="text-lg md:text-xl px-4 font-medium mt-2 md:px-0">
            MyTestCompare is a marketplace for pathology lab Test which provides
            comparison & transparency between the different certified labs.
          </p>
        </div>
      </div>
    </div>
  )
}
