import express from 'express';
import { getAll, createEmployee, getCustomer, getById, filterName } from './controller';
const EmployeeRouter = express.Router();
import {hashPassword} from "../middleware/hash";

EmployeeRouter.get("/",getAll);
EmployeeRouter.post("/",hashPassword,createEmployee);
EmployeeRouter.get("/:Id",getById);
EmployeeRouter.get("/name/:name",filterName);
EmployeeRouter.get("/customer/:Id",getCustomer)

export default EmployeeRouter;