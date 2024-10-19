import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { setProducts } from '../Context/Slices/productSlice'
import { useDispatch } from 'react-redux'
import { useParams } from 'react-router-dom'
import { useSearchParams } from 'react-router-dom'



function useGetProduct(type) {
    
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)
    const query = useParams();
    const [searchParams] = useSearchParams()
    
    
    const dispatch = useDispatch()

    const getProduct = async (query) => {
        try {
            
            
            console.log(query) 
            const res  = await productRequest(query)
            

            if(res.status === 200){

                setProduct(res.productsData)
                dispatch(setProducts(res.productsData))
                

            }else{
                toast.error(res.message)
            }
            
        } catch (error) {
            
            toast.error(error.message)
            
        }finally{
            setLoading(false)
        }
    }

    
    
    // useEffect(() => {
        
    //     getProduct(type)
    // }, [type])
    useEffect(() => {
        
        getProduct(searchParams.toString())
    }, [searchParams])
    return {product, loading }
}

export default useGetProduct




const productRequest = async (query) => {
    const response = await fetch(`/api/product?${query}`)
    const data = await response.json()

    return data
        
    
}
