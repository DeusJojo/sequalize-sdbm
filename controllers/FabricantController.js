const { sequelize } = require("../config/dbConnect");
const FabricantModel  = require("../models/FABRICANT")(sequelize);


sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const getAllFabricants = async (req, res) => {
  const fabricants = await FabricantModel.findAll();
  res.json(fabricants);
};

module.exports = { getAllFabricants };
