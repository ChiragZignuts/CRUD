const express = require("express");
const crudController = require("../controllers/crudController");

const router = express.Router();

router.get("/", crudController.crud_index);

module.exports = router;
