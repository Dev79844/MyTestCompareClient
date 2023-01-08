import React from "react"
import HomePage from "./pages/HomePage"
import Summary from "./pages/Summary"
import Success from "./pages/Success"
import {Route, Routes} from "react-router-dom"
import ChooseLab from "./pages/ChooseLab"
import SelectedTests from "./pages/SelectedTests"
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
import AnalyticsOverview from "./pages/admins/admin/AnalyticsOverview"
import SupAdminAnalyticsOverview from "./pages/admins/superadmin/SupAdminAnalyticsOverview"
import AnalyticsMonthly from "./pages/admins/admin/AnalyticsMonthly"
import SupAdminAnalyticsMonthly from "./pages/admins/superadmin/SupAdminAnalyticsMonthly"
import AdminLogin from "./pages/admins/superadmin/AdminLogin"

function App() {
  return (
    <div>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/chooseLab" element={<ChooseLab />} />
        <Route path="/afterLab" element={<SelectedTests />} />
        <Route path="/booking" element={<Summary />} />
        <Route path="/confirmed" element={<Success />} />
        <Route path="/viewProfile" element={<ViewProfile />} />
        <Route path="/viewReports" element={<ViewReports />} />
        <Route path="/viewBookings" element={<ViewBookings />} />
        <Route path="/becomePartner" element={<BecomePartner />} />
        <Route path="/adminProfile" element={<Profile />} />
        <Route path="/labBookings" element={<Bookings />} />
        <Route path="/labPaymentReminder" element={<PaymentReminder />} />
        <Route path="/labAddUpdateTests" element={<AddUpdateTests />} />
        <Route path="/clientRequests" element={<AcceptClientBooking />} />
        <Route path="/labRequests" element={<AcceptLab />} />
        <Route path="/manageLabs" element={<ManageLabs />} />
        <Route path="/labPayments" element={<Payments />} />
        <Route path="/labPayments/individualLab" element={<ParticularLabPaymentBreakup />} />
        <Route path="/labAnalytics" element={<AnalyticsOverview />} />
        <Route path="/superadminlabAnalytics" element={<SupAdminAnalyticsOverview />} />
        <Route path="/labMonthlyAnalytics" element={<AnalyticsMonthly />} />
        <Route path="/superadminlabMonthlyAnalytics" element={<SupAdminAnalyticsMonthly />} />
        <Route path="/adminLogin" element={<AdminLogin />} />
      </Routes>
    </div>
  )
}

export default App
