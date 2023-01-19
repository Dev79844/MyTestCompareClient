import {Icon} from "@iconify/react"
import React from "react"
import {Link, useNavigate} from "react-router-dom"
import ReactModal from "react-modal"
import LoginPopup from "./LoginPopup"

export default function Footer() {
  const navigate = useNavigate()

  const isAdminLoggedIn = localStorage.getItem("adminToken") ? true : false

  // console.log(isAdminLoggedIn)

  // localStorage.removeItem("adminToken")

  const quickLinks = [
    {
      name: "Home",
      link: "/",
    },
    // {
    //   name: "Subscribe",
    //   link: "/subscribe",
    // },
    {
      name: "Become Partner",
      link: "/becomePartner",
    },
    {
      name: "Lab Login",
    },
    {
      name: "Contact Us",
      link: "/contact",
    },
  ]

  const quickLinksArr = quickLinks.map((item, index) => {
    return item.link ? (
      <Link key={index} to={item.link}>
        <h4 className="mb-1 hover:border-b-2 cursor-pointer w-fit">
          {item.name}
        </h4>
      </Link>
    ) : (
      <h4
        key={index}
        className="mb-1 hover:border-b-2 cursor-pointer w-fit"
        onClick={openModal}
      >
        {item.name}
      </h4>
    )
  })

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
    isAdminLoggedIn ? navigate("/adminProfile") : setModalIsOpen(true)
  }

  function closeModal() {
    setModalIsOpen(false)
  }

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
          {quickLinksArr}
        </div>
      </div>
      <div className="mt-4">
        <h2 className="font-bold text-xl text-center">Follow Us on</h2>
        <div className="flex gap-3 mt-2">
          <a href="https://www.instagram.com/mytestcompare/" target={"_blank"} className = "cursor-pointer"><Icon icon="mdi:instagram" color="white" className="text-4xl" /></a>
          <Icon icon="mdi:twitter" color="white" className="text-4xl" />
          <Icon icon="mdi:linkedin" color="white" className="text-4xl" />
        </div>
      </div>
      <ReactModal isOpen={modalIsOpen} style={customStyles} ariaHideApp={false}>
        <LoginPopup
          closeModal={closeModal}
          whereToNavigate="/adminProfile"
          type="admin"
        />
      </ReactModal>
    </div>
  )
}
