import { Model, INTEGER, STRING } from "sequelize/types";

export class route extends Model {}
route.init({
    identifier: {
        type: INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    user: INTEGER,
    name: STRING
})