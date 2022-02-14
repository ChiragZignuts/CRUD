const Sequelize = require("sequelize");

const database = "chiragt";
const username = "chiragt";
const password = "HR98etWsaVZ9WuqZUFKP4yEhp38XXdQW";

const host = "15.206.7.200";
const dialect = "mysql";
const port = "3310";

const sequelize = new Sequelize(database, username, password, {
  dialect: dialect,
  host: host,
  port: port,
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connected to database");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = sequelize;
