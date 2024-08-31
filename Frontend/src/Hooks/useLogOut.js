import React from 'react'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'
import { useDispatch } from 'react-redux'
import toast from 'react-hot-toast'
import { logoutRequest } from '../Utils/AuthPost'
import { logout } from '../Context/Slices/userSlice'

function useLogOut() {

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const [loading, setLoading] = useState(false)

    const logOutUser = async ()=>{
        try {
            
            setLoading(true)
            const response = await logoutRequest();

            if(response.status === 200){
                
                dispatch(logout());
                toast.success(response.message)
            
            }else{
            
                toast.error(response.message)
            
            }
            
            navigate('/')
        } catch (error) {
            
            toast.error(error.message)
        
        } finally {
        
            setLoading(false)
        
        }
    }

    return {loading, logOutUser}
}

export default useLogOut