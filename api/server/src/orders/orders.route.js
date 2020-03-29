import express from "express";
const router = express.Router();
import {createOrder, getAll, getAvailableOrders, getOrdersByClientId} from './orders.controller';

router.get("/",getAll);
router.post("/",createOrder);
router.get("/available",getAvailableOrders);
router.get("/:CustomerId",getOrdersByClientId);

export default router;