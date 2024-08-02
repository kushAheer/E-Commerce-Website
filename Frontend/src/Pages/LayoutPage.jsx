import React from 'react'
import { Outlet } from 'react-router-dom'
import NavBar from '../Components/NavBar/NavBar'

function LayoutPage() {
  return (
    <>
        <NavBar />
		<Outlet />
    </>
  )
}

export default LayoutPage
