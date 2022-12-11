import React from "react"
import {Icon} from "@iconify/react"

export default function Testimonial() {
  const testimonials = [
    {
      id: 1,
      text: "What were the chances? It would have to be a lot more than 100 to 1. It was likely even more than 1,000 to 1. The more he thought about it, the odds of it happening had to be more than 10,000 to 1 and even 100,000 to 1. People often threw around the chances of something happening as being 1,000,000 to 1 as an exaggeration of an unlikely event, but he could see that they may actually be accurate in this situation. ",
    },
    {
      id: 2,
      text: "The words hadn't flowed from his fingers for the past few weeks. He never imagined he'd find himself with writer's block, but here he sat with a blank screen in front of him. That blank screen taunting him day after day had started to play with his mind. He didn't understand why he couldn't even type a single word, just one to begin the process and build from there.",
    },
    {
      id: 3,
      text: "There was only one way to do things in the Statton house. That one way was to do exactly what the father, Charlie, demanded. He made the decisions and everyone else followed without question. That was until today.",
    },
  ]

  let [current, setCurrent] = React.useState(0)

  const testimonialsList = testimonials.map((testimonial) => {
    return (
      <div
        key={testimonial.id}
        className={"bg-white w-[90%] py-8 px-8 drop-shadow-md rounded-2xl xs:w-4/5  sm:w-[65%]"}
      >
        <svg
          aria-hidden="true"
          className="w-12 h-12 text-secondary opacity-50"
          viewBox="0 0 24 27"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M14.017 18L14.017 10.609C14.017 4.905 17.748 1.039 23 0L23.995 2.151C21.563 3.068 20 5.789 20 8H24V18H14.017ZM0 18V10.609C0 4.905 3.748 1.038 9 0L9.996 2.151C7.563 3.068 6 5.789 6 8H9.983L9.983 18L0 18Z"
            fill="currentColor"
          />
        </svg>
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
