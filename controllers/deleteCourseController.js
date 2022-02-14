const Course = require("../models/course");

const deleteCourse_post = (req, res) => {
  const id = req.params.id;
  Course.destroy({ where: { id: id } })
    .then(() => {
      req.app.locals.status = "deleted";
      res.redirect("/");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { deleteCourse_post };
