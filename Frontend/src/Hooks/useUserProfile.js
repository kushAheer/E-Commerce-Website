import React, { useEffect } from 'react'
import { useState } from 'react'
import toast from 'react-hot-toast'
import { useSelector } from 'react-redux'
import {useNavigate} from 'react-router-dom'


function useUserProfile() {
    
    
    const [loading, setLoading] = useState(false)
    const navigate = useNavigate();
    
     
    
        const addUserProfile = async (data) => {
            try {
                setLoading(true)
                const response = await addUserDetails(data);
                if(response.status === 200){

                    toast.success('Address Created Successfully');
                    navigate('/cart/address');

                }else{
                    toast.error('Failed to Create Address');
                }
            } catch (error) {
                
                toast.error('Failed to Create Address');

            }finally{
                setLoading(false)
            }
        }
        
    

    return {loading , addUserProfile }

}

export default useUserProfile

const addUserDetails = async (data) => {
    const response  = await fetch('/api/user/CreateUser',{
        method : 'POST',
        headers : {
            'Content-Type' : 'application/json',
            
        },
        credentials : 'include',
        body : JSON.stringify(data)


    }).then(res => res.json())
    
    return response;
}