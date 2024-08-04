import React from 'react'
import Card from '../../UI/Card'

function DashBoard() {
    return (
        <>
            <div className={`container pt-5`}>
                <div className='row'>
                    <div className='col-md-12'>
                        <div className="row">
                            <div className={`col-md-3`}>
                                <Card />
                            </div>
                            <div className={`col-md-3`}>
                                <Card />
                            </div>
                            <div className={`col-md-3`}>
                                <Card />
                            </div>
                            <div className={`col-md-3`}>
                                <Card />
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )
}

export default DashBoard