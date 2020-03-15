var express = require("express");
const router = express.Router();
const {
    getAll,
    getAvailable
} = require("./orders.controller");


module.exports = router;