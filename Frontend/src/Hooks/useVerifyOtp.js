import React from 'react'
import { useState } from 'react'
import { verifyOtpRequest } from '../Utils/AuthPost'
import toast from 'react-hot-toast'
import { redirect, useNavigate } from 'react-router-dom'

function useVerifyOtp() {
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()

    const verifyOtp = async (otp)=>{
        try {
            setLoading(true)
            
            
            const response = await verifyOtpRequest(otp);
            if(response.status === 200){
            
                toast.success(response.message)

                navigate('/')
            }else{
            
                toast.error(response.message)
            }

        } catch (error) {

            toast.error(error.message)
            
        } finally {
            setLoading(false)
        }
    }
    return { loading, verifyOtp }
}

export default useVerifyOtp
