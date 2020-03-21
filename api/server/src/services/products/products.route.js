import * as express from 'express'
const router = express.Router();
import {
    createItem,
    findItem,
    getAll,
    products
} from "./products.controller";

import {
    refresh
} from "../../ERP/index";

router.use(refresh);

router.get('',getAll);
router.get('/:name',findItem);
router.post('',createItem);

export default router;