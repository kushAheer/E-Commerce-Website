import React from 'react'
import AdminNavBar from '../Components/NavBar/AdminNavBar'
import { Outlet } from 'react-router-dom'

function AdminLayouPage() {
  return (
    <>
        <AdminNavBar />
        <Outlet />
    </>
  )
}

export default AdminLayouPage