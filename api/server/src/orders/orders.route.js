import express from "express";
const router = express.Router();
import {
    createOrder,
    getAll,
    getAvailableOrders,
    getOrdersByClientId,
    confirmOrder,
    getOrderByEmployeeId
} from './orders.controller';

router.get("/", getAll);
router.post("/", createOrder);
router.get("/available", getAvailableOrders);
router.post("/confirmOrder/:id", confirmOrder);
router.get("/employee/:id", getOrderByEmployeeId);
router.get("/:CustomerId", getOrdersByClientId);

export default router;