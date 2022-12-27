import React from "react";
import ProgressBar from "@ramonak/react-progress-bar";

export default function TopSelling(props) { 

    const topSellingList = props.data.map((item, index) => (
      <div key={index} className="grid grid-cols-[25%_75%]">
        <h2 className="font-medium text-xl">{item.name}</h2>
        <ProgressBar
          completed={item.sellCount}
          bgColor={"#01B37A"}
          height="16px"
          baseBgColor="transparent"
          labelAlignment="outside"
          labelColor="#22242E"
        />
      </div>
    ))

    return (
        <div className="space-y-4 mt-5">
            {topSellingList}
        </div>
    )
}
