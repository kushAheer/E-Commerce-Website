import jwt from 'jsonwebtoken';
import AppDbContext from '../Db/AppDbContext.js';

const verifyJWT = async (req , res ,next)=>{

    try {

        const token = req.cookies.token || req.headers['Authorization'].replace('Bearer ', '');

        if (!token) {
            return res.status(401).json({ status: 401, message: 'Unauthorized' })
        }

        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        
        const db = await AppDbContext();

        const [[user]] = await db.query('SELECT * FROM users WHERE id = ?', [decoded.id]);

        if (!user) {
            return res.status(401).json({ status: 401, message: 'Unauthorized' })
        }
        req.user = user;
        next();
        
    } catch (error) {
        
        return res.status(500).json({ status: 500, message: 'Unauthorized', error: error.message })

    }
    

}

export default verifyJWT;