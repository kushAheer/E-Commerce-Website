import React from 'react'
import classes from './RegisterComp.module.css'
import { useState } from 'react'
import useLogin from '../../Hooks/useLogin.js'

function LoginComp() {

	const [email, setEmail] = useState('')
	const [password, setPassword] = useState('')

	const { loading, loginUser } = useLogin()

	const handleSubmit = async (e) => {
		e.preventDefault()

		await loginUser({ email, password });

		
	}

	
	return (
		<>
			<div className={`${classes.centerWrapper} pt-5`}>
				<div className="row">
					<div className="col-md-12">
						<div className={`row `}>
							<div className={`col-md-12 ${classes.titleCenter}`}>
								<h3>Log In to your Account</h3>
							</div>
							<div className={`col-md-12 ${classes.formWrapper}`}>
								<form className={`${classes.formBox}`} onSubmit={handleSubmit}>
									<div className='form-group w-100'>
										<label>Email</label>
										<input type='email' className='form-control' placeholder='Enter Email' value={email} onChange={(e)=>setEmail(e.target.value)}/>

									</div>
									<div className='form-group w-100'>
										<label>Password</label>
										<input type='password' className='form-control' placeholder='Password' value={password} onChange={(e)=>setPassword(e.target.value)} />
									</div>
									<button type='submit' className='btn btn-primary' style={{width : '100%'}}>{loading ? "Loading..." : "Login"}</button>
								</form>
							</div>

						</div>
					</div>
				</div>

			</div>
		</>
	)
}

export default LoginComp
