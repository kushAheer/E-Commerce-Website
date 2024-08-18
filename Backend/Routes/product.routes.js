import { Router } from "express";
import { 
    getAscProductsRequest,
    getProductsByIdRequest,
    getProductsRequest,
    createProductRequest, 
    getDescProductsRequest,
} from "../Controllers/product.controller.js";
import { upload } from "../Middleware/mutler.middleware.js";

const router = Router();

router.get('/',getProductsRequest);

router.get('/asc',getAscProductsRequest);

router.get('/desc',getDescProductsRequest);


router.get('/:id',getProductsByIdRequest);




router.post('/CreateProduct',upload.fields([
    {
        name: 'images',
        maxCount: 5
    },
    {
        name: 'frontImage',
        maxCount: 1
    }
]),createProductRequest);







export default router;