import { Router } from "express";
import { getProductsByIdRequest, getProductsRequest,createProductRequest, getAscProductsRequest, getDescProductsRequest } from "../Controllers/product.controller.js";
import { upload } from "../Middleware/mutler.middleware.js";

const router = Router();

router.get('/',getProductsRequest);

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

router.get('/getProductsAsc',getAscProductsRequest);

router.get('/getProductsDesc',getDescProductsRequest);






export default router;