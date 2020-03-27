import * as express from 'express'
const router = express.Router();
import {
    createItem,
    findItem,
    getAll,
    products
} from "./products.controller";

router.get('',getAll);
router.get('/:name',findItem);
router.post('',createItem);

export default router;