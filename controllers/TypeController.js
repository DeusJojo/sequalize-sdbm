const { sequelize } = require("../config/dbConnect");
const TypeModel  = require("../models/TYPEBIERE")(sequelize);


sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const getAllTypes = async (req, res) => {
  const types = await TypeModel.findAll();
  res.json(types);
};

module.exports = { getAllTypes };
