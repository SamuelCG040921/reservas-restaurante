import express from "express"
import getReservesController from "../controllers/getReserves-controller";
import validateToken from "../middleware/validateToken";
const router = express.Router();

router.get('/', validateToken, getReservesController);

export default router;