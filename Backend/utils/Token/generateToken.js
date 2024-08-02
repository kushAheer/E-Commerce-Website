import jsonwebtoken from 'jsonwebtoken';

const generateToken = async (id) => {
    const token = jsonwebtoken.sign(
        {
            id
        },
        process.env.JWT_SECRET,
        {
            expiresIn: process.env.JWT_EXPIRES_IN
        }
    )
    return token;
}

export default generateToken;