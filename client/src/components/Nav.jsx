import React from "react"
import { Link } from "react-router-dom"

export default function Nav() {
  return (
    <Link to="/">
      <div className="flex items-center gap-2 justify-center my-3">
        <img src="images/logo.png" alt="MyTestCompare Logo" className="w-24   " />
        <h2 className="text-secondary-dark font-medium text-2xl">
          My Test <span className="text-primary">Compare</span>
        </h2>
      </div>
    </Link>
  )
}
