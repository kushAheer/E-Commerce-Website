import React from 'react'
import classes from './NavBar.module.css'

function NavBar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-white p-3" style={{borderBottom : "1px solid #E7E6E6"}}>
                <div className="container-fluid">
                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <a className="navbar-brand" href="#">Navbar</a>
                    <div className={`collapse navbar-collapse ${classes.itemCenter}`} id="navbarNav">
                        <ul className="navbar-nav">
                            <li className="nav-item">
                                <a className="nav-link active" aria-current="page" href="#">Home</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Category</a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" href="#">Occasion</a>
                            </li>
                        </ul>
                    </div>
                    <div className={`${classes.endProfile}`}>
                        
                            <div className="nav-item">
                            <img width="32" height="32" src="https://img.icons8.com/windows/32/shopping-cart.png" alt="shopping-cart"/>
                            </div>
                            
                            



                            <div className="nav-item">
                            <img width="32" height="32" src="https://img.icons8.com/small/32/user.png" alt="user"/>
                            </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar