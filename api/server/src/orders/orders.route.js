import express from "express";
const router = express.Router();
import {createOrder, getAll, getAvailableOrders} from './orders.controller';

router.get("/",getAll);
router.post("/",createOrder);
router.get("/available",getAvailableOrders)

export default router;