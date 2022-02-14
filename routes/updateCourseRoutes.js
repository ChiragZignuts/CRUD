const express = require("express");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const updateCourseController = require("../controllers/updateCourseController");

const router = express.Router();

router.get("/:id", updateCourseController.updateCourse_index);

router.post("/:id", urlencodedParser, updateCourseController.updateCourse_post);

module.exports = router;
