const express = require("express");
const router = express.Router();
const { renderPage } = require("../controllers/page.controller");

router.get("/", renderPage);

module.exports = router;