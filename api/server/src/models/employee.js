import { db } from "../../../dist-server/src/db";
import { INTEGER, STRING } from "sequelize";

export const employee = db.define('employee',{
    employeeId: {
        type: INTEGER
    },
    username: {
        type: STRING
    },
    password: {
        type: STRING
    },
    email: {
        primaryKey: true,
        type:STRING
    },
    type: {
        type: STRING
    }
})