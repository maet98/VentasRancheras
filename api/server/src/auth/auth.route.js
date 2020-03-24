import express from 'express'
const router = express.Router();
import {
    callback,
    signin
} from './auth.controller';
import { login } from '../employee/controller';

router.get("/signin",signin);
router.get("/callback",callback);
router.post("/login",login);

module.exports = router;