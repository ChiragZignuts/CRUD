const Course = require("../models/course");
const dbConfig = require("../config/dbConfig");

//.get method
const updateCourse_index = (req, res) => {
  const id = req.params.id;
  Course.findOne({ where: { id: id } }).then((course) => {
    res.render("pages/updateCourse", { course });
  });
};

const updateCourse_post = (req, res) => {
  Course.update(
    {
      courseName: req.body.courseName,
      courseDuration: req.body.courseDuration,
      courseFees: req.body.courseFees,
    },
    { where: { id: req.params.id } }
  )
    .then(() => {
      req.app.locals.status = "updated";
      res.redirect("/");
    })

    .catch((err) => {
      console.log(err);
    });
};

module.exports = { updateCourse_index, updateCourse_post };
