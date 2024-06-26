const { sequelize } = require("../config/dbConnect");
const ArticleModel  = require("../models/ARTICLE")(sequelize);


sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const getAllArticles = async (req, res) => {
  const articles = await ArticleModel.findAll();
  res.json(articles);
};

module.exports = { getAllArticles };
