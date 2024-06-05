const { sequelize } = require("../config/dbConnect");
const MarqueModel  = require("../models/MARQUE")(sequelize);


sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const getAllMarques = async (req, res) => {
  const marques = await MarqueModel.findAll();
  res.json(marques);
};

module.exports = { getAllMarques };
