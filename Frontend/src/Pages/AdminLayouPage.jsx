import React from 'react'
import AdminNavBar from '../Components/NavBar/AdminNavBar'
import { Outlet } from 'react-router-dom'

function AdminLayouPage() {
  return (
    <>
        <AdminNavBar />
        {/* <div style={{backgroundColor : "#F7F6F6" , height:"100vh"}}> */}

          <Outlet />
        {/* </div> */}
    </>
  )
}

export default AdminLayouPage