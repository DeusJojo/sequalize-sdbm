const bodyParser = require("body-parser");
const express = require("express");
const cors = require("cors");
const app = express();
const port = process.env.PORT || 5000;
const { sequelize } = require("./config/dbConnect");
const { router } = require("./routes/router");
const Article = require("./models/ARTICLE")(sequelize);

const apiRoot = "/";

app.use(apiRoot, router);

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(
  cors({
    origin: /http:\/\/localhost/,
  })
);

// Gère les type de requête GET POST PUT DELETE
app.options("*", cors());

app.listen(port, () => {
  console.log("Server listen at port : " + port);
});

(async () => {
  sequelize
    .authenticate()
    .then(() => {
      console.log("Connection has been established successfully.");
    })
    .catch((error) => {
      console.error("Unable to connect to the database: ", error);
    });
})();

router.get("/articles", async (req, res) => {
  const articles = await Article.findAll();
  res.json(articles);
});
