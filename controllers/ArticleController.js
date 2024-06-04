const { ArticleModel } = require("../models/ARTICLE");
const { Sequelize, DataTypes } = require("sequelize");
const sequelize = new Sequelize("SDBM", "root", "1234", {
  host: "localhost",
  port: 3306,
  dialect: "mysql",
});

sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const testFunction = async (req, res) => {
  const allArticles = await ArticleModel.findAll();
  return res.json(allArticles);
};

module.exports = { testFunction };
