const express = require("express");
const router = express.Router();
const {
  handleGetItems,
  handleAddItem,
  handleUpdateItem,
  handleDeleteItem,
} = require("../controllers/item.controller");
const handleMongooseQuery = require("../utils/responseHandler");

router.get("/", handleGetItems, handleMongooseQuery);
router.post("/", handleAddItem, handleMongooseQuery);
router.put("/:id", handleUpdateItem, handleMongooseQuery);
router.delete("/:id", handleDeleteItem, handleMongooseQuery);

module.exports = router;
