import {INTEGER,STRING} from "sequelize"
import {db} from "../db/index";

var Token = db.define('token', {
    id_token: {
        type: STRING,
        primaryKey: true
    },
    realmId:{
        type: STRING
    },
    access_token:{
        type: STRING
    },
    refresh_token:{
        type: STRING
    },
    expires_in: {
        type: INTEGER
    },
    x_refresh_token_expires_in: {
        type: INTEGER
    },
    token_type:{
        type: STRING
    },
    latency:{
        type:INTEGER
    }
});

export default Token;