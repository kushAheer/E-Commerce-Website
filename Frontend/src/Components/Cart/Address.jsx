import React, { useEffect } from 'react'
import { Link, useLoaderData } from 'react-router-dom'
function Address() {


    const data = useLoaderData()
    console.log(data.profileData)
    

    const orderHandler = (id) => {
        console.log(id)
    }

    return (
        <>
            <div className='row'>
                {data.profileData.length > 0 && data.profileData ? data.profileData.map((item) => (
                    <div className='col-md-6' key={item.id} onClick={()=>orderHandler(item.id)}>


                        <div className='card m-3' style={{ borderRadius: '10px' }}>
                            <div className='m-3'>

                                <h5>{item.first_name + " " + item.last_name}</h5>
                                <h5>{item.address}</h5>
                                <h5>{item.phone}</h5>
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