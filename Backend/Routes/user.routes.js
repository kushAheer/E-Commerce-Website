import { Router } from "express";
import { getAllUsersRequest  , createUserProfileRequest, userAddress} from "../Controllers/user.controller.js";
import verifyJWT from "../Middleware/auth.middleware.js";

const router = Router();


router.get('/',getAllUsersRequest);

router.get('/details',verifyJWT,userAddress)

router.post('/CreateUser', verifyJWT ,createUserProfileRequest);


export default router;