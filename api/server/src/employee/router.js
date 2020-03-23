import express from 'express';
import { refresh } from '../../ERP';
import { getAll, createEmployee } from './controller';
const EmployeeRouter = express.Router();

EmployeeRouter.use(refresh);

EmployeeRouter.get("/",getAll);
EmployeeRouter.post("/",createEmployee);

export default EmployeeRouter;