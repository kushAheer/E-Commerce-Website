import React from 'react'
import firstBanner from '../../assets/home_pageBanner.webp'
import secondBanner from '../../assets/home_pageBanner2.webp'
import thirdBanner from '../../assets/homepage_banner3.webp'


function FrontImages() {
	
	return (
		<>
			<div className="container-fluid m-0">
				<div className='row'>
					<div className='col-md-12 m-0 p-0'>
						<div id="carouselExampleAutoplaying" className="carousel slide" data-bs-ride="carousel">
							<div className="carousel-indicators">
								<button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
								<button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="1" aria-label="Slide 2"></button>
								<button type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide-to="2" aria-label="Slide 3"></button>
							</div>
							<div className="carousel-inner">
								<div className="carousel-item active">
									<img src={firstBanner} className="d-block w-100" alt="..." loading='lazy' />
									
								</div>
								<div className="carousel-item">
									<img src={secondBanner} className="d-block w-100" alt="..." />
									
								</div>
								<div className="carousel-item">
									<img src={thirdBanner} className="d-block w-100" alt="..." />
									
								</div>
							</div>
							
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default FrontImages