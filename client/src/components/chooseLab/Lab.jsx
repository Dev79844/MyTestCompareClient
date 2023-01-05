import {Icon} from "@iconify/react"
import axios from "axios"
import React from "react"
import {Link, useLocation, useNavigate} from "react-router-dom"
// import lab from "../../data/lab"
// import labLargeScreen from "../../data/labLargeScreen"
import qs from "qs"

export default function Lab() {
  /**
   * @todo
   * * 1. Show lab certificate
   * * 2. Show lab timings
   */

  const navigate = useNavigate()
  const {search} = useLocation()

  const queryParams = qs.parse(search, {ignoreQueryPrefix: true})
  const {city, tests} = queryParams

  const [labArr, setLabArr] = React.useState([])

  React.useEffect(() => {
    getLabs()
  }, [])

  const getLabs = async () => {
    const data = await axios.get(
      `${import.meta.env.VITE_APP_URI}/api/v1/getLabs`,
      {
        params: {
          city: city,
          tests: tests,
        },
      }
    )
    // console.log(data.data.data.labs[0].tests)
    setLabArr(data.data.data.labs)
  }

  console.log(labArr.length)
  if (labArr.length != 0) {
    let maxProcessingTime
    let processingTimeA
    labArr.forEach((lab) => {
      const processingTimeArr = []
      lab.tests.forEach((test) => {
        processingTimeA = test.processingTime
        const subString = "hours"
        processingTimeA = processingTimeA.replace(subString, "")
        processingTimeA = processingTimeA.trim()
        processingTimeArr.push(processingTimeA)
      })
      maxProcessingTime = Math.max(...processingTimeArr)
    })
    console.log(labArr)

    const labs = labArr.map((lab, index) => {
      return (
        <div
          key={lab._id}
          className={`flex justify-between gap-4 py-3 px-4 sm:grid sm:grid-cols-chooseLab
      ${index % 2 != 0 ? "bg-secondary-withOpacity" : "bg-transparent"}
        `}
        >
          <div>
            <p className="font-medium">{lab.name}</p>
            <div className="flex gap-[3rem] text-[0.85rem]">
              {/* <div className="flex items-center gap-1">
              <Icon icon={"mdi:badge-outline"} color={"#E97F0E"} />
              {lab.certificate}
            </div> */}
              {/* <div className="flex items-center gap-1">
              <Icon icon={"simple-line-icons:calender"} color={"#E97F0E"} />
              <span className="font-bold">Timings:</span> {lab.timings}
            </div> */}
            </div>
            <div className="flex items-center gap-1">
              <Icon
                icon={"material-symbols:location-on-outline"}
                color={"#E97F0E"}
              />
              <p className="text-[0.85rem]">
                {lab.address.address} , {lab.address.city} -{" "}
                {lab.address.zipcode}{" "}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <Icon icon={"mdi:information-outline"} color={"#E97F0E"} />
              <p className="text-[0.85rem]">
                Processing time: {`${maxProcessingTime} hours`}
              </p>
            </div>
            {/* <div className="flex items-center gap-1">
            <Icon icon={"game-icons:path-distance"} color={"#E97F0E"} />
            <p className="text-[0.85rem]">Distance: {lab.distance}</p>
          </div> */}
            {/* <Link to="/afterLab"> */}
            <button
              className="text-white  bg-primary rounded  px-4 py-1 mt-2 sm:hidden"
              onClick={() => {
                const queryParams = {
                  lab: lab.name,
                  tests: tests,
                }
                const queryString = qs.stringify(queryParams)
                navigate({
                  pathname: "/afterLab",
                  search: `?${queryString}`,
                })
              }}
            >
              Select Lab
            </button>
            {/* </Link> */}
          </div>
          <div className="pt-[2.5rem] sm:pt-0 sm:self-center">
            <p>
              {" "}
              ₹
              {lab.tests.reduce((acc, curr) => {
                return acc + curr.price
              }, 0)}
            </p>
          </div>
          <div className=" hidden sm:block sm:self-center">
            {/* <Link to="/afterLab"> */}
            <button
              className="text-white  bg-primary rounded  px-4 py-1 mt-2 "
              onClick={() => {
                const queryParams = {
                  lab: lab.name,
                  tests: tests,
                }
                const queryString = qs.stringify(queryParams)
                navigate({
                  pathname: "/afterLab",
                  search: `?${queryString}`,
                })
              }}
            >
              Select Lab
            </button>
            {/* </Link> */}
          </div>
        </div>
      )
    })

    const largeLabs = labArr.map((lab, index) => {
      return (
        <div
          key={lab._id}
          className={`grid grid-cols-chooseLab5 p-3  ${
            index % 2 != 0 ? "bg-secondary-withOpacity" : "bg-transparent "
          }
      `}
        >
          <div className="grid grid-cols-chooseLab2">
            <p className="font-medium col-span-2 text-xl">{lab.name}</p>
            <div className="flex gap-[3rem] text-[0.85rem] col-span-2 my-1">
              {/* <div className="flex items-center gap-1">
              <Icon icon={"mdi:badge-outline"} color={"#E97F0E"} />
              {lab.basic.certificate}
            </div> */}
              {/* <div className="flex items-center gap-1">
              <Icon icon={"simple-line-icons:calender"} color={"#E97F0E"} />
              <span className="font-bold">Timings:</span> {lab.basic.timings}
            </div> */}
            </div>
            <div className="flex items-center gap-1 col-span-2">
              <Icon
                icon={"material-symbols:location-on-outline"}
                color={"#E97F0E"}
              />
              <p className="text-[0.85rem] ">
                {lab.address.address}, {lab.address.city} -{" "}
                {lab.address.zipcode}
              </p>
            </div>
          </div>
          <h1 className="justify-self-center self-center">{`${maxProcessingTime} hours`}</h1>
          {/* <h1 className="justify-self-center self-center">{lab.distance} km</h1> */}
          <h1 className="justify-self-center self-center text-xl">
            ₹
            {lab.tests.reduce((acc, curr) => {
              return acc + curr.price
            }, 0)}
          </h1>
          <div className="self-center justify-self-center">
            {/* <Link to="/afterLab"> */}
            <button
              className="text-white  bg-primary rounded  px-4 py-1 mt-2"
              onClick={() => {
                const queryParams = {
                  lab: lab.name,
                  tests: tests,
                }
                const queryString = qs.stringify(queryParams)
                navigate({
                  pathname: "/afterLab",
                  search: `?${queryString}`,
                })
              }}
            >
              Select Lab
            </button>
            {/* </Link> */}
          </div>
        </div>
      )
    })

    return (
      <div>
        <div className="lg:hidden">{labs}</div>
        <div className="hidden lg:block">{largeLabs}</div>
      </div>
    )
  } else {
    console.log("returning no labs")
    return (
      <div className="flex items-center h-[50vh] justify-center text-2xl font-semibold">
        <h1>No Labs Found</h1>
      </div>
    )
  }
}
