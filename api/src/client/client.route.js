const express = require("express");
const router = express.Router();
const {
    getAll,
    createOne,
    getOne,
    filterName
} = require("./client.controllers");


router.get('/',getAll);
router.get('/:id',getOne);
router.post('/',createOne);
router.get('/:name',filterName);

module.exports = router;