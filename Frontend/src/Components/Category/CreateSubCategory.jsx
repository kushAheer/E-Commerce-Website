import React from 'react'
import classes from './CreateCategory.module.css'
import useGetCategory from '../../Hooks/useGetCategory.js'
import useCreateSubCategory from '../../Hooks/useCreateSubCategory.js'
import { useState } from 'react'
import toast from 'react-hot-toast'

function CreateSubCategory() {


    const [isActive, setIsActive] = useState(false);
    const [Name, setName] = useState('')
    
    const [Category, setCategory] = useState('')

    const { loading, categories } = useGetCategory()
    const {loading : subLoading, createSubCategory} = useCreateSubCategory()


    console.log(categories);

    const handleSubmit = async (e) => {
            
            e.preventDefault()
            console.log('Form Submitted')
            const data = {
                name: Name,
                
                parent_cat_id: Category
            }
    
            if (Name === '') {
                toast.error('Please Fill All Fields')
                return;
            }
            
    
            await createSubCategory(data);
    }

    const handleSelect = (e) => {
        
        if(e.target.value === '-1'){

            setIsActive(false)
        }else{
            setIsActive(true)
            setCategory(e.target.value)
        }
        console.log(e.target.value);
        
    }

    return (
        <>
            <div className={`container pt-5 ${classes.wrapper}`}>
                <div className={`row`}>
                    <div className={'col-md-12 card'}>
                        <form className={`row card-body`} onSubmit={handleSubmit}>
                            <div className={`col-md-12 pt-4`}>
                                <label htmlFor="category" className="form-label">Category</label>
                                <select className="form-select" aria-label="Default select example" onChange={handleSelect}>
                                    <option defaultValue={'-1'} value={"-1"}>Open this select menu</option>
                                    {
                                        categories.map((category) => {
                                            return <option key={category.id}  value={category.id}>{category.category_name}</option>
                                        })
                                    }
                                </select>

                            </div>
                            {isActive &&
                                <div>
                                    <div className='col-md-12 pt-4'>
                                        <label htmlFor="name" className="form-label">Sub-Category Name</label>
                                        <input type="text" className="form-control" id="name" value={Name} onChange={(e)=>setName(e.target.value)} />
                                    </div>
                                    
                                </div>
                            }
                            <div>
                                <button type="submit" className="btn btn-primary mt-4 w-100">Submit</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CreateSubCategory