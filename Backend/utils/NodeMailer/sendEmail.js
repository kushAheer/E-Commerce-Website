import nodemailer from 'nodemailer';

const sendEmail = async (options) => {
    try{
        const transporter = nodemailer.createTransport({
            host: process.env.EMAIL_HOST,
            port: process.env.EMAIL_PORT,
            secure : true,
            auth: {
                user: process.env.EMAIL_USERNAME,
                pass: process.env.EMAIL_PASSWORD
            },
            
        })
        const result =  await transporter.sendMail(options);
        return result;

        
    }catch(err){
        console.log(err);
    }
}

export default sendEmail;