import React from "react"

export default function RequestContainer(props) {
  const data = props.data
  const type = props.type

  const allRequests = data.map((item, index) => (
    <div
      className="border-[1px] border-borderGray text-lg px-5 py-5 min-w-[31%] "
      key={index}
    >
      {type == "clientData" ? (
        // type == "clientData"
        <div className="space-y-2 mb-3">
          <div className="font-medium">
            {item.tests.map((test, index) => (
              <h2>
                {index + 1}.{test}
              </h2>
            ))}
          </div>
          <h2>
            <span className="font-medium mr-5">Name:</span> {item.name}
          </h2>
          <h2>
            <span className="font-medium mr-3">Mobile:</span> {item.mobile}
          </h2>
          <h2>
            <span className="font-medium mr-3">Charge:</span> {item.charge}
          </h2>
          <h2>
            <span className="font-medium mr-2">Address:</span> {item.address}
          </h2>
        </div>
      ) : (
        // type == "labRequest"
        <div className="space-y-3 mb-4">
          <h2 className="font-medium text-xl">{item.name}</h2>
          <h2>
            <span className="font-medium mr-4">Mobile:</span> {item.mobile}
          </h2>
          <h2>
            <span className="font-medium mr-7">Email:</span> {item.email}
          </h2>
          <h2>
            <span className="font-medium mr-2">Address:</span> {item.address}
          </h2>
        </div>
      )}

      <div className="space-x-4 flex justify-between">
        <button className="text-xl font-medium border-[1px] border-secondary rounded-md px-4 w-1/2">
          Confirm
        </button>
        <button className="text-xl font-medium border-[1px] border-secondary rounded-md px-4 w-1/2">
          Reject
        </button>
      </div>
    </div>
  ))

  return <div className="flex flex-wrap gap-5 mt-7">{allRequests}</div>
}
