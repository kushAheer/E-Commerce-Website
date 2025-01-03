import React, { useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
import classes from './Cart.module.css'
import { useDispatch, useSelector } from 'react-redux'
import { setAddress , removeAddress } from '../../Context/Slices/addressSlice'

function Address() {

    const dispatch = useDispatch()
    const data = useLoaderData()
    console.log(data.profileData)
    const [details , setDetails] = React.useState(null)
    const isAdressSelected = useSelector(state => state.address.item) == null ? false : true

    const orderHandler = (item) => {

        
        if(details == null){
            dispatch(setAddress(item))
            setDetails(item.id)
        }else{
            setDetails(null)
            dispatch(removeAddress())
            dispatch(setAddress(item))
            setDetails(item.id)

        }
    }

    return (
        <>
            <div className='row'>
                {data.profileData  ? data.profileData.map((item) => (
                    <div className='col-md-6' key={item.id} onClick={()=>orderHandler(item)}>


                        <div className={`card m-3 ${details == item.id ? classes.active : ""}`} style={{ borderRadius: '10px' }}>
                            <div className='m-3'>

                                <h5 className={`${classes.text}`} >FullName : {item.first_name + " " + item.last_name}</h5>
                                <h5 className={`${classes.text}`}>Address : {item.address}</h5>
                                <h5 className={`${classes.text}`}>Phone Number :{item.phone}</h5>
                            </div>

                        </div>

                    </div>
                )) : <div className='col-md-12'>
                    No Address Found
                </div>}




            </div>

            <div className='d-flex flex-start items-center justify-content-center'>
                <hr />
                <span className='mx-3 text-2xl'>OR</span>
                <hr />


            </div>
            <div>
                <Link to={'/cart/createAddress'}><button className='btn btn-primary w-100 m-1'>Add Address</button></Link>
            </div>


        </>
    )
}

export default Address