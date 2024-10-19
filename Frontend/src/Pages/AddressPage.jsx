import React from 'react'
import Address from '../Components/Cart/Address'


function AddressPage() {

    

    return (
        <>
            <Address />
        </>
    )
}

export default AddressPage

export const AddressPageLoader = () => {
    const response = fetch('/api/user/details',{
        method : 'GET',
        headers : {
            'Content-Type' : 'application/json',
        },
        credentials : 'include',
    }).then(res => res.json())
    

    return response;
}