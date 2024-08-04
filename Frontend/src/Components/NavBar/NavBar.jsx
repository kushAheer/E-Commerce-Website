import React from 'react'
import classes from './NavBar.module.css'
import { useSelector } from 'react-redux'
import { Dropdown } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import useLogOut from '../../Hooks/useLogOut'

function NavBar() {


    const isAuth = useSelector(state => state.users.user)
    const admin = isAuth?.role === 'admin';

    const {loading , logOutUser} = useLogOut()

    const logOutHandler = async () => {
        
        await logOutUser()

    }

    return (
        <>
            <nav className="navbar navbar-expand-lg bg-body-white p-3" style={{ borderBottom: "1px solid #E7E6E6" }}>
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
                        <Dropdown>
                            <Dropdown.Toggle as="a" id="dropdown-basic">
                                <img width="32" height="32" src="https://img.icons8.com/small/32/user.png" alt="user" />
                            </Dropdown.Toggle>

                            <Dropdown.Menu>
                                {!isAuth && <> <Link to="/login" className="dropdown-item">Login</Link>
                                    <Link to="/register" className="dropdown-item">Register</Link>
                                </>}
                                {isAuth && <>
                                    <h1 className="dropdown-header">Hello UserName</h1>
                                    <Link to="/profile" className="dropdown-item">Your Account</Link>
                                    <Link to="/orders" className="dropdown-item">Your Orders</Link>
                                    <button onClick={logOutHandler} className="dropdown-item">Log Out</button>
                                </>}
                                {admin && <Link to="/admin" className="dropdown-item">Admin</Link>}
                            </Dropdown.Menu>
                        </Dropdown>

                        <div className="nav-item">
                            <img width="32" height="32" src="https://img.icons8.com/windows/32/shopping-cart.png" alt="shopping-cart" />
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default NavBar