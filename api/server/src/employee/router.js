import express from 'express';
import { getAll, createEmployee, filterName, getCustomer } from './controller';
const EmployeeRouter = express.Router();

EmployeeRouter.get("/",getAll);
EmployeeRouter.post("/",createEmployee);
EmployeeRouter.get("/:name",filterName);
EmployeeRouter.get("/customer/:id",getCustomer)

export default EmployeeRouter;