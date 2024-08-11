import React from 'react'
import classes from './CreateProduct.module.css'
import ImageUploader from '../../UI/ImageUploader'
import { useState } from 'react'
import useGetCategory from '../../Hooks/useGetCategory'
import useGetSubCategory from '../../Hooks/useGetSubCategory'
import useCreateProduct from '../../Hooks/useCreateProduct'

function CreateProduct() {

    const [isActive, setIsActive] = useState(false);
    const [trigger, setTrigger] = useState(false)
    const [ id , setId ] = useState(null)

    const [Name, setName] = useState('')
    const [Description, setDescription] = useState('')
    
    const [Price, setPrice] = useState('')
    const [image, setImage] = useState([])
    const [frontImage, setFrontImage] = useState(null)
    const [subCategoryId, setSubCategoryId] = useState('')






    const { loading, categories } = useGetCategory()
    const {loading : createLoading , createProduct} = useCreateProduct()
    const { loading: subLoading, subCategories } = useGetSubCategory(trigger , id)
    

    const handleSelect = (e) => {

        if (e.target.value === '-1') {

            setIsActive(false)

        } else {
            setTrigger(!trigger)
            setIsActive(true)
            setId(e.target.value)
        }
        
        
    }
    const handleSubCategory = (e) => {
        if(e.target.value != '-1'){
            
            setSubCategoryId(e.target.value)
        }
        
    }
    

    const handleSubmit = async (e) => {
        e.preventDefault()
        if(subCategories == '-1'){
            alert('Please select a sub category')
            return;
        }
        const data = {
            name: Name,
            description: Description,
        
            price: Price,
            image: image,
            frontImage: e.target['front-image'].files,
            category_id : subCategoryId,
            parent_cat_id: id
        }
        await createProduct(data);
        
    }


    return (
        <>
            <div className={`container pt-5 ${classes.wrapper}`}>
                <div className={`row`}>
                    <div className={'col-md-10  col-sm-12 card'}>
                        <form className={`row card-body`} onSubmit={handleSubmit}>

                            <div className='col-md-12 pt-4'>
                                <label htmlFor="name" className="form-label">Product Name</label>
                                <input type="text" className="form-control" id="name" value={Name} onChange={(e)=>setName(e.target.value)}/>

                            </div>
                            <div className='col-md-12 pt-4'>
                                <label htmlFor="description" className="form-label">Description</label>
                                <textarea type="text" className="form-control" id="description" value={Description} onChange={(e)=>setDescription(e.target.value)} />
                            </div>

                            <div className='col-md-12 pt-4'>
                                <ImageUploader setImage={setImage} prev={image} />
                            </div>
                            <div className='col-md-12 pt-4'>
                                <label htmlFor="front-image" className="form-label">Front Image</label>
                                <input type="file" className="form-control" id="front-image" />
                            </div>
                            <div className='col-md-12 pt-4'>
                                <label htmlFor="price" className="form-label">Price</label>
                                <input type="number" className="form-control" id="price" value={Price} onChange={(e)=>setPrice(e.target.value)} />
                            </div>
                            {/* <div className={`${isActive ? "col-md-6" : "col-md-12"} pt-4`}>
                                <label htmlFor="category" className="form-label" >Category</label>
                                <select className="form-select" aria-label="Default select example" onChange={handleSelect}>
                                    <option defaultValue value={"-1"}>Open this select menu</option>
                                    {
                                        categories.map((category) => {
                                            return <option key={category.id} value={category.id}>{category.category_name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            {isActive &&
                            <div className={`col-md-6 pt-4`}>
                                <label htmlFor="sub-category" className="form-label">Sub-Category</label>
                                <select className="form-select" aria-label="Default select example" onChange={handleSubCategory}>
                                    <option defaultValue value={"-1"}>Open this select menu</option>
                                    {
                                        subCategories.map((subCategory) => {
                                            return <option key={subCategory.id} value={subCategory.id}> {subCategory.category_name}</option>
                                        })
                                    }
                                </select>
                            </div>
                            } */}
                            <div>
                                <button type="submit" className="btn btn-primary mt-4 w-100">Submit</button>
                            </div>
                        </form>
                    </div>
                    <div className='col-md-2 col-sm-12 card'>
                        <form className='row card-body'>
                            <div className='col-md-12'>
                                <h1>Category</h1>

                            </div>
                            <div className='col-md-12'>
                                <select className="form-select" aria-label="Default select example" onChange={handleSelect}>
                                    <option defaultValue value={"-1"}>Open this select menu</option>
                                    {
                                        categories.map((category) => {
                                            return <option key={category.id} value={category.id}>{category.category_name}</option>
                                        })
                                    }
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