import React from 'react'
import { Link, Outlet } from 'react-router-dom'
import useGetProduct from '../../Hooks/useGetProduct';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function ProductNavBar() {

    const navigate = useNavigate()
    // const onSelect = (e) => {
    //     console.log(e.target.value);
        

    // }
    // const[type , setType] =  useState('normal');

    // const {product , loading } = useGetProduct(type)

    // const typeHandler = (e) => {
    //     console.log(e.target.value)
    //     setType(e.target.value)
    // }
    const handleSortChange = (event) => {
        const value = event.target.value
        if (value === 'normal') {
            navigate('/product')
        } else {
            navigate(`/product?sortBy=${value}`)
        }
    }


    return (
        <>
            <div className='container pt-5'>


                <div className='row'>
                    <div className='col-md-12 d-flex flex-row justify-content-between align-items-center'>
                        <h5 className='d-none d-md-flex'>FILTER BY</h5>
                        <div className='d-flex flex-row align-items-center'>
                            <label className='pe-2'>SORT BY : </label>
                            <select className='form-select w-auto' onChange={handleSortChange}>
                                <option defaultValue value={'normal'}>Relevant</option>
                                <option value={'ASC'}>Price Low to High</option>
                                <option value={'DESC'}>Price Hight to Low</option>
                            </select>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductNavBar