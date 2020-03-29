import express from 'express';
import { getAll, createEmployee, getCustomer, getById } from './controller';
const EmployeeRouter = express.Router();

EmployeeRouter.get("/",getAll);
EmployeeRouter.post("/",createEmployee);
EmployeeRouter.get("/:Id",getById);
EmployeeRouter.get("/customer/:Id",getCustomer)

export default EmployeeRouter;