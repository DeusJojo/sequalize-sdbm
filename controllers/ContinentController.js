const { sequelize } = require("../config/dbConnect");
const ContinentModel  = require("../models/CONTINENT")(sequelize);


sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const getAllContinents = async (req, res) => {
  const continents = await ContinentModel.findAll();
  res.json(continents);
};

module.exports = { getAllContinents };
