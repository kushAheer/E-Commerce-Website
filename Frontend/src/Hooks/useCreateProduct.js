import React from 'react'
import { useState } from 'react'
import { createProductRequest } from '../Utils/ProductPost'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function useCreateProduct() {

    const [loading, setLoading] = useState(false)

    const navigate = useNavigate()
    
    const createProduct = async (product) => {

        try {
            setLoading(true)
            
            if (!verifyProduct(product)) {
                return;
            }
            console.log(product)
            
            const response = await createProductRequest(product);

            if (response.status === 200) {
                
                toast.success('Product Created Successfully');
                navigate('/admin');

            }else{
                
                toast.error(response.message);
            }
            
        } catch (error) {

            toast.error('Product Creation Failed');
            
        }finally{
            
            setLoading(false)

        }

    }
    return {loading , createProduct}
    
    
}

export default useCreateProduct


const verifyProduct = (product) => {
    if (product.name === '' || product.description === '' || product.price === '' || product.image === '') {
        toast.error('Please fill all the fields');
        return false;
    }
    if(product.price <= 0){
        toast.error('Price should be greater than 0');
        return false;
        
    }
    if(product.image === null){
        toast.error('Please upload an image');
        return false;
    }
    if(product.frontImage === null){
        toast.error('Please upload a front image');
        return false;
    }
    return true;

}