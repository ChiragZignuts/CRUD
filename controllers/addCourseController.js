const Course = require("../models/course");
const dbConfig = require("../config/dbConfig");
const { check, validationResult } = require("express-validator");

const addCourse_index = (req, res) => {
  res.render("pages/addCourse");
  alert = undefined;
};

const addCourse_validation = () => [
  check("courseName", "Enter course name!").trim().notEmpty(),
  check("courseDuration", "Enter course duration!").trim().notEmpty(),
  check("courseFees", "Enter course fees!").trim().notEmpty(),
  check("courseFees", "Course fees in number only!").trim().isNumeric(),
];

const addCourse_post = (req, res) => {
  const courseName = req.body.courseName;
  const courseDuration = req.body.courseDuration;
  const courseFees = req.body.courseFees;

  const err = validationResult(req);

  if (err.isEmpty()) {
    dbConfig
      .sync()
      .then(() => {
        Course.create({
          courseName: courseName,
          courseDuration: courseDuration,
          courseFees: courseFees,
        }).then((course) => {
          req.app.locals.status = "inserted";
          res.redirect("/");
        });
      })
      .catch((err) => {
        console.log(err);
      });
  } else {
    const alert = err.array();
    res.render("pages/addCourse", { alert });
  }
};

module.exports = {
  addCourse_index,
  addCourse_post,
  validation: [addCourse_validation()],
};
