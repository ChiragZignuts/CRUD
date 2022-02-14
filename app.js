const express = require("express");
const crudRoutes = require("./routes/crudRoutes");
const addCourseRoutes = require("./routes/addCourseRoutes");
const updateCourseRoutes = require("./routes/updateCourseRoutes");
const deleteCourseRoutes = require("./routes/deleteCourseRoutes");
const { check, validationResult } = require("express-validator");

const app = express();

// set up template engine
app.set("view engine", "ejs");

// use static files
app.use(express.static("./public"));

// routes
app.use(crudRoutes);
app.use("/addCourse", addCourseRoutes);
app.use("/updateCourse", updateCourseRoutes);
app.use("/deleteCourse", deleteCourseRoutes);

app.listen(3000);
console.log("Listening to port 3000");
