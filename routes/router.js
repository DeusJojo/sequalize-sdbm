const express = require("express");
const { getAllArticles } = require("../controllers/ArticleController");
const { getAllCouleurs } = require("../controllers/CouleurController");
const { getAllContinents } = require("../controllers/ContinentController");
const { getAllFabricants } = require("../controllers/FabricantController");
const { getAllMarques } = require("../controllers/MarqueController");
const { getAllPays } = require("../controllers/PaysController");
const { getAllTickets } = require("../controllers/TicketController");
const { getAllTypes } = require("../controllers/TypeController");
const { getAllVentes } = require("../controllers/VendreController");
const router = express.Router();

router.get("/articles", getAllArticles);
router.get("/couleurs", getAllCouleurs);
router.get("/continents", getAllContinents);
router.get("/fabricants", getAllFabricants);
router.get("/marques", getAllMarques);
router.get("/pays", getAllPays);
router.get("/tickets", getAllTickets);
router.get("/types", getAllTypes);
router.get("/ventes", getAllVentes);

module.exports = { router };
