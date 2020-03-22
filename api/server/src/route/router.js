import express from 'express';
import { refresh } from '../../ERP';
import { getStop, getRoute, createStop, createRoute } from './controller';
const router = express.Router();

router.get("/stop",getStop);

router.get("/", getRoute);

router.post("/",createRoute);

export default router;