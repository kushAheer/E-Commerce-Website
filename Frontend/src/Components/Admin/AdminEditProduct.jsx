import React from 'react'
import { useLoaderData } from 'react-router-dom'

function AdminEditProduct() {


    const data = useLoaderData()
    return (
        <>
            

        </>
    )
}

export default AdminEditProduct



export const editloader = async ({ request }) => {
    const query = request.url.split('?')[1];
    const response = await fetch(`/api/products?${query}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
    return response
}