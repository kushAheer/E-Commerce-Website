import React from 'react'
import Button from './Button'
import classes from './ProductCard.module.css'
import { Link } from 'react-router-dom'


function ProductCard({image ,title , price,slug , buttonType ,type}) {
    
    

    return (
        <>
            <div className="card">
                <img src={image} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className={`${classes.text}`}>{title}</h5>
                    <p className={`${classes.price}`}>${Math.floor(price)}</p>
                    <div className='row'>

                    <div className='col-md-12'>

                        <Link to={`${type == "Admin" ? `${slug}` :`/product/${slug}`}`}><Button>{buttonType}</Button></Link>
                    </div>
                    {/* <div className='col-md-4'>

                        <Button onClicl><img width="32" height="32" src="https://img.icons8.com/windows/32/shopping-cart.png" alt="shopping-cart" /></Button>
                    </div> */}
                    </div>
                </div>
            </div>
        </>
    )
}

export default ProductCard