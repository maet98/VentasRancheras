import express from "express";
const router = express.Router();
import {createOrder, getAvailable} from './orders.controller';
import { refresh } from "../../ERP";

router.use(refresh);

router.get("/",getAvailable);
router.post("/",createOrder);

export default router;