import React from 'react'
import classes from './Cart.module.css'
import { useSelector, useDispatch } from 'react-redux'
import { removeFromCart, updateCartQuantity } from '../../Context/Slices/cartSlice'
import { useState } from 'react'

function Cart() {

    const dispatch = useDispatch()

    const cart = useSelector(state => state.carts.items)
    const totalPrice = useSelector(state => state.carts.totalPrice)
    const totalQuantity = useSelector(state => state.carts.totalQty)
    const [qty, setQty] = useState(1)

    const removeHandler = (id) => {
        dispatch(removeFromCart(id))
    }
    const updateHandler = (id, e) => {
        const newQty = Number(e.target.value)
        setQty(e.target.value)
        console.log(id)
        dispatch(updateCartQuantity({ id: id, quantity: newQty }))


    }

    return (


        <div className="container pt-5">
            <div className="row">
                <div className='col-md-8'>
                    <div className={`card `} style={{ borderRadius: '0' }}>

                        {cart.length > 0 ?
                            cart.map(item => (

                                <div className='row m-3' key={item.id}>
                                    <div className={`col-md-4 pb-3 `}>
                                        <img src={`http://localhost:5000/uploads/${item.image}`} alt="product" className='img-fluid' />
                                    </div>
                                    <div className={`col-md-8 pb-3`}>
                                        <div className='col-md-12'>
                                            <div className={`${classes.itemWrapper}`}>

                                                <h5>${item.title}</h5>

                                                <p>{Math.floor(item.price)}</p>
                                            </div>
                                            <div className={`${classes.itemWrapper}`}>
                                                <h5>Quantity</h5>
                                                <input
                                                    type="number"
                                                    value={item.quantity}
                                                    min={1}
                                                    max={5}
                                                    onChange={(e) => updateHandler(item.id, e)}
                                                />

                                            </div>
                                            <div className={`${classes.itemWrapper}`} style={{ borderBottom: "none" }}>
                                                <h5>Total Price</h5>
                                                <p>${Math.floor(item.totalPrice)}</p>
                                            </div>
                                            <div className='col-md-12  p-3 d-flex flex-row-reverse' style={{ borderTop: '1px solid #ccc ', borderBottom: '1px solid #ccc' }}>
                                                <button onClick={() => removeHandler(item.id)} className='btn btn-danger'>Remove</button>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )) : "No Items in Cart"
                        }


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
                                <button className={`btn pointer text-uppercase w-100`} style={{ backgroundColor: "#337B7A", color: "white" }}>Proceed to Checkout</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Cart