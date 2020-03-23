import { db } from "../../../dist-server/src/db";
import { INTEGER, STRING } from "sequelize";

export const employee = db.define('employee',{
    id: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
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
        type:STRING
    },
    type: {
        type: STRING
    }
})