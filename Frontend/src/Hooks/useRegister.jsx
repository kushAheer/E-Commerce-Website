import React from 'react'
import { useState } from 'react'
import { registerRequest } from '../Utils/AuthPost'
import toast from 'react-hot-toast'
import { redirect, useNavigate } from 'react-router-dom'
function useRegister() {
	const [loading , setLoading] = useState(false)
	const navigate = useNavigate()
	const registerUser = async ({fullName , email ,password})=>{
		try {
		
			setLoading(true)
			const check = verifyInput(fullName , email , password)
			if(!check){
				setLoading(false)
				return;
			}
			const response = await registerRequest({fullName , email ,password});

			console.log(response)
			
			if(response.status === 200){
				toast.success(response.message)
				navigate('/otp-verify')
			}else{
				toast.error(response.message)
			}

		} catch (error) {

			toast.error(error.message)

		}finally{
			setLoading(false)
		}
	}
	return { loading,registerUser}
}

const verifyInput = (fullName , email , password)=>{
	if(fullName === '' || email === '' || password === ''){
		toast.error('All fields are required')
		return false;
	}
	if(fullName.length > 25){
		toast.error('Full name must be less than 25 characters')
		return false;
	}
	if(password.length < 8){
		toast.error('Password must be at least 8 characters')
		return false;
	}
	if(email.includes('@') === false || email.includes('.') === false){
		toast.error('Email is not valid')
		return false;
	}
	return true;
}



export default useRegister



