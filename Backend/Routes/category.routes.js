import { Router } from "express";
import { createCategory, getCategory } from "../Controllers/categroy.controller";

const router = Router();

router.get('/GET',getCategory)
router.post('/CreateCategory',createCategory)

export default router;