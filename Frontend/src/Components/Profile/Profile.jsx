import React from "react";
import classes from './Profile.module.css'; 

import { NavLink, useLoaderData } from "react-router-dom";
function Profile() {

    
    
    return (
        <React.Fragment>

            <div className="container pt-5">
                <div className="row">
                    <div className={`${classes.left} col-lg-4`}>
                        <div>
                            <img className={`${classes.photo}`} src={``} />
                        </div>
                        <h4 className={`${classes.name}`}></h4>
                        <p className={`${classes.info}`}></p>
                        {/* <p className={`${classes.desc}`}>Hi ! My name is Jane Doe. I'm a UI/UX Designer from Paris, in France. I really enjoy photography and mountains.</p> */}
                    </div>
                    <div className={`col-lg-8 ${classes.right}`} >
                        <h1>Posts</h1>
                        <div className={`row ${classes.gallery}`}>

                            
                        </div>
                    </div>
                    <div class="d-grid gap-2 d-md-flex justify-content-md-end pb-2 pt-2">

                        <NavLink to={`/edit/:${JSON.parse(localStorage.getItem('user')).id}`}><button >Edit</button></NavLink>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}

export default Profile;