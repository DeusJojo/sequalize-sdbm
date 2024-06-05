const { sequelize } = require("../config/dbConnect");
const PaysModel  = require("../models/PAYS")(sequelize);


sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const getAllPays = async (req, res) => {
  const pays = await PaysModel.findAll();
  res.json(pays);
};

module.exports = { getAllPays };
