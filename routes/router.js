const express = require("express");
const { testFunction } = require("../controllers/ArticleController");
const router = express.Router();

// router.get("/articles", testFunction);

module.exports = { router };
