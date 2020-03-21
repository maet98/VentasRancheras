import express from "express";
const router = express.Router();
import {
    getAll,
    createOne,
    getOne,
    filterName
} from "./client.controllers";
import {
    refresh
} from "../../ERP/index";

router.use(refresh);

router.get('/',getAll);
router.post('/',createOne);
router.get('/:name',filterName);

export default router;