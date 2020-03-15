import express from "express";
const router = express.Router();
import {createOrder, getAvailable} from './orders.controller';

router.get("/",getAvailable);
router.post("/",createOrder);

export default router;