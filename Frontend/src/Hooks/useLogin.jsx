import React from 'react'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginRequest } from '../Utils/AuthPost'
import toast from 'react-hot-toast'
import { useDispatch } from 'react-redux'
import { login } from '../Context/Slices/userSlice'
function useLogin() {

    const [loading, setLoading] = useState(false)
    const navigate = useNavigate()
    const dispatch = useDispatch()

    const loginUser = async ({ email, password }) => {
        
        try {

            setLoading(true)

            const response = await loginRequest({ email, password });
            console.log(response)
            if (response.status === 200) {
                
                toast.success(response.message)
                dispatch(login(response.userData))

                navigate('/')

            } else {
            
                toast.error(response.message)
            }

        } catch (error) {
            
            toast.error(error.message)

        } finally {
            
            setLoading(false)

        }
    }
    return { loading, loginUser }
}

export default useLogin