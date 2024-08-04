import React from 'react'

function Card() {
    return (
        <>
            <div className={`card`}>
                
                
                
                        <div className={`card-body`}>
                            <div className={`d-flex justify-content-between px-md-1`}>
                                <div>
                                    <h1>Card Ttile</h1>
                                    <p>Card Description</p>
                                </div>
                                <div className={`align-self-center`}>
                                    <i class="fas fa-rocket text-danger fa-3x"></i>
                                </div>

                            </div>

                        </div>
                
            </div>
        </>
    )
}

export default Card