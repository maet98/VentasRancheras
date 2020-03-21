import {INTEGER,STRING} from "sequelize"
import {db} from "../db/index";
import { stop } from "./stop";

const route = db.define('route', {
    id: {
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true
    },
    user: {
        type: INTEGER
    },
    name: {
        type: STRING
    }
})

route.hasMany(stop,{as:'stops'});

module.exports = route;