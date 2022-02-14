const express = require("express");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const deleteCourseController = require("../controllers/deleteCourseController");

const router = express.Router();

router.get("/:id", urlencodedParser, deleteCourseController.deleteCourse_post);

module.exports = router;
