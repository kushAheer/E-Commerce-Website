import React, { useEffect } from 'react'
import { useState } from 'react'
function useGetCategoryTree() {
    const [loading, setLoading] = useState(true)
    const [categories, setCategories] = useState([])

    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const response = await fetch('http://localhost:5000/api/category/getBothCategory')
                const data = await response.json()
                setCategories(data.result)
                
            } catch (error) {
                console.log(error)
            }finally{
                setLoading(false)
            }
        }
        fetchCategories()
    }, [])

    return {loading , categories}
}

export default useGetCategoryTree