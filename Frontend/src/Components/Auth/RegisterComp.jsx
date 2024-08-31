import React from 'react'
import classes from './RegisterComp.module.css'
import useRegister from '../../Hooks/useRegister.js'
import { useState } from 'react';

function RegisterComp() {

	const {loading  ,registerUser } = useRegister();
	const [fullName , setFullName] = useState('')
	const [email , setEmail] = useState('')
	const [password , setPassword] = useState('')

	const handleSubmit = async (e)=>{
		e.preventDefault()
		const data = {
			fullName,
			email,
			password
		}
		await registerUser(data);
		
	}


	return (
		<>
			<div className={`${classes.centerWrapper} pt-5`}>
				<div className="row">
					<div className="col-md-12">
						<div className={`row `}>
							<div className={`col-md-12 ${classes.titleCenter}`}>
								<h3>Create New Account</h3>
							</div>
							<div className={`col-md-12 ${classes.formWrapper}`}>
								<form className={`${classes.formBox}`} onSubmit={handleSubmit}>
									<div className='form-group w-100'>
										<label>Full Name</label>
										<input type='text' className='form-control' placeholder='Enter Full Name' value={fullName} onChange={(e)=>setFullName(e.target.value)} />

									</div>
									<div className='form-group w-100'>
										<label>Email</label>
										<input type='email' className='form-control' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}  />

									</div>
									<div className='form-group w-100'>
										<label>Password</label>
										<input type='password' className='form-control' placeholder='Password'  value={password} onChange={(e)=>setPassword(e.target.value)} />

									</div>
									<button type='submit' className='btn btn-primary' style={{width : '100%'}}>{loading ? "Loading..." : "Register"}</button>
								</form>
							</div>

						</div>
					</div>
				</div>

			</div>
		</>
	)
}

export default RegisterComp