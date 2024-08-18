import React, { Suspense } from 'react'
import { lazy } from 'react'

function ProductComp() {

    const ProductList = lazy(() => import("../Products/ProductList.jsx"))
    
    return (
        <>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        
                        <div className='row'>
                            <Suspense fallback={<h1>Loading...</h1>}>
                                <ProductList />
                            </Suspense>
                            
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default ProductComp