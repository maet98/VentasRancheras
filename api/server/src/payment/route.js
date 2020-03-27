import {Router} from "express";
var router = Router();

import {getAll, create} from './controller';


//Get a list of payments
router.get("/",getAll);

//Create a payment
router.post("/",create);

export default router;