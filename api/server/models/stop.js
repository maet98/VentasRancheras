import sequelize, { Model, INTEGER, STRING } from "sequelize";

class Stop extends Model {}
Stop.init({
  client: INTEGER,
  prioriy: INTEGER,
  name: STRING,
  address: STRING,
  route: {
    type: INTEGER,
     references: {
       model: route
     }
  }
}, { sequelize, modelName: 'stop'});