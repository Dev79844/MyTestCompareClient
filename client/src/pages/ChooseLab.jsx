import React from "react"
import {Icon} from "@iconify/react"
import Lab from "../components/chooseLab/Lab"
import SelectedTest from "../components/chooseLab/SelectedTest"
import MiniNav from "../components/MiniNav"
import Nav from "../components/Nav"
import DiscountStrip from "../components/DiscountStrip"
import Footer from "../components/Footer"
import tests from "../data/tests"

const ChooseLab = () => {
  const certificates = ["NABL", "ISO", "CAP", "ICMR", "ISO", "NABH"]

  const certificatesArr = certificates.map((certificate) => {
    return (
      <div className="flex gap-2 items-center">
        <input type="checkbox" name="NABL" id="NABL" />
        <span classname="text-base">{certificate}</span>
        <Icon icon={"mdi:information-outline"} color={"#E97F0E"} />
      </div>
    )
  })

  const selectTests = tests.map((entry)=> (
    <SelectedTest text={entry.test} />
  ))

  return (
    <div>
      <MiniNav />
      <Nav />
      <DiscountStrip />
      <div className="pt-4 pb-12">
        <div className="flex items-center gap-3">
          <Icon
            icon="carbon:chevron-left"
            color="black"
            inline={true}
            className="text-3xl sm:text-4xl"
          />
          <h3 className="text-2xl font-medium lg:text-3xl">Results</h3>
        </div>

        {/* Converting to grid on larger screens */}
        <div className="pt-4 flex gap-2 flex-col w-[90%] mx-auto md:flex-row lg:w-full lg:grid lg:grid-cols-chooseLab2 lg:px-3 pb-8 xl:grid-cols-[20%_80%] 2xl:grid-cols-[18%_82%]">
          <div className="flex bg-secondary-withOpacity gap-2 py-2 px-3 rounded">
            <Icon
              icon="material-symbols:location-on"
              color="black"
              inline={true}
              className="text-3xl sm:text-4xl"
            />
            <input
              type="text"
              className="rounded bg-transparent"
              placeholder=" Ahmedabad"
            />
          </div>
          <div className="flex bg-secondary-withOpacity gap-2 py-2 px-3 rounded md:w-full">
            <Icon
              icon="ic:baseline-search"
              color="black"
              inline={true}
              className="text-3xl sm:text-4xl"
            />
            <input
              type="text"
              className="bg-transparent rounded w-full "
              placeholder="Add more tests or health packages"
            />
          </div>
          {/* Hidden on larger screens */}
          <div className="border-[1px] border-black rounded flex justify-between py-2 px-3 gap-2 md:hidden">
            <input
              type="text"
              className=" bg-transparent w-full "
              placeholder="Search your lab"
            />
            <Icon
              icon="ic:baseline-search"
              color="black"
              inline={true}
              className="text-3xl sm:text-4xl"
            />
          </div>

          {/* For larger screens */}
          {/* left side of grid */}
          <div className="hidden lg:block mt-2">
            <div className="border-[1px] border-black rounded flex justify-between py-[3px] px-3 gap-2 ">
              <input
                type="text"
                className=" bg-transparent w-full "
                placeholder="Search your lab"
              />
              <Icon
                icon="ic:baseline-search"
                color="black"
                inline={true}
                className="text-3xl sm:text-4xl"
              />
            </div>
            <div className="mt-4  border-[1px] px-3 py-2 rounded border-black">
              <h1 className="font-medium text-xl">Certificates</h1>
              <div className="mt-1">{certificatesArr}</div>
            </div>
            <div className="mt-4  border-[1px] px-3 py-2 rounded border-black">
              <h1 className="font-medium text-lg">
                Couldn't find your preferred Lab?
              </h1>
              <h3 className="my-2">Will try to add your lab on our platform</h3>
              <div className="mt-2 flex justify-center">
                <button className="bg-secondary px-4 rounded py-1 text-white font-bold ">
                  Specify Lab Details
                </button>
              </div>
            </div>
          </div>
          {/* Right side of grid */}
          <div className="hidden lg:block mt-2  ">
            <div className="flex items-center">
              <div className="sm:px-3">
                <p className="text-center lg:text-left  text-xl font-medium lg:text-2xl">
                  Labs offering selected tests
                </p>
              </div>
              <div>
                {selectTests}
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-chooseLab4 mx-3 mt-4">
                <h1 className="font-bold text-lg ">Lab Name</h1>
                <h1 className="font-bold text-lg justify-self-center text-center">
                  Processing Time
                </h1>
                <h1 className="font-bold text-lg justify-self-center">
                  Distance
                </h1>
                <h1 className="font-bold text-lg justify-self-center">Price</h1>
              </div>
              <Lab />
            </div>
          </div>
        </div>

        {/* Visible only on "md" */}
        <div className="border-[1px] hidden md:flex border-black rounded  justify-between py-1 px-3 gap-2 md:w-[90%] lg:hidden md:mx-auto md:mt-4">
          <input
            type="text"
            className=" bg-transparent w-full "
            placeholder="Search your lab"
          />
          <Icon
            icon="ic:baseline-search"
            color="black"
            inline={true}
            className="text-3xl sm:text-4xl"
          />
        </div>

        <div className="lg:hidden">
          <div className="sm:flex sm:px-3">
            <p className="text-center pt-4 text-xl font-medium">
              Labs offering the selected tests
            </p>
            <div>
              <SelectedTest text={"ehfuiwkk"} />
            </div>
          </div>
          <div className="mt-4 px-4">
            <hr />
            <div className="flex justify-between font-medium text-lg sm:grid-cols-chooseLab sm:grid">
              <p className="">Lab Name</p>
              <p>Price</p>
            </div>
            <hr />
          </div>
        </div>
        <div className="lg:hidden">
          <Lab />
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default ChooseLab
