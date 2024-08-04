import bcrypt from 'bcrypt';


import AppDbContext from '../Db/AppDbContext.js';
import generateToken from '../utils/Token/generateToken.js';
import sendEmail from '../utils/NodeMailer/sendEmail.js';


export const loginRequest = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (email == undefined || password == undefined) {

            return res.status(202).json({ status: 202, message: 'Please fill all the fields' })

        }
        if (email.includes('@') == false || email.includes('.') == false) {

            return res.status(202).json({ status: 202, message: 'Email is not valid' })

        }
        const db = await AppDbContext();

        const [[user]] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

        if (user == undefined) {

            return res.status(202).json({ status: 202, message: 'Invalid Email or Password' })

        }

        if (user.user_status == 'inactive') {

            return res.status(202).json({ status: 202, message: 'Please verify your email' })

        }
        const passwordMatch = await bcrypt.compare(password, user.password);

        if (!passwordMatch) {


            return res.status(202).json({ status: 202, message: 'Invalid Email or Password' })
        }
        const Token = await generateToken(user.id);

        

        await db.query('UPDATE users SET token = ? WHERE id = ?', [Token, user.id]);
        res.cookie('token', Token,
            {
                httpOnly: true,
                secure: false,
                maxAge: 1000 * 60 * 60 * 24 * 7

            });
        const data = {
            id: user.id,
            name: user.name,
            email: user.email,
            token: Token,
            role : user.roles,
            user_status : user.user_status
        }
        return res.status(200).json({ status: 200, message: 'Login Successfull', userData: data })

    } catch (error) {

        return res.status(500).json({ status: 500, message: 'Internal Server Error', errorMessage: error.message })

    }

}

export const registerRequest = async (req, res) => {
    try {

        const { fullName, email, password } = req.body

        if (fullName == undefined || email == undefined || password == undefined) {

            return res.status(202).json({ status: 202, message: 'Please fill all the fields' })

        }
        if (fullName.length > 25) {

            return res.status(202).json({ status: 202, message: 'Full Name must be at less than 25 characters' })

        }
        if (password.length < 8) {

            return res.status(202).json({ status: 202, message: 'Password must be at least 8 characters' })

        }
        if (email.includes('@') == false || email.includes('.') == false) {

            return res.status(202).json({ status: 202, message: 'Email is not valid' })

        }

        const db = await AppDbContext();


        const [userExisted] = await db.query('SELECT * FROM users WHERE email = ?', [email]);

        if (userExisted.length > 0) {

            return res.status(202).json({ status: 202, message: 'Email already exists' })

        }

        const passwordHash = await bcrypt.hash(password, 10);

        const dateTime = new Date();

        var [newUser] = await db.query('INSERT INTO users (name, email, password , created_at , updated_at) VALUES (?,?,?,?,?)', [fullName, email, passwordHash, dateTime, dateTime]);

        const otp = await sendOtpVerificationEmail(email);

        const Token = await generateToken(newUser.insertId);
        const [result] = await db.query('UPDATE users SET email_otp = ? ,token = ? WHERE id = ?', [otp, Token,newUser.insertId]);

        

        
        res.cookie('token', Token,
            {
                httpOnly: true,
                secure: true,
                maxAge: 1000 * 60 * 60 * 24 * 7,
                path : '/'

            });

        if (newUser) {
            return res.status(200).json({ status: 200, message: 'Verification email has been sent to your email'  })

        } else {

            return res.status(202).json({ status: 202, message: 'Failed to register' })

        }
    } catch (error) {
        return res.status(500).json({ status: 500, message: 'Internal Server Error', errorMessage: error.message })
    }






}

export const logoutRequest = async (req, res) => {
    try {
        
        
        res.clearCookie('token');

        return res.status(200).json({ status: 200, message: 'Logout Successfull' })

    } catch (e) {

        return res.status(500).json({ status: 500, message: 'Internal Server Error', error: e.message })
        
    }
}

export const verfiyOtp = async (req, res) => {
    try {
        const { otp } = req.body;
        const {id} = req.user;
        if (otp == undefined) {

            return res.status(202).json({ status: 202, message: 'Please fill all the fields' })

        }
        if (otp.length > 4) {

            return res.status(202).json({ status: 202, message: 'Invalid Otp ' })

        }
        const db = await AppDbContext();

        const [[user]] = await db.query('SELECT * FROM users WHERE id = ?', [id]);

        if (user.email_otp == otp) {
            await db.query('UPDATE users SET user_status = ? WHERE id = ?', ['active', id]);
            return res.status(200).json({ status: 200, message: 'OTP Verified' })

        } else {

            return res.status(202).json({ status: 202, message: 'Invalid OTP' })

        }

    } catch (e) {

        return res.status(500).json({ status: 500, message: 'Internal Server Error', error: e.message })

    }



}

const sendOtpVerificationEmail = async (email) => {

    try {
        const otp = Math.floor(1000 + Math.random() * 9000);

        const mailOptions = {
            from: process.env.EMAIL_USERNAME,
            to: email,
            subject: 'OTP Verification',
            text: `Your OTP is ${otp}`
        }

        await sendEmail(mailOptions);

        return otp;
    } catch (err) {
        console.log(err);
    }
}


