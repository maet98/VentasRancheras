import config from "config";
import Sequelize from "sequelize"
const enviroment = process.env.NODE_ENV

const database = config.get(enviroment).get("database");
const username = config.get(enviroment).get("username");
const password = config.get(enviroment).get("password");
const dialect = config.get(enviroment).get("dialect");
const host = config.get(enviroment).get("host");

export const db = new Sequelize(database,username,password,{
    host:host,
    dialect:dialect
});