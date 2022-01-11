const express = require("express");
const router = express.Router();
const { getItems, addItem } = require("../controllers/item.controller");

router.get("/", getItems);
router.post("/", addItem);
router.put("/");
router.delete("/:id");

module.exports = router;