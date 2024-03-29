import React, {useEffect} from "react"
import {Icon} from "@iconify/react"
import ReactModal from "react-modal"

import allLab from "../../../data/allLab"
import ManageLabPopup from "./ManageLabPopup"
import axios from "axios"

export default function IndividulaLab() {
  const [manageLabModalIsOpen, setManageLabModalIsOpen] = React.useState(false)
  const [modalClosed, setModalClosed] = React.useState(false)

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

  function openManageLabModal(lab) {
    setManageLabModalIsOpen(true)
    setSelectedLab(lab)
  }
  function closeModal() {
    setManageLabModalIsOpen(false)
    setModalClosed(true)
  }

  // document.body.style.overflow = manageLabModalIsOpen ? "hidden" : "auto"

  const [allLab, setAllLab] = React.useState([])
  const [selectedLab, setSelectedLab] = React.useState()

  useEffect(() => {
    if (modalClosed) {
      setModalClosed(false)
    }

    axios
      .get(`${import.meta.env.VITE_APP_URI}/api/v1/admin/lab/`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("superAdminToken")}`,
        },
      })
      .then((res) => {
        setAllLab(res.data.data.labs)
      })
  }, [modalClosed])

  // console.log(allLab)

  const allLabs = allLab.map((lab, index) => (
    <div
      key={index}
      className={`grid grid-cols-manageLabs gap-x-4 text-xl  px-3 py-3
      ${index % 2 != 0 ? "bg-secondary-withOpacity" : "bg-transparent"}
      `}
    >
      <h2 className="font-medium"> {lab.name} </h2>
      <h2 className="justify-self-center">
        {"discount" in lab ? `${lab.discount} %` : "N/A"}
      </h2>
      <h2 className="justify-self-center">
        {"comission" in lab ? `${lab.comission} %` : "N/A"}
      </h2>
      <h2 className="justify-self-center">
        {"minimumCharge" in lab ? `${lab.minimumCharge}` : "N/A"}
      </h2>
      <h2 className="justify-self-center">
        {"homeCharge" in lab ? `${lab.homeCharge}` : "N/A"}
      </h2>
      <h2 className="justify-self-center">
        {"paymentCycle" in lab ? `${lab.paymentCycle} ` : "N/A"}
      </h2>
      <div
        className="flex items-center gap-2 justify-self-center cursor-pointer"
        onClick={() => openManageLabModal(lab)}
      >
        <Icon icon={"ant-design:setting-outlined"} className="text-2xl" />
        {/* <h2>Manage</h2> */}
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
          <ManageLabPopup closeModal={closeModal} selectedLab={selectedLab} />
        </ReactModal>
      </div>
    </div>
  )
}
