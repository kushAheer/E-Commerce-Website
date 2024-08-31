import React from 'react'
import { useDispatch ,useSelector} from 'react-redux'
import { removeFromCart, updateCartQuantity } from '../../Context/Slices/cartSlice'
import { useState } from 'react'
import classes from './Cart.module.css'

function ShoppingList() {
    const dispatch = useDispatch()

    const cart = useSelector(state => state.carts.items)
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
        <>
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
        </>
    )
}

export default ShoppingList