import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import toast from 'react-hot-toast'
import { setProducts } from '../Context/Slices/productSlice'
import { useDispatch } from 'react-redux'


function useGetProduct(type) {
    
    const [product, setProduct] = useState([])
    const [loading, setLoading] = useState(true)

    
    const dispatch = useDispatch()

    const getProduct = async () => {
        try {
            
            const res  = await productRequest()
            console.log(res)

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

    const sortedLowToHigh = async ()=>{

        try {
            console.log('low to high')
            const res = await productlowToHighRequest();
            console.log(res)
            if(res.status === 200){

                setProduct(res.productsData)
                dispatch(setProducts(res.productsData))

            }else{

                toast.error(res.message)

            }
            
        } catch (error) {

            toast.error(error.message)

        }



    }

    const sortedHighToLow = async ()=>{
        try {
            const res = await productHighToLowRequest();

            if(res.status === 200){

                setProduct(res.productsData)
                dispatch(setProducts(res.productsData))

            }else{

                toast.error(res.message)

            }
            
        } catch (error) {

            toast.error(error.message)

        }
    }
    
    useEffect(() => {
        
        if(type == "normal"){

            getProduct()
            
        }else if(type == "lowtohigh"){
            
            console.log('low to high')
            sortedLowToHigh()
            

        }else if(type == "hightolow"){
            
            sortedHighToLow()

        }
    }, [type])
    return {product, loading }
}

export default useGetProduct




const productRequest = async () => {
    const response = await fetch('http://localhost:5000/api/product')
    const data = await response.json()

    return data
        
    
}

const productlowToHighRequest = async () => {
    
    const response = await fetch('http://localhost:5000/api/product/asc')
    const data = await response.json()

    return data
}

const productHighToLowRequest = async () => {
    const response = await fetch('http://localhost:5000/api/product/desc')
    const data = await response.json()

    return data
}