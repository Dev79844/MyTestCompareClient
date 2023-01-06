import React from "react"
import {Icon} from "@iconify/react"

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      text: "Best price advised by labadvisor of MyTestCompare. Keep on the good work guys! ",
      name: "Aarav Sharma",
      rating: 4.5,
    },
    {
      id: 2,
      text: "Best company to take lab test as it helped me to save a lot of money and paying unnecessary high amount on health tests",
      name: "Ishaan Gupta",
      rating: 4.5,
    },
    {
      id: 3,
      text: "Reports came on time when i booked for my parents and price was also the best things which keeps me coming again and again to the MyTestCompare.",
      name: "Anjali Mehta",
      rating: 5,
    },
  ]

  let [current, setCurrent] = React.useState(0)

  const testimonialsList = testimonials.map((testimonial) => {
    return (
      <div
        key={testimonial.id}
        className={
          "bg-white w-[90%] py-8 px-8 drop-shadow-md rounded-2xl xs:w-4/5  sm:w-[65%] relative"
        }
      >
        <svg
          aria-hidden="true"
          className="w-12 h-12 text-secondary opacity-50 absolute "
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
        <div className="flex mt-12 mb-3 lg:mt-3 lg:mb-5 items-center justify-center lg:justify-start gap-3 lg:ml-[70px]">
          <div>
            <Icon icon="carbon:user-avatar-filled" className="text-3xl" />
          </div>
          <div>
            <h1 className="text-xl">{testimonial.name}</h1>
            {testimonial.rating === 5 ? (
              <div className="flex">
                <Icon icon="ic:sharp-star" color="#fdcc0d" />
                <Icon icon="ic:sharp-star" color="#fdcc0d" />
                <Icon icon="ic:sharp-star" color="#fdcc0d" />
                <Icon icon="ic:sharp-star" color="#fdcc0d" />
                <Icon icon="ic:sharp-star" color="#fdcc0d" />
              </div>
            ) : (
              <div className="flex">
                <Icon icon="ic:sharp-star" color="#fdcc0d" />
                <Icon icon="ic:sharp-star" color="#fdcc0d" />
                <Icon icon="ic:sharp-star" color="#fdcc0d" />
                <Icon icon="ic:sharp-star" color="#fdcc0d" />
                <Icon icon="material-symbols:star-rate-half" color="#fdcc0d" />
              </div>
            )}
          </div>
        </div>
        <p className="text-center font-normal text-lg">{testimonial.text}</p>
      </div>
    )
  })

  return (
    <div className="mt-14 pb-8">
      <h1 className="font-medium text-2xl md:text-3xl text-center px-4">
        What out customers has to say about us
      </h1>

      <div className="flex justify-center items-center mt-8 relative xs:px-6 sm:p-10 md:px-5 lg:px-8 md:mt-0">
        <div className="md:hidden">
          <Icon
            icon="bi:chevron-left"
            className="text-4xl cursor-pointer"
            onClick={() => {
              if (current === 0) {
                current = testimonialsList.length
              }
              setCurrent(current - 1)
            }}
          />
        </div>
        {/* All Testimonials */}
        <div className="relative flex justify-center md:hidden">
          {testimonialsList[current]}
        </div>
        <div className="hidden md:flex md:gap-4 lg:gap-8 lg:w-[90%] lg:mx-auto">
          {testimonialsList}
        </div>
        <div className="md:hidden">
          <Icon
            icon="bi:chevron-right"
            className="text-4xl cursor-pointer "
            onClick={() => {
              if (current === testimonialsList.length - 1) {
                current = -1
              }
              setCurrent(current + 1)
            }}
          />
        </div>
      </div>
    </div>
  )
}
