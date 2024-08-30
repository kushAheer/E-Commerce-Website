import React from 'react'

import classes from './productDetails.module.css'
import { useLoaderData } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart ,removeFromCart , updateCartQuantity } from '../../Context/Slices/cartSlice'
import { useState } from 'react'
import { useSelector } from 'react-redux'


function ProductDetails() {



    const [qty, setQty] = useState(1)  
    const dispatch = useDispatch()
    const data = useLoaderData()
    const cart = useSelector(state => state.carts.items) 
    const price = Math.floor(data.productData.product_price)

    const itemExist = cart.find(item => item.id === data.productData.id)
    console.log(data)

    

    
    const cartHandler = () => {

        const product = {
            id : data.productData.id,
            title : data.productData.product_name,
            price : data.productData.product_price,
            quantity : qty,
            image : data.productData.product_image
        }

        dispatch(addToCart(product))

    }
    const removeHandler = () => {
        dispatch(removeFromCart(data.productData.id))
    }
    const updateHandler = (e) => {
        const newQty = Number(e.target.value)
        setQty(e.target.value)
        if(itemExist){

            dispatch(updateCartQuantity({id : data.productData.id , quantity : newQty}))
        }
        
    }





    return (
        <>
            <div className='container-fluid'>
                <div className='row pt-5'>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-12 pt-1'>
                                <div className='row'>

                                    <div className='col-md-6'>
                                        <img src={`http://localhost:5000/uploads/${data.productData.product_image}`} alt='product' className='img-fluid' />
                                    </div>
                                    
                                        {data.images.map((item ,index) => (
                                            <div className='col-md-6' key={index}>
                                                <img src={`http://localhost:5000/uploads/${item.image_name}`} alt='product' className='img-fluid' />
                                            </div>
                                        ))}
                                        {/* <img src={data.images.image_name} alt='product' className='img-fluid' /> */}
                                    

                                </div>
                            </div>
                            

                        </div>
                    </div>
                    <div className='col-md-6'>
                        <div className='row'>
                            <div className='col-md-12'>
                                <h1 className={classes.title}>{data.productData.product_name}</h1>
                                <p className={classes.category}>{data.category.category_name}</p>
                            </div>
                            <div className='col-md-12'>
                                <h1 className={classes.price}>${price}</h1>
                                <p>MRP incl. of all taxes</p>
                            </div>
                            <div className={`col-md-12 ${classes.quantityWrapper}`}>
                                <h1 className={classes.quantityLabel}>Quantity</h1>
                                <input type='number' min={1} max={5} className={classes.qtyOption} value={itemExist ? itemExist.quantity :qty  } onChange={updateHandler} />
                            </div>
                            <div className='col-md-12 pt-3'>
                                {!itemExist &&<button onClick={cartHandler} className={`btn btn-danger btnWidth btn-lg btn-block pointer ${classes.addToCart}`}>Add to Cart</button>}
                                {itemExist && <button onClick={removeHandler} className={`btn btn-danger btnWidth btn-lg btn-block pointer ${classes.addToCart}`}>Remove from Cart</button>}
                            </div>
                            
                            <div className={`col-md-12 mt-5 card ${classes.detailsWrapper}`}>
                                <h1 className={`${classes.details} pt-4`}>Product Details</h1>
                                <p className={`${classes.desc}`}>{data.productData.product_desc}</p>
                            </div>

                        </div>

                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductDetails
