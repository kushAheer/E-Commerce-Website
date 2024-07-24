import { Router } from "express";
import { loginRequest, logoutRequest, registerRequest, verfiyOtp } from "../Controllers/auth.controller.js";

const router = Router();

router.post('/login', loginRequest);
router.post('/register', registerRequest);
router.post('/logout', logoutRequest);
router.post('/verify/otp', verfiyOtp);

export default router;