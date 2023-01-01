import axios from "axios"
import React from "react"
import ReactModal from "react-modal"
import {useNavigate, Link} from "react-router-dom"

import LoginPopup from "./LoginPopup"

export default function MiniNav() {
  const navigate = useNavigate()

  const isUserLoggedIn = localStorage.getItem("token") ? true : false

  const [modalIsOpen, setModalIsOpen] = React.useState(false)

  const customStyles = {
    overlay: {
      backgroundColor: "rgba(0, 0, 0, 0.8)",
    },
    content: {
      height: "fit-content",
      top: "50%",
      left: "50%",
      transform: "translate(-50%, -50%)",
      padding: 0,
      width: "75vw",
    },
  }

  function openModal() {
    isUserLoggedIn
      ? axios
          .get("http://localhost:3000/api/v1/user/auth-verify", {
            headers: {
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            // console.log(res)
            if (res.status === 200) {
              navigate("/viewProfile")
            }
          })
          .catch((err) => {
            if (err.response.status === 401) {
              alert("Session expired. Please login again.")
              localStorage.removeItem("token")
              setModalIsOpen(true)
            }
          })
      : setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  // document.body.style.overflow = modalIsOpen ? "hidden" : "auto"

  return (
    <div className="bg-black text-white flex justify-between p-2 text-lg">
      <h4>Call to book: +91 99999 99999</h4>
      {isUserLoggedIn ? (
        <h4 onClick={openModal} className="cursor-pointer">
          My Profile
        </h4>
      ) : (
        <h4 onClick={openModal} className="cursor-pointer">
          Login
        </h4>
      )}

      <ReactModal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
        <LoginPopup closeModal={closeModal} whereToNavigate="/" type="user" />
      </ReactModal>
    </div>
  )
}
