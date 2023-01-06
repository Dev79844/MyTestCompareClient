import React from "react"

export default function AboutUs() {
  return (
    <div className="px-3 mt-12 my-20">
      <div className="md:flex md:px-5">
        <img
          src="images/home/aboutus.svg"
          alt="discount image"
          className="xs:w-3/4 xs:mx-auto md:w-3/5  "
        />
        <div className="mt-8 md:mx-5 lg:mx-10 px-4 xs:w-[90%] sm:w-4/5 xs:mx-auto">
          <h3 className="font-medium text-2xl text-center md:text-left">
            About Us
          </h3>
          <h1 className="font-semibold text-2xl mt-3">
            Your Trusted one stop Destination for Pathology Lab Tests
          </h1>
          <div className="text-lg md:text-xl text-[#22242E]  font-regular mt-4 md:px-0 space-y-3">
            <p>
              MyTestCompare is a marketplace for pathology lab Test which
              provides comparison & transparency between the different certified
              labs.
            </p>
            <p >
              At MytestCompare, we understand the importance of accurate and
              timely reports. That's why all the labs listed on our platform are
              certified and known for their high-quality services.
            </p>
            <p >
              What sets MytestCompare apart from other similar platforms is our
              commitment to quality. We assure that all the labs listed on our
              platform are of the highest quality and, in case you're not
              satisfied with the services, you can avail our money-back
              guarantee. The team at MytestCompare is led by our CEO, Manish
              Pal. With his years of experience in the healthcare industry.
              Moreover, our customer support team is always ready to assist you
              and answer any questions you may have.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
