import React from 'react'
import Card from '../../UI/Card'
import OrderTable from './OrderTable'

function DashBoard() {
    return (
        <>
            <div className={`container pt-5`}>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="row">
                            <div className={`col-md-4`}>
                                <Card title={"Total Order"} details={"10k"} img={"https://img.icons8.com/flat-round/64/cheap-2--v1.png" } />
                            </div>
                            <div className={`col-md-4`}>
                                <Card title={"Total Sales"} details={"5k"} img={"https://img.icons8.com/color/48/shopping-cart--v1.png"} />
                            </div>
                            <div className={`col-md-4`}>
                                <Card title={"Total Products"} details={"100k"} img={"https://img.icons8.com/cotton/64/shopping-basket-2--v2.png" }/>
                            </div>
                        </div>
                    </div>
                    {/* <div className='col-md-12'>
                            Latest Orders
                            <OrderTable />
                        
                    </div> */}

                </div>
            </div>
        </>
    )
}

export default DashBoard