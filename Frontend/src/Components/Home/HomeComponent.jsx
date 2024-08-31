import React from 'react'
import HomeBanner from './HomeBanner.jsx'
import Card from 'react-bootstrap/Card'
import cardImage from '../../assets/gxsoycvl4m8sxjukakm5.webp'
import Button from '../../UI/Button.jsx'
import useGetCategory from '../../Hooks/useGetCategory.js'
import { Link } from 'react-router-dom'

function HomeComponent() {

    const { categories, loading } = useGetCategory();

    console.log(categories);


    return (
        <>
            <div>
                <HomeBanner />

            </div>
            <div className='container pt-5'>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className='row'>
                            <div className='col-md-12 d-flex justify-content-center align-items-center flex-column text-center'>
                                <h1>CATEGORY</h1>
                                {/* <p>Indulge in Luxurious Fabrics Tailored to Your Tastes</p> */}
                            </div>
                            {loading ? <h1>Loading...</h1> : categories.map((category) => (
                                category.front_image != 0 &&
                                    <>
                                    <div className='col-3 pt-3' key={category.id}>


                                        <div className="card">
                                            <Link to={`/product?category=${category.category_slug}`}><img src={`http://localhost:5000/uploads/${category.front_image}`} loading='lazy' width={300} height={300} className="card-img img-fluid" alt="..." /></Link>
                                        </div>

                                    </div>
                                    </>
                                
                            ))}



                        </div>

                    </div>
                    {/* <div className='col-md-12'>
                        <div className='row'>
                            <div className='col-md-12 d-flex justify-content-center align-items-center flex-column text-center'>
                                <h1>POPULAR IN WEDDING</h1>
                                <p>Shop the most popular wedding sarees from our collection.</p>
                            </div>
                            <div className='col-md-3 col-6'>
                                <div class="card">
                                    <img src="https://elegasilk.vercel.app/_next/image?url=https%3A%2F%2Fwww.taneira.com%2Fdw%2Fimage%2Fv2%2FBKMH_PRD%2Fon%2Fdemandware.static%2F-%2FSites-Taneira-product-catalog%2Fdefault%2Fdw47879081%2Fimages%2FTaneira%2FCatalog%2FSHG08H00232_2.jpg%3Fsw%3D1000%26sh%3D1500&w=384&q=75" class="card-img-top img-fluid" alt="..." />
                                        <div class="card-body">
                                            <h5 class="card-title">Yellow Contemporary Pure Silk Cotton Embroidery Saree</h5>
                                            <p class="card-text">6289</p>
                                            <Button>ADD TO CART </Button>
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

        </>
    )
}

export default HomeComponent