import {INTEGER,STRING} from "sequelize"
import {db} from "../db/index";
import route from "./route";

export var stop = db.define('stop', {
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
    orderId:{
        type: INTEGER
    },
    longitude: {
        type: INTEGER
    },
    latitude: {
        type: INTEGER
    }
});