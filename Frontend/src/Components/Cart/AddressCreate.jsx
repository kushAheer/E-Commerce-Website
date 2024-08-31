import React from 'react'
import useUserProfile from '../../Hooks/useUserProfile.js';
import toast from 'react-hot-toast';
function AddressCreate() {

    const {loading , addUserProfile } = useUserProfile();

    const onSubmitHandler = (e) => {

        e.preventDefault();
        const data = {
            first : e.target[0].value,
            last : e.target[1].value,
            address : e.target[2].value,
            city : e.target[3].value,
            pincode : e.target[4].value,
            state : e.target[5].value,
            country : e.target[6].value,
            phone : e.target[7].value
        }
        if(data.first_name === '' || data.last_name === '' || data.address === '' || data.city === '' || data.pincode === '' || data.state === '' || data.country === '' || data.phone === ''){
            return toast.error('Please Fill all the fields');
        }
        if(data.phone.length !== 10){
            return toast.error('Please Enter a valid Phone Number');
        }
        if(data.pincode.length !== 6){
            return toast.error('Please Enter a valid Pincode');
        }
        

        addUserProfile(data);
    }

    return (
        <>
            
                <div className='row'>
                    <div className='col-md-12 pt-5 '>
                        <h3 className='text-center'>Add Address</h3>
                    </div>
                </div>
                <div className='row'>
                    <div className='col-md-6 offset-md-3'>
                        <form onSubmit={onSubmitHandler}>
                            <div className='row'>

                                <div className="col-md-6 mb-3">
                                    <label for="exampleInputEmail1" className="form-label">First Name</label>
                                    <input type="text" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="exampleInputEmail1" className="form-label">Last Name</label>
                                    <input type="text" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputEmail1" className="form-label">Address</label>
                                <input type="text" required className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">City</label>
                                <input type="text" required className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className='row'>

                                <div className="col-md-6 mb-3">
                                    <label for="exampleInputPassword1" className="form-label">Pincode</label>
                                    <input type="number" required className="form-control" id="exampleInputPassword1" />
                                </div>
                                <div className="col-md-6 mb-3">
                                    <label for="exampleInputPassword1" className="form-label">State</label>
                                    <input type="text" required className="form-control" id="exampleInputPassword1" />
                                </div>
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Country</label>
                                <input type="text"required className="form-control" id="exampleInputPassword1" />
                            </div>
                            <div className="mb-3">
                                <label for="exampleInputPassword1" className="form-label">Phone Number</label>
                                <input type="number" required className="form-control" id="exampleInputPassword1" />
                            </div>
                            <button type="submit" required className="btn btn-primary mb-3">{loading ? "Loading" : "Submit"}</button>
                        </form>
                    </div>
                </div>
            
        </>
  )
}

export default AddressCreate