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
    isUserLoggedIn ? navigate("/viewProfile") : setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  // document.body.style.overflow = modalIsOpen ? "hidden" : "auto"

  return (
    <div className="bg-black text-white flex justify-between p-2 text-lg">
      <h4>Call to book: +91 99999 99999</h4>
      {isUserLoggedIn ? (
        <Link to="/viewProfile">
          <h4 onClick={openModal} className="cursor-pointer">
            My Profile
          </h4>
        </Link>
      ) : (
        <h4 onClick={openModal} className="cursor-pointer">
          Login
        </h4>
      )}

      <ReactModal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
        <LoginPopup closeModal={closeModal} whereToNavigate="/" />
      </ReactModal>
    </div>
  )
}
