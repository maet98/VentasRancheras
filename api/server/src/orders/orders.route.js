import express from "express";
const router = express.Router();
import {createOrder, getAll, getAvailableOrders, getOrdersByClientId, confirmOrder} from './orders.controller';

router.get("/",getAll);
router.post("/",createOrder);
router.get("/available",getAvailableOrders);
router.post("/confirmOrder/:id",confirmOrder)
router.get("/:CustomerId",getOrdersByClientId);

export default router;