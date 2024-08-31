import React from 'react'
import { useState } from 'react'
import { createCategoryRequest } from '../Utils/CategoryPost'
import toast from 'react-hot-toast'
import { useNavigate } from 'react-router-dom'

function useCreateCategory() {
    
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const createCategory = async (category) => {
        try {
            setLoading(true)
            
            const response = await createCategoryRequest(category);

            if (response.status === 200) {
                
                toast.success('Category Created Successfully');
                navigate('/admin');
            
            }else{
            
                toast.error('Category Creation Failed');
            
            }
            
        } catch (error) {
                
            toast.error('Category Creation Failed');

        }finally{
            setLoading(false)
        }

    }
    return { loading, createCategory };
    
}

export default useCreateCategory