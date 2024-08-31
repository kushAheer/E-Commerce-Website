import React from 'react'
import { useState , useEffect } from 'react'
import toast from 'react-hot-toast'
import { getSubCategoryRequest } from '../Utils/CategoryGet'

function useGetSubCategory(trigger , id) {

    const [loading, setLoading] = useState(true)
    const [subCategories, setSubCategories] = useState([])

    useEffect(() => {
        const getSubCategory = async () => {
            try {
                
                const response = await getSubCategoryRequest(id);
                
                if (response.status === 200) {
                    
                    setSubCategories(response.data)

                } else {
                    
                    toast.error(response.message)
                    setSubCategories([])

                }
                
            } catch (error) {
            
                

            }finally{
            
                setLoading(false)
            
            }
        }
        if(id){

            getSubCategory()
        }
    }, [trigger])

    

    return { loading, subCategories }
}

export default useGetSubCategory