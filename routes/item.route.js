const express = require("express");
const router = express.Router();
const {
  handleGetItems,
  handleAddItem,
  handleUpdateItem,
  handleDeleteItem,
} = require("../controllers/item.controller");

router.get("/", handleGetItems);
router.post("/", handleAddItem);
router.put("/:id", handleUpdateItem);
router.delete("/:id", handleDeleteItem);

module.exports = router;
