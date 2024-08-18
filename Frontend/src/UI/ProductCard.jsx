import React from 'react'
import Button from './Button'
import classes from './ProductCard.module.css'


function ProductCard({image ,title , price}) {
    
    

    return (
        <>
            <div className="card">
                <img src={image} className="card-img-top img-fluid" alt="..." />
                <div className="card-body">
                    <h5 className={`${classes.text}`}>{title}</h5>
                    <p className={`${classes.price}`}>${Math.floor(price)}</p>
                    <Button>ADD TO CART </Button>
                </div>
            </div>
        </>
    )
}

export default ProductCard