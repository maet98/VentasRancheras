import express from 'express';
import { getAll, createEmployee } from './controller';
const EmployeeRouter = express.Router();

EmployeeRouter.get("/",getAll);
EmployeeRouter.post("/",createEmployee);

export default EmployeeRouter;