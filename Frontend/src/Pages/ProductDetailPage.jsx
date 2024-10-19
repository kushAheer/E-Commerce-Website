import React from 'react'
import ProductDetails from '../Components/Products/ProductDetails'

function ProductDetailPage() {
    return (
        <>
            <ProductDetails />
        </>
    )
}

export default ProductDetailPage



export const productDetailsLoader = async ({params})=>{
    try {
        
        const slug = params.slug
        const response  = fetch(`/api/product/${slug}`,{
            method : 'GET',
            headers : {
                'Content-Type' : 'application/json'
            }
        }).then(res => res.json())

        return response
        
        
        
    } catch (error) {
        console.error(error);
    }
}