import React from "react"
import {Icon} from "@iconify/react"

export default function PopupSlider() {
  const [index, setIndex] = React.useState(0)
  const slides = [
    {
      icon: "arcticons:bestprice",
      text: "Best Price Guarantee",
    },
    {
      icon: "ic:baseline-access-time",
      text: "On Time Reports",
    },
    {
      icon: "ion:ribbon",
      text: "Certified Labs",
    },
    {
      icon: "ri:customer-service-2-fill",
      text: "Customer Support",
    },
  ]
  const delay = 2500

  const timeoutRef = React.useRef(null)

  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current)
    }
  }

  React.useEffect(() => {
    resetTimeout()
    timeoutRef.current = setTimeout(
      () =>
        setIndex((prevIndex) =>
          prevIndex === slides.length - 1 ? 0 : prevIndex + 1
        ),
      delay
    )
    return () => {
      resetTimeout()
    }
  }, [index])

  const slidesArr = slides.map((item, index) => {
    return (
      <div className="slide w-full inline-block" key={index}>
        <div className="flex flex-col items-center py-6">
          <div>
            <Icon icon={item.icon} color={"white"} className="text-[140px]" />
          </div>
          <div>
            <h1 className="text-2xl text-white mt-4">{item.text}</h1>
          </div>
        </div>
      </div>
    )
  })

  const indicators = slides.map((_, idx) => {
    return (
      <div
        key={idx}
        className={`slideshowDot  h-3 w-3 rounded-full inline-block border-white border-[1px] cursor-pointer m-2
        ${index === idx ? "bg-white" : "bg-transparent"}
         `}
        onClick={() => setIndex(idx)}
      ></div>
    )
  })
  return (
    <div className="hidden lg:block bg-secondary">
      <div className="slideshow my-0 mx-auto overflow-hidden max-w-[500px] flex flex-col justify-center items-center h-full">
        <div
          className="slideshowSlider whitespace-nowrap transition duration-[1500ms] ease"
          style={{transform: `translateX(${-index * 100}%)`}}
        >
          {slidesArr}
        </div>
        <div className="text-center">{indicators}</div>
      </div>
    </div>
  )
}
