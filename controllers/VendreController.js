const { sequelize } = require("../config/dbConnect");
const VendreModel  = require("../models/VENDRE")(sequelize);


sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const getAllVentes = async (req, res) => {
  const ventes = await VendreModel.findAll();
  res.json(ventes);
};

module.exports = { getAllVentes };
