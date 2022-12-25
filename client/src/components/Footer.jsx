import {Icon} from "@iconify/react"
import React from "react"
import {Link} from "react-router-dom"

export default function Footer() {
  return (
    <div className="bg-primary  text-white flex flex-col items-center py-8 sm:flex-row sm:justify-between sm:items-start sm:px-8 lg:px-14">
      <Link to="/">
        <div>
          <div className="bg-background rounded-full w-fit mx-auto">
            <img
              src="images/logo.png"
              alt="MyTestCompare logo"
              className="w-28 p-1 mx-auto md:w-28 xl:w-32"
            />
          </div>
          <h1 className="font-bold mt-3 text-2xl md:text-3xl xl:text-4xl">
            MyTest Compare
          </h1>
        </div>
      </Link>

      <div className="mt-4 sm:flex relative before:bg-white sm:before:absolute before:h-[90%] before:w-[2px] before:top-0 sm:before:left-[-20%] lg:before:left-[-40%] xl:before:left-[-50%]">
        <div>
          <h3 className="font-medium text-xl mb-2">Quick Links</h3>
        </div>

        <div className="text-xl font-normal text-center flex flex-col items-center sm:items-start sm:ml-4 md:ml-7 xl:ml-12">
          <Link to="/">
            <h4 className="mb-1 hover:border-b-2 cursor-pointer w-fit">Home</h4>
          </Link>
          <Link to="">
            <h4 className="mb-1 hover:border-b-2 cursor-pointer w-fit">
              Subscribe
            </h4>
          </Link>
          <Link to="/becomePartner">
            <h4 className="mb-1 hover:border-b-2 cursor-pointer w-fit">
              Become Partner
            </h4>
          </Link>
          <Link to="contact">
            <h4 className="mb-1 hover:border-b-2 cursor-pointer w-fit">
              Contact Us
            </h4>
          </Link>
          <h4 className="mb-1 hover:border-b-2 w-fit cursor-pointer">Login</h4>
        </div>
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-xl text-center">Follow Us on</h2>
        <div className="flex gap-3 mt-2">
          <Icon icon="mdi:instagram" color="white" className="text-4xl" />
          <Icon icon="mdi:twitter" color="white" className="text-4xl" />
          <Icon icon="mdi:linkedin" color="white" className="text-4xl" />
        </div>
      </div>
    </div>
  )
}
