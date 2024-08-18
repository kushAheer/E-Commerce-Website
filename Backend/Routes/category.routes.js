import { Router } from "express";
import { createCategory, getCategory ,createSubCategory , getSubCategory, getAllCatAndSubCat} from "../Controllers/categroy.controller.js";
import { upload } from "../Middleware/mutler.middleware.js";

const router = Router();

router.get('/GET',getCategory)

router.get('/GETSUB/:id',getSubCategory)

router.post('/CreateCategory',
    upload.fields(
        [{
            name: 'frontImage',
            maxCount: 1
        }]
    )    
    ,createCategory)

router.post('/CreateSubCategory',createSubCategory)

router.get('/getBothCategory',getAllCatAndSubCat)




export default router;