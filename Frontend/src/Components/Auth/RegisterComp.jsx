import React from 'react'
import classes from './RegisterComp.module.css'

function RegisterComp() {
	return (
		<>
			<div class="vh-90 gradient-custom">
				<div class="container h-100">
					<div class="row d-flex justify-content-center align-items-center">
						<div class="col-12 col-md-8 col-lg-6 col-xl-5">
							<div class=" bg-dark text-white" style={{ borderRadius: '1rem' }}>
								<div class="card-body p-5 text-center">
									<div class="mt-md-4 ">
										<h2 class="fw-bold mb-2 text-uppercase">Register</h2>
										{/* <p class="text-white-50 mb-5">Please enter your login and password!</p> */}
										<div className={`${classes.formBox}`}>

											<div  className={`${classes.formItem}`}>
												<label class="form-label" htmlFor="typeEmail">Full Name</label>
												<input type="text" id="typeEmailX" class="form-control" />
											</div>
											<div className={`${classes.formItem}`}>
												<label class="form-label" htmlFor="typeEmail">Email</label>
												<input type="email" id="typeEmailX" class="form-control" />
											</div>

											<div className={`${classes.formItem}`}>
												<label class="form-label" htmlFor="typePassword">Password</label>
												<input type="password" id="typePasswordX" class="form-control" />
											</div>
										</div>

										<p class="small mb-5 pb-lg-2"><a class="text-white-50" href="#!">Forgot password?</a></p>

										<button class="btn btn-outline-light btn-lg px-5" type="submit">Create</button>

									</div>

									<div>
										<p class="mb-0 mt-5">Already Have account? <a href="#!" class="text-white-50 fw-bold">Login</a>
										</p>
									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default RegisterComp