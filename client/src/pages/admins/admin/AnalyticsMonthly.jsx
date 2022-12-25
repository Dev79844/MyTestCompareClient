import React from "react"
import AdminSidebar from "../../../components/admins/admin/AdminSidebar"
import TopStrip from "../../../components/admins/admin/TopStrip"
import IncomeOverview from "../../../components/admins/analytics/overview/IncomeOverview"
import TopSelling from "../../../components/admins/analytics/TopSelling"
import topsellingTestsMonthly from "../../../data/topsellingTestsMonthly"

export default function AnalyticsMonthly() {
 return (
   <div className="font-Roboto bg-background">
     <div className=" lg:grid lg:grid-cols-summary xl:grid-cols-sidebarSetGrid">
       <AdminSidebar active="monthlyAnalytics" />
       <div className="px-5 mt-4">
         <TopStrip />
         <div className="mt-5 ml-5">
           <h2 className="text-4xl font-medium ">Monthly Analytics</h2>
           <div className="mt-8">
             <IncomeOverview type="monthly" />
           </div>
           <div className="bg-secondary-withOpacity w-[70%] mt-8 p-6 rounded-2xl">
             <h2 className="text-primary font-medium text-3xl pb-2 relative after:absolute after:bg-primary after:w-full after:h-[2px] after:left-0 after:bottom-0">
               Top Selling Tests
             </h2>
             <TopSelling data={topsellingTestsMonthly} />
           </div>
         </div>
       </div>
     </div>
   </div>
 )
}
