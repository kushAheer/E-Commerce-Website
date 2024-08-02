import { Router } from "express";
import { createCategory, getCategory ,createSubCategory} from "../Controllers/categroy.controller.js";

const router = Router();

router.get('/GET',getCategory)

router.post('/CreateCategory',createCategory)

router.post('/CreateSubCategory',createSubCategory)



export default router;