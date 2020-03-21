import express from 'express'
const router = express.Router();
import {
    callback,
    signin
} from './auth.controller';

router.get("/signin",signin);
router.get("/callback",callback);

module.exports = router;