import {INTEGER,STRING} from "sequelize"
import {db} from "../db/index";

export const token = db.define('token', {
    id: {
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true
    },
    token:{
        type: STRING
    },
    refresh: {
        type:STRING
    }
})