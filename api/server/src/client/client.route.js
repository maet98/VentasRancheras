import express from "express";
const router = express.Router();
import {
    getAll,
    createOne,
    getOne,
    filterName,
    getAvailable,
	getById
} from "./client.controllers";

router.get('/',getAll);
router.post('/',createOne);
router.get("/available",getAvailable);
router.get('/:id',getById);
router.get('/name/:name',filterName);

export default router;
