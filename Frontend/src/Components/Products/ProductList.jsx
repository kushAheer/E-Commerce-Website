import React from 'react'
import useGetProduct from '../../Hooks/useGetProduct'
import ProductCard from '../../UI/ProductCard'
import im from '../../../../Backend/Uploads/1723230253388-wp7337480-anime-mac-air-wallpapers.jpg'

function ProductList() {
    const [filter , setFilter] = React.useState('')
    const {product, loading} = useGetProduct()
    
    

    return (
        <>
            {!loading && product.map((item) => (
                <div className='col-md-3 col-6' key={item.id}>
                    {console.log(`${item.product_image}`)}
                    
                    <ProductCard image={`http://localhost:5000/uploads/${item.product_image}`} title={item.product_name} price={item.product_price} />
                </div>
            ))}
        </>
    )
}

export default ProductList