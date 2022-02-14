const Course = require("../models/course");

//.get method
const crud_index = (req, res) => {
  Course.findAll()
    .then((course) => {
      const status = req.app.locals.status;
      req.app.locals.status = undefined;
      res.render("pages/index", { course, status });
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = {
  crud_index,
};
