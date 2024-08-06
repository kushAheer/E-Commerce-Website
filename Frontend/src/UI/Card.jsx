import React from 'react'
import classes from './Card.module.css'
import { useState } from 'react';

function Card(props) {

    

    
    return (
        <>
            <div className={`card ${classes.boxShadow}`}>
                
                        <div className={`card-body`}>
                            <div className={`d-flex justify-content-between px-md-1`}>
                                <div>
                                    <h1 style={{fontSize : '1rem' , color : 'rgb(164, 156, 156)'}}>{props.title}</h1>
                                    <p style={{fontSize : '2rem'}}>{props.details}</p>
                                </div>
                                <div className={`align-self-center`}>
                                <img width="64" height="64" src={props.img} />
                                </div>

                            </div>

                        </div>
                
            </div>
        </>
    )
}

export default Card