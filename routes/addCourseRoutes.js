const express = require("express");
const bodyParser = require("body-parser");
const urlencodedParser = bodyParser.urlencoded({ extended: false });
const addCourseController = require("../controllers/addCourseController");
const { check } = require("express-validator");

const router = express.Router();

router.get("/", addCourseController.addCourse_index);

router.post(
  "/",
  urlencodedParser,
  addCourseController.validation,
  addCourseController.addCourse_post
);

module.exports = router;
