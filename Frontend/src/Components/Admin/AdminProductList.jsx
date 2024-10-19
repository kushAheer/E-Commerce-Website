import React from 'react'
import { Suspense } from 'react'
function AdminProductList() {
    const ProductList = React.lazy(() => import("../Products/ProductList.jsx"))
    
    return (
        <>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        
                        <div className='row'>
                            <Suspense fallback={<h1>Loading...</h1>}>
                                <ProductList type={"Admin"}/>
                            </Suspense>
                            
                        </div>

                    </div>

                </div>
            </div>
        </>
    )
}

export default AdminProductList
