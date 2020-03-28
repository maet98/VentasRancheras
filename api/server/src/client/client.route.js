import express from "express";
const router = express.Router();
import {
    getAll,
    createOne,
    getOne,
    filterName,
    getAvailable
} from "./client.controllers";

router.get('/',getAll);
router.post('/',createOne);
router.get("/available",getAvailable);
router.get('/:name',filterName);

export default router;