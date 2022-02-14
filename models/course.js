const Sequelize = require("sequelize");
const dbConfig = require("../config/dbConfig");

const Course = dbConfig.define("course", {
  courseName: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  courseDuration: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  courseFees: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
});

module.exports = Course;
