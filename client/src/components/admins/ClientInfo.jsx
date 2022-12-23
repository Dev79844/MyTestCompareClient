import React from 'react'
import {Icon} from "@iconify/react"
import ReactModal from 'react-modal'
import UploadPopup from './UploadPopup'

const ClientInfo = ({name}) => {

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
      width: "15vw",
    },
  }

  function openModal() {
    setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

  document.body.style.overflow = modalIsOpen ? "hidden" : "auto"

  return (
    <div className='w-[64vw] h-[5vh] bg-green-100 mx-12 mt-4 mb-4 rounded-3xl pt-2'>
        <div className='flex justify-between px-4 items-center align-middle pt-2 text-2xl'>
            <span>{name}</span>
            <div className='flex justify-center items-center gap-2'>
                <input type="checkbox" className="w-5 h-5 rounded-full" /><span>Assign Phlebotomist</span>
            </div>
            <div className='flex justify-center items-center gap-2'>
                <input type="checkbox" className="w-5 h-5 rounded-full" /><span>Sample Tested</span>
            </div>
            <div className='flex gap-2'>
                <Icon
                    icon={"material-symbols:upload-rounded"}
                    color={"black"}
                    className="text-3xl"
                />
                <div onClick={openModal}>
                    <input type="file" style={{color: "transparent", display:"none"}}/>
                    <span>Upload Report</span>
                </div>

                <ReactModal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
                    <UploadPopup closeModal={closeModal} />
                </ReactModal>
            </div>
            <div>
                <Icon icon={"ic:baseline-delete"} color="#e97f0e" className='text-4xl'/>
            </div>
        </div>
    </div>
  )
}

export default ClientInfo