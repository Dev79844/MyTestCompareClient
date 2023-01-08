import React from "react"
import ReactDOM from "react-dom/client"
import "./index.css"
import {createBrowserRouter, RouterProvider, Route} from "react-router-dom"
import HomePage from "./pages/HomePage"
import ChooseLab from "./pages/ChooseLab"
import SelectedTests from "./pages/SelectedTests"
import Summary from "./pages/Summary"
import Success from "./pages/Success"
import ViewProfile from "./pages/ViewProfile"
import ViewReports from "./pages/ViewReports"
import ViewBookings from "./pages/ViewBookings"
import BecomePartner from "./pages/BecomePartner"
import Profile from "./pages/admins/admin/Profile"
import Bookings from "./pages/admins/admin/Bookings"
import PaymentReminder from "./pages/admins/admin/PaymentReminder"
import AddUpdateTests from "./pages/admins/admin/AddUpdateTests"
import AcceptClientBooking from "./pages/admins/superadmin/AcceptClientBooking"
import AcceptLab from "./pages/admins/superadmin/AcceptLab"
import ManageLabs from "./pages/admins/superadmin/ManageLabs"
import Payments from "./pages/admins/superadmin/Payments"
import ParticularLabPaymentBreakup from "./pages/admins/superadmin/ParticularLabPaymentBreakup"
import TrackOrder from "./pages/TrackOrder"
import AnalyticsOverview from "./pages/admins/admin/AnalyticsOverview"
import SupAdminAnalyticsOverview from "./pages/admins/superadmin/SupAdminAnalyticsOverview"
import AnalyticsMonthly from "./pages/admins/admin/AnalyticsMonthly"
import SupAdminAnalyticsMonthly from "./pages/admins/superadmin/SupAdminAnalyticsMonthly"
import AdminLogin from "./pages/admins/superadmin/AdminLogin"

const router = createBrowserRouter([
  {
    path: "/",
    element: <HomePage />,
  },
  {
    path: "/chooseLab",
    element: <ChooseLab />,
  },
  {
    path: "/afterLab",
    element: <SelectedTests />,
  },
  {
    path: "/booking",
    element: <Summary />,
  },
  {
    path: "/confirmed",
    element: <Success />,
  },
  {
    path: "/viewProfile",
    element: <ViewProfile />,
  },
  {
    path: "/viewReports",
    element: <ViewReports />,
  },
  {
    path: "/viewBookings",
    element: <ViewBookings />,
  },
  {
    path: "/trackOrder",
    element: <TrackOrder />,
  },
  {
    path: "/becomepartner",
    element: <BecomePartner />,
  },
  {
    path: "/adminProfile",
    element: <Profile />,
  },
  {
    path: "/labBookings",
    element: <Bookings />,
  },
  {
    path: "/labPaymentReminder",
    element: <PaymentReminder />,
  },
  {
    path: "/labAddUpdateTests",
    element: <AddUpdateTests />,
  },
  {
    path: "/clientRequests",
    element: <AcceptClientBooking />,
  },
  {
    path: "/labRequests",
    element: <AcceptLab />,
  },
  {
    path: "/manageLabs",
    element: <ManageLabs />,
  },
  {
    path: "/labPayments",
    element: <Payments />,
  },
  {
    path: "/labPayments/individualLab",
    element: <ParticularLabPaymentBreakup />,
  },
  {
    path: "/labAnalytics",
    element: <AnalyticsOverview />,
  },
  {
    path: "/superadminlabAnalytics",
    element: <SupAdminAnalyticsOverview />,
  },
  {
    path: "/labMonthlyAnalytics",
    element: <AnalyticsMonthly />,
  },
  {
    path: "/superadminlabMonthlyAnalytics",
    element: <SupAdminAnalyticsMonthly />,
  },
  {
    path: "/adminLogin",
    element: <AdminLogin />
  }
])

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
)
