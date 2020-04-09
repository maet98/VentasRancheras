import {INTEGER,STRING} from "sequelize"
import {db} from "../db/index";
import stop from "./stop";

var route = db.define('route', {
    id: {
        primaryKey: true,
        type: INTEGER,
        autoIncrement: true
    },
    user: {
        type: INTEGER
    },
});

export default route;