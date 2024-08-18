import React from 'react'
import { Outlet } from 'react-router-dom'
import useGetProduct from '../../Hooks/useGetProduct';
import { useState } from 'react';
function ProductNavBar() {


    const onSelect = (e) => {
        console.log(e.target.value);
        

    }
    const[type , setType] =  useState('normal');

    const {product , loading } = useGetProduct(type)

    const typeHandler = (e) => {
        console.log(e.target.value)
        setType(e.target.value)
    }


    return (
        <>
            <div className='container pt-5'>


                <div className='row'>
                    <div className='col-md-12 d-flex flex-row justify-content-between align-items-center'>
                        <h5 className='d-none d-md-flex'>FILTER BY</h5>
                        <div className='d-flex flex-row align-items-center'>
                            <label className='pe-2'>SORT BY : </label>
                            <select className='form-select w-auto' onChange={typeHandler}>
                                <option defaultValue value={'normal'}>Relevant</option>
                                <option value={'lowtohigh'}>Price Low to High</option>
                                <option value={'hightolow'}>Price Hight to Low</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductNavBar