const { sequelize } = require("../config/dbConnect");
const CouleurModel  = require("../models/COULEUR")(sequelize);


sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const getAllCouleurs = async (req, res) => {
  const couleurs = await CouleurModel.findAll();
  res.json(couleurs);
};

module.exports = { getAllCouleurs };
