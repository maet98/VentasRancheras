import express from 'express';
import { refresh } from '../../ERP';
import { getStop, getRoute, createStop, createRoute, getRouteByUser } from './controller';
const router = express.Router();    

router.get("/",getStop);

router.get("/:userId",getRouteByUser);

router.get("/route", getRoute);

router.post("/",createRoute);

export default router;