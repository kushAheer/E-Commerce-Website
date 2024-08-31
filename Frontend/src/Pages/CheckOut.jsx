import React from 'react'
import { useSelector } from 'react-redux';
import { useLoaderData, useParams } from 'react-router-dom';
import { useDispatch } from 'react-redux';

function CheckOut() {

    const data = useSelector(state => state.address.item)

    console.log(data)

    const dispatch = useDispatch()


    

    

    



    return (
        <div>
            Order Confirmed
        </div>
    )
}

export default CheckOut;