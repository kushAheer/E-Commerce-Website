import { Router } from "express";
import { 
    
    getProductsByIdRequest,
    getProductsRequest,
    createProductRequest,
    updateProductRequest, 
    
} from "../Controllers/product.controller.js";
import { upload } from "../Middleware/mutler.middleware.js";

const router = Router();

router.get('/',getProductsRequest);




router.get('/:slug',getProductsByIdRequest);




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

router.post('/edit/:id',upload.fields([
    {
        name: 'images',
        maxCount: 5
    },
    {
        name: 'frontImage',
        maxCount: 1
    }
]),updateProductRequest);







export default router;