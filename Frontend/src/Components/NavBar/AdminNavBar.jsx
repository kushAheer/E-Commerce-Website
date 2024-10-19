import React from 'react'
import classes from './AdminNavBar.module.css'
import { Link } from 'react-router-dom'
import { Dropdown } from 'react-bootstrap'

function AdminNavBar() {
    return (
        <>
            <nav className={`contianer-fluid ${classes.navContainer}`}>
                <div className={`${classes.wrapper}`}>
                    <Link to='/admin' className={`dropdown-header`}>Dashboard</Link>
                    <Dropdown>
                        <Dropdown.Toggle as="a" id="dropdown-basic" className='dropdown-header'>
                            Category
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                                
                                <Link to='/admin/category/create' className={`dropdown-item`}>Create Category</Link>
                                <Link to='/admin/subcategory/create' className={`dropdown-item`}>Create Sub-Category</Link>
                        </Dropdown.Menu>
                    </Dropdown>
                    <Dropdown>
                        <Dropdown.Toggle as="a" id="dropdown-basic" className='dropdown-header'>
                            Products
                        </Dropdown.Toggle>
                        <Dropdown.Menu>
                                
                                <Link to='/admin/product/create' className={`dropdown-item`}>Create Products</Link>
                                <Link to='/admin/product' className={`dropdown-item`}>Products</Link>
                                
                        </Dropdown.Menu>
                    </Dropdown>
                </div>
            </nav>
        </>
    )
}

export default AdminNavBar