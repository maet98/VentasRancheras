import {INTEGER,STRING} from "sequelize"
import {db} from "../db/index";

export const stop = db.define('stop', {
    id: {
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true
    },
    client: {
        type: INTEGER
    },
    priority: {
        type: INTEGER
    },
    name: {
        type: STRING
    },
    address: {
        type: INTEGER
    }
})