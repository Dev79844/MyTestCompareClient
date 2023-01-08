import React from 'react'
import SuperAdminLogin from '../../../components/SuperAdminLogin'
import Footer from '../../../components/Footer'
import MiniNav from '../../../components/MiniNav'
import Nav from '../../../components/Nav'

const AdminLogin = () => {
  return (
    <div>
        <MiniNav />
        <Nav />
        <SuperAdminLogin />
        <Footer />
    </div>
  )
}

export default AdminLogin