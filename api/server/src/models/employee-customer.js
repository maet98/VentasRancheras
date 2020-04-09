import { db } from "../../../dist-server/src/db";
import { INTEGER } from "sequelize";

export const employeeCustomer = db.define('employeeCustomer',{
    employeeId: {
        type: INTEGER,
        primaryKey: true
    },
    CustomerId: {
        type: INTEGER,
        primaryKey: true
    }
})