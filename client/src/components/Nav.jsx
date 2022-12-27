import React from "react"
import {Link} from "react-router-dom"

export default function Nav() {
  return (
    <div className="flex items-center gap-2 justify-center my-2">
      <Link to="/">
        <img
          src="images/logo.png"
          alt="MyTestCompare Logo"
          className="w-[100px] md:w-28"
        />
      </Link>
      <Link to="/">
        <h2 className="text-secondary-dark font-medium text-[26px] md:text-3xl">
          My Test <span className="text-primary">Compare</span>
        </h2>
      </Link>
    </div>
  )
}
