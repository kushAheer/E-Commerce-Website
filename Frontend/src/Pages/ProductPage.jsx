import React from 'react'
import ProductComp from '../Components/Products/ProductComp'

function ProductPage() {
    return (
        <>
            <ProductComp />
        </>
    )
}

export default ProductPage


export const productLoader = async ({request}) => {

    const query = request.url.split('?')[1];

    
    const response = await fetch(`http://localhost:5000/api/products?${query}`,{
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json'
        }
    }).then(res => res.json())

    return response
    

}