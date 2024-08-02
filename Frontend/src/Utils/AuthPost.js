export const registerRequest = async (data)=>{
    
    const res = await fetch('http://localhost:5000/api/auth/register', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'

            
        },
        body: JSON.stringify(data),
        credentials: 'include',
    })
    return await res.json();
} 

export const verifyOtpRequest = async (otp)=>{
    console.log(otp)
    const res  = await fetch('http://localhost:5000/api/auth/verify/otp', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({otp}),
        credentials: 'include'
    })
    return await res.json();

}

export const loginRequest = async (data)=>{
    const res = await fetch('http://localhost:5000/api/auth/login', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data),
        credentials: 'include'
    })
    return await res.json();
}