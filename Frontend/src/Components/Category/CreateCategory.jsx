import React from 'react'
import classes from './CreateCategory.module.css'
import useCreateCategory from '../../Hooks/useCreateCategory'
import { useState } from 'react'
import toast from 'react-hot-toast'

function CreateCategory() {

    const { loading, createCategory } = useCreateCategory()

    const [Name , setName] = useState('')
    

    const handleSubmit = async (e) => {
        
        e.preventDefault()
        console.log('Form Submitted')
        const data = {
            name : Name,
            frontImage : document.getElementById('image').files[0]            
        }

        if(Name === ''){
            toast.error('Please Fill All Fields')
            return;
        }

        await createCategory(data);


    }


    return (
        <>
            <div className={`container pt-5 ${classes.wrapper}`}>
                <div className={`row`}>
                    <div className={'col-md-12 card'}>
                        <form className={`row card-body`} onSubmit={handleSubmit}>
                            <div className='col-md-12 pt-4'>
                                <label htmlFor="name" className="form-label">Category Name</label>
                                <input type="text" className="form-control" id="name" value={Name} onChange={(e)=>setName(e.target.value)} />
                            </div>
                            <div className='col-md-12 pt-4'>
                                <label htmlFor="image" className="form-label">Front Image</label>
                                <input type="file" className="form-control" id="image" />
                            </div>
                            
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

export default CreateCategory