import React, { useEffect } from 'react'
import { useState } from 'react'
import { getCategoryRequest } from '../Utils/CategoryGet'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import { useDispatch } from 'react-redux'
import { addCategory } from '../Context/Slices/categorySlice'


function useGetCategory() {

    const dispatch = useDispatch()
    const [loading, setLoading] = useState(false)
    const [categories, setCategories] = useState([])
    const user  = useSelector(state => state.users.user)
    
    const getCategory = async () => {
        try {
            
            setLoading(true)

            const response = await getCategoryRequest();

            if(response.status === 200){
                
                dispatch(addCategory(response.data))
                setCategories(response.data);

            }else{

                toast.error('Failed to get categories');

            }
        } catch (error) {
            
            toast.error('Failed to get categories');

        }finally{
            setLoading(false)
        }
    }

    useEffect(() => {
        
        
        getCategory();
        
        
        
    }, [])
    
    return { loading , categories };
}

export default useGetCategory