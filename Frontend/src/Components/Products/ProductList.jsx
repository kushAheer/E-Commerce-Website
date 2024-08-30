import React from 'react'
import useGetProduct from '../../Hooks/useGetProduct'
import ProductCard from '../../UI/ProductCard'
import im from '../../../../Backend/Uploads/1723230253388-wp7337480-anime-mac-air-wallpapers.jpg'
import { useSelector } from 'react-redux'

function ProductList() {
    const [filter , setFilter] = React.useState('')
    
    
    // const product  = useSelector(state => state.products.products)
    // const loading = useSelector(state => state.products.loading)

    const {product , loading} = useGetProduct(filter)

    return (
        <>
            {!loading && product.map((item) => (
                <div className='col-md-3 col-6' key={item.id}>
                    
                    
                    <ProductCard image={`http://localhost:5000/uploads/${item.product_image}`} title={item.product_name} price={item.product_price} slug = {item.product_slug} />
                </div>
            ))}
            {loading && <h1>Loading...</h1>}
        </>
    )
}

export default ProductList