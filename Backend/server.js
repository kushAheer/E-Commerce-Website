//Packages <Open>
import express from 'express';
import dotenv from 'dotenv';
import cookieParser from 'cookie-parser';
import cors from 'cors';
import path from 'path';
import { fileURLToPath } from 'url';
//Packages <Close>

//Files <Open>
import AppDbContext from './Db/AppDbContext.js';
//Files <Close>

//Routes <Open>
import authRouter from './Routes/auth.routes.js';
import categoryRouter from './Routes/category.routes.js';
import productRouter from './Routes/product.routes.js';
//Routes <Close>

dotenv.config(); //including this line to use the .env file


const app = express();

app.use(cors({
    origin: 'http://localhost:5173',
    credentials: true,
}));
app.use(express.json()); //including this line to parse the incoming request with JSON payloads
app.use(express.urlencoded({ extended: true })); //including this line to parse the incoming request with urlencoded payloads
app.use(cookieParser()); //including this line to parse the incoming request with cookies
// app.use(cors()); //including this line to enable CORS

//Routes
app.use('/api/auth',authRouter);
const filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(filename);
app.use('/uploads', express.static(path.join(__dirname, 'Uploads')));

app.use('/api/category',categoryRouter)
app.use('/api/product',productRouter)

app.get('/', (req, res) => {
    res.send('Hello World');
});

const port = process.env.PORT ;


app.listen(port, () => {
    console.log(`Server is running on port http://localhost:${port}`);
});


