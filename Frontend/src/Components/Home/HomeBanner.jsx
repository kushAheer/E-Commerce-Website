import React from 'react'
import firstBanner from '../../assets/classics.jpg'
import secondBanner from '../../assets/cotton.jpg'
import thirdBanner from '../../assets/wedding.jpg'


function FrontImages() {
	return (
		<>
			<div classNameName="container-fluid m-0">
				<div classNameName='row'>
					<div classNameName='col-md-12 m-0 p-0'>
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
							{/* <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="prev">
								<span className="carousel-control-prev-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Previous</span>
							</button> */}
							{/* <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleCaptions" data-bs-slide="next">
								<span className="carousel-control-next-icon" aria-hidden="true"></span>
								<span className="visually-hidden">Next</span>
							</button> */}
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export default FrontImages