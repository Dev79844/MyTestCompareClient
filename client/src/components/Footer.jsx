import { Icon } from "@iconify/react";
import React from "react";

export default function Footer() {
    return (
      <div className="bg-primary text-white flex flex-col items-center mt-20 py-8">
        <div>
          <img
            src="images/logo.png"
            alt="MyTestCompare logo"
            className="w-20 mx-auto"
          />
          <h1 className="font-bold mt-3 text-2xl "> MyTest Compare</h1>
        </div>
        <div className="mt-4 ">
          <h3 className="font-medium text-xl mb-2">Quick Links</h3>

          <div className="text-xl font-normal text-center flex flex-col items-center ">
            <h4 className="mb-1 hover:border-b-2 cursor-pointer w-fit">Home</h4>
            <h4 className="mb-1 hover:border-b-2 cursor-pointer w-fit">Subscribe</h4>
            <h4 className="mb-1 hover:border-b-2 cursor-pointer w-fit">Become Partner</h4>
            <h4 className="mb-1 hover:border-b-2 cursor-pointer w-fit">Contact Us</h4>
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