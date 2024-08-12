import React from 'react'
import classes from './CreateProduct.module.css'
import ImageUploader from '../../UI/ImageUploader'
import { useState } from 'react'

import useCreateProduct from '../../Hooks/useCreateProduct'
import useGetCategoryTree from '../../Hooks/useGetCategoryTree'

function CreateProduct() {

    const [Name, setName] = useState('')
    const [Description, setDescription] = useState('')
    const [Price, setPrice] = useState('')
    const [image, setImage] = useState([])
    const [categoryList, setCategoryList] = useState([])

    const { loading: createLoading, createProduct } = useCreateProduct()
    const { loading, categories } = useGetCategoryTree()



    const handleCheck = (e) => {
        
        setCategoryList([...categoryList, e.target.value])
    }
    const createTree = (categories) => {
        
        const tree = categories.map((item) => {
            return (
                
                <li key={item.category.id} >
                    <input type='checkbox' className='form-checkbox' value={item.category.id} onChange={handleCheck} />
                    <label className='m-1' style={{ fontSize: '0.75rem' }}>{item.category.category_name}</label>

                    <div className=''>
                        <ul className='list-unstyled ps-4'>
                            {item.category.children.length > 0 && createTree(item.category.children)}
                        </ul>
                    </div>
                </li>
            )
        })
        return tree;
    }
    
    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const data = {
            name: Name,
            description: Description,

            price: Price,
            image: image,
            frontImage: e.target['front-image'].files,
            categoryList: categoryList,
            
        }

        await createProduct(data);

    }

    return (
        <>
            <div className={`container pt-5 ${classes.wrapper}`}>
                <form className={`row p-3`} onSubmit={handleSubmit}>
                    <div className={'col-md-8  col-sm-12 pt-3 '}>
                        <div className={`row ps-3`} >
                            <div className={`${classes.formWrapper}`}>

                                <div className='col-md-12 pt-4'>
                                    <label htmlFor="name" className={`form-label ${classes.labelStyle}`} >Product Name</label>
                                    <input type="text" className="form-control" id="name" value={Name} onChange={(e) => setName(e.target.value)} />

                                </div>
                                <div className='col-md-12 pt-4'>
                                    <label htmlFor="description" className={`form-label ${classes.labelStyle}`} >Description</label>
                                    <textarea type="text" className="form-control" id="description" value={Description} onChange={(e) => setDescription(e.target.value)} />
                                </div>

                                <div className='col-md-12 pt-4'>
                                    <ImageUploader setImage={setImage} prev={image} />
                                </div>
                                <div className='col-md-12 pt-4'>
                                    <label htmlFor="front-image" className={`form-label ${classes.labelStyle}`} >Front Image</label>
                                    <input type="file" className="form-control" id="front-image" />
                                </div>
                                <div className='col-md-12 pt-4'>
                                    <label htmlFor="price" className={`form-label ${classes.labelStyle}`} >Price</label>
                                    <input type="number" className="form-control" id="price" value={Price} onChange={(e) => setPrice(e.target.value)} />
                                </div>
                                <div>
                                    <button type="submit" className="btn btn-primary mt-4 w-100">Submit</button>
                                </div>
                            </div>

                        </div>
                    </div>
                    <div className='col-md-4 col-sm-12 pt-3'>
                        <div className={`row ps-3`}>
                            <div className={`${classes.formWrapper}`}>

                                <div className={`col-md-12 ${classes.titleStyle}`}>
                                    <h5>Category</h5>

                                </div>
                                <div className={`col-md-12 pt-2 ${classes.scrollCatgory} `}>
                                    <ul className=' list-unstyled p-0'>
                                        {createTree(categories)}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </form>

            </div>
        </>
    )
}

export default CreateProduct