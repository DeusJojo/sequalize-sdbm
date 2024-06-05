const { sequelize } = require("../config/dbConnect");
const TicketModel  = require("../models/TICKET")(sequelize);


sequelize
  .authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
  })
  .catch((error) => {
    console.error("Unable to connect to the database: ", error);
  });

const getAllTickets = async (req, res) => {
  const ticket = await TicketModel.findAll();
  res.json(ticket);
};

module.exports = { getAllTickets };
