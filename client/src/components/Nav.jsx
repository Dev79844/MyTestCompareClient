import React from "react"
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <Link to="/">
      <div className="flex items-center gap-2 justify-center my-2">
        <img src="images/logo.png" alt="MyTestCompare Logo" className="w-[100px] md:w-28" />
        <h2 className="text-secondary-dark font-medium text-[26px] md:text-3xl">
          My Test <span className="text-primary">Compare</span>
        </h2>
      </div>
    </Link>
  )
}
