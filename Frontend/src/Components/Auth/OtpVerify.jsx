import React from 'react'
import classes from './OtpVerify.module.css'
import Button from '../../UI/Button'
import useVerifyOtp from '../../Hooks/useVerifyOtp.js'

function OtpVerify() {

    const { loading, verifyOtp } = useVerifyOtp()

    const handleSubmit = async (e) => {
        e.preventDefault()
        
        const inputs = document.querySelectorAll('input')
        let otp = '';
        inputs.forEach(input => {
            otp += input.value
        })
        const res = await verifyOtp(otp);
        
    }

    return (
        <>
            <div className={`${classes.centerWrapper}`}>
                <div className={`${classes.titleCenter}`}>
                    <h4>Enter OTP Code</h4>
                </div>
                <form onSubmit={handleSubmit}>
                    <div className={`${classes.inputField}`}>
                        <input type="number" max={9} min={0} className={`${classes.input}`}/>
                        <input type="number" max={9} min={0} className={`${classes.input}`}/>
                        <input type="number" max={9} min={0} className={`${classes.input}`}/>
                        <input type="number" max={9} min={0} className={`${classes.input}`}/>
                    </div>
                    <Button>{loading ? "Loading" : "Verify"}</Button>
                </form>
                <div className={`${classes.details} pt-5`}>
                    <p>Check Your Register Email Account for OTP</p>
                </div>
            </div>
        </>
    )
}

export default OtpVerify
