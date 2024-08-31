import React from 'react'
import classes from './Cart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateCartQuantity } from '../../Context/Slices/cartSlice'
import { useState } from 'react'
import { Link, Outlet, useLocation, useParams } from 'react-router-dom'

function Cart() {

    
    const totalQuantity = useSelector(state => state.carts.totalQty)
    const totalPrice = useSelector(state => state.carts.totalPrice)

    const params = useParams()
    const location  = useLocation()

    const currentUrl = location.pathname + location.search
    console.log(currentUrl)

    return (


        <div className="container pt-5">
            <div className="row">
                <div className='col-md-8'>
                    <div className={`card `} style={{ borderRadius: '0' }}>

                        <Outlet />


                    </div>
                </div>
                <div className='col-md-4'>
                    <h5>Billing Details</h5>
                    <div className={`card`} style={{ borderRadius: '0' }}>
                        <div className='row'>


                            <div className='col-md-12'>
                                <div className={`d-flex flex-column align-item-start justify-content-center`}>
                                    <div className={`${classes.itemWrapper}`}>

                                        <h5 className={`${classes.item}`}>Cart Total</h5>
                                        <p className={`${classes.item}`}>${totalPrice}</p>
                                    </div>
                                    <div className={`${classes.itemWrapper}`}>

                                        <h5 className={`${classes.item}`}>Total Quantity</h5>
                                        <p className={`${classes.item}`}>{totalQuantity}</p>

                                    </div>
                                    <div className={`${classes.itemWrapper}`}>

                                        <h5 className={`${classes.item}`}>Total Amount</h5>
                                        <p className={`${classes.item}`}>${totalPrice}</p>
                                    </div>
                                </div>
                            </div>
                            <div className='col-md-12 p-3'>

                                <Link to={'/product'}><button className={`btn pointer text-uppercase w-100`} style={{ backgroundColor: "white", color: "black" ,border: '1px solid black' ,borderRadius : '0px' }}>Continue Shopping</button></Link>
                                {
                                    currentUrl == '/cart' ? <Link to={'/cart/address'}><button className={`btn pointer text-uppercase w-100 mt-2`} style={{ backgroundColor: "black", color: "white" ,borderRadius : '0px'}}>Choose Delivery Address</button></Link> : null
                                }
                                {
                                    currentUrl == '/cart/address' ? <Link to={'/cart/checkout'}><button className={`btn pointer text-uppercase w-100 mt-2`} style={{ backgroundColor: "black", color: "white" ,borderRadius : '0px'}}>Proceed to CheckOut</button></Link> : null
                                }
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart