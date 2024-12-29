import React from 'react'
import useGetProduct from '../../Hooks/useGetProduct'
import ProductCard from '../../UI/ProductCard'

import { useSelector } from 'react-redux'

function ProductList({type}) {
    const [filter , setFilter] = React.useState('')
    
    
    // const product  = useSelector(state => state.products.products)
    // const loading = useSelector(state => state.products.loading)

    const {product , loading} = useGetProduct(filter)

    return (
        <>
            {!loading && product.map((item) => (
                <div className='col-md-3 col-6' key={item.id}>
                    
                    
                    <ProductCard image={`http://localhost:5000/uploads/${item.product_image}`} title={item.product_name} buttonType={type == "Admin" ? "Edit" : "DETAILS"} price={item.product_price} slug = {type == "Admin" ? `edit/${item.product_slug}` :  item.product_slug} type={type} />
                </div>
            ))}
            {loading && <h1>Loading...</h1>}
        </>
    )
}

export default ProductList