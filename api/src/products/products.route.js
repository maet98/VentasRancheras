const route = require('express').Router();
const {
    getAll,
    findItem,
    createItem
} = require("./products.controller");

route.get('',getAll);
route.get('/:name',findItem);
route.post('',createItem);

module.exports = route;