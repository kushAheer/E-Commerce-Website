import React from 'react'
import { useState } from 'react'
import { createSubCategoryRequest } from '../Utils/CategoryPost'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'


function useCreateSubCategory() {
    
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const createSubCategory = async (category) => {
        try {
            setLoading(true)
            
            const response = await createSubCategoryRequest(category);

            if (response.status === 200) {
                
                toast.success('Sub-Category Created Successfully');
                navigate('/admin');
            
            }else{
            
                toast.error('Sub-Category Creation Failed');
            
            }
            
        } catch (error) {
                
            toast.error('Sub-Category Creation Failed');

        }finally{
            setLoading(false)
        }

    }
    return { loading, createSubCategory };
    
}

export default useCreateSubCategory