import {Router} from "express";
var router = Router();

import {getAll, create, getPaymentByUser} from './controller';

//Get payments by the id of the customers
router.get("/:Id",getPaymentByUser);

//Get a list of payments
router.get("/",getAll);

//Create a payment
router.post("/",create);

export default router;