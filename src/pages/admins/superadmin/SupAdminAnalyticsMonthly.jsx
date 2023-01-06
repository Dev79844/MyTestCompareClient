import React from "react"

import SuperAdminSidebar from "../../../components/admins/superadmin/SuperAdminSidebar"
import IncomeOverview from "../../../components/admins/analytics/overview/IncomeOverview"
import TopSelling from "../../../components/admins/analytics/TopSelling"
import topLabs from "../../../data/topLabs"
import topsellingtests from "../../../data/topsellingtests"
import Transactions from "../../../components/admins/analytics/Transactions"
import transactionlabwise from "../../../data/transactionlabwise"
import transactionTestwiseMonthly from "../../../data/transactionTestwiseMonthly"

export default function SupAdminAnalyticsMonthly() {
  return (
    <div className="font-Roboto bg-background">
      <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
        <SuperAdminSidebar active="monthlyAnalytics" />
        <div className="px-5 mt-4">
          <div className="mt-5 ml-5">
            <h2 className="text-4xl font-medium ">Monthly Analytics</h2>
            <div className="mt-8">
              <IncomeOverview type="monthly" />
            </div>
            <div className="bg-secondary-withOpacity w-[70%] mt-8 p-6 rounded-2xl">
              <h2 className="text-primary font-medium text-3xl pb-2 relative after:absolute after:bg-primary after:w-full after:h-[2px] after:left-0 after:bottom-0">
                Top Labs
              </h2>
              <TopSelling data={topLabs} />
            </div>

            <div className="bg-secondary-withOpacity w-[70%] mt-8 p-6 rounded-2xl">
              <h2 className="text-primary font-medium text-3xl pb-2 relative after:absolute after:bg-primary after:w-full after:h-[2px] after:left-0 after:bottom-0">
                Top Selling Tests
              </h2>
              <TopSelling data={topsellingtests} />
            </div>

            <div className="mt-8">
              <h1 className="font-medium text-4xl">Transactions Lab Wise</h1>
              <Transactions data={transactionlabwise} type="lab" />
            </div>
            <div className="mt-10">
              <h1 className="font-medium text-4xl">Transactions Test Wise</h1>
              <Transactions data={transactionTestwiseMonthly} type="test" />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
