import express from "express";
import authController from '../controllers/auth-controller';
import { validateToken } from "../controllers/auth-controller";
const router = express.Router();


router.post('/', authController, validateToken);


export default router;
