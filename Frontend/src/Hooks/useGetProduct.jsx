import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'

function useGetProduct() {
    
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
        const getProduct = async () => {
            try {
                const res  = await productRequest()
                console.log(res)
                if(res.status === 200){
                    setProduct(res.productsData)
                }else{
                    toast.error(res.message)
                }
                
            } catch (error) {
                
                toast.error(error.message)
                
            }finally{
                setLoading(false)
            }
        }
        getProduct()
    }, [])
    return {product, loading}
}

export default useGetProduct




const productRequest = async () => {
    const response = await fetch('http://localhost:5000/api/product')
    const data = await response.json()

    return data
        
    
}