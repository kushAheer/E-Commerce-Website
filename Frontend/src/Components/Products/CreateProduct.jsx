import React from 'react'
import classes from './CreateProduct.module.css'



function CreateProduct() {
    return (
        <>
            <div className={`container pt-5 ${classes.wrapper}`}>
                <div className={`row`}>
                    <div className={'col-md-12 card'}>
                        <form className={`row card-body`}>

                            <div className='col-md-12 pt-4'>
                                <label for="name" className="form-label">Product Name</label>
                                <input type="text" className="form-control" id="name" />

                            </div>
                            <div className='col-md-12 pt-4'>
                                <label for="description" className="form-label">Description</label>
                                <textarea type="text" className="form-control" id="description" />
                            </div>
                            
                            <div className='col-md-12 pt-4'>
                                <label for="images" className="form-label">Images</label>
                                <input type='file' className="form-control" id="image" />
                            </div>

                            <div className='col-md-12 pt-4'>
                                <label for="slug" className="form-label">Slug</label>
                                <input type="text" className="form-control" id="slug" />
                            </div>
                            <div className='col-md-12 pt-4'>
                                <label for="price" className="form-label">Price</label>
                                <input type="number" className="form-control" id="price" />
                            </div>
                            <div className={`col-md-6 pt-4`}>
                                <label for="category" className="form-label">Category</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>

                            </div>
                            <div className={`col-md-6 pt-4`}>
                                <label for="sub-category" className="form-label">Sub-Category</label>
                                <select class="form-select" aria-label="Default select example">
                                    <option selected>Open this select menu</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                                </select>
                            </div>
                        </form>
                    </div>

                </div>

            </div>
        </>
    )
}

export default CreateProduct