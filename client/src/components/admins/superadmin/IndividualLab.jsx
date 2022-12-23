import React from "react"
import {Icon} from "@iconify/react"
import ReactModal from "react-modal"

import allLab from "../../../data/allLab"
import ManageLabPopup from "./ManageLabPopup"

export default function IndividulaLab() {
  const [manageLabModalIsOpen, setManageLabModalIsOpen] = React.useState(false)

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
      width: "50vw",
    },
  }

  function openManageLabModal() {
    setManageLabModalIsOpen(true)
  }
  function closeModal() {
    setManageLabModalIsOpen(false)
  }

  document.body.style.overflow = manageLabModalIsOpen ? "hidden" : "auto"

  const allLabs = allLab.map((lab, index) => (
    <div
      key={index}
      className={`grid grid-cols-manageLabs text-xl  px-3 py-3
      ${index % 2 != 0 ? "bg-secondary-withOpacity" : "bg-transparent"}
      `}
    >
      <h2 className="font-medium"> {lab.name} </h2>
      <h2 className="justify-self-center">{lab.discount}%</h2>
      <h2 className="justify-self-center">{lab.comission}%</h2>
      <h2 className="justify-self-center">{lab.paymentCycle}</h2>
      <div
        className="flex items-center gap-2 justify-self-center cursor-pointer"
        onClick={openManageLabModal}
      >
        <Icon icon={"ant-design:setting-outlined"} className="text-2xl" />
        <h2>Manage</h2>
      </div>
    </div>
  ))

  return (
    <div>
      <div className="space-y-2">{allLabs}</div>
      <div>
        <ReactModal
          isOpen={manageLabModalIsOpen}
          style={customStyles}
          ariaHideApp={false}
        >
          <ManageLabPopup closeModal={closeModal} />
        </ReactModal>
      </div>
    </div>
  )
}
