import React from 'react'
import ProductNavBar from '../Components/NavBar/ProductNavBar'
import { Outlet } from 'react-router-dom'

function ProductLayoutPage() {
    return (
        <>
            <ProductNavBar />
            <Outlet />
        </>
    )
}

export default ProductLayoutPage
