const { getAllItems, createItem, updateItem, removeItem } = require("../services/item.service");

const handleGetItems = async (req, res) => {
  getAllItems().then((items) => {
    res.send(items);
  });
}

const handleAddItem = async (req, res) => {
  if (!req.body)
    res.status(400).send();
  createItem(req.body); 
  res.status(200).send();
}

const handleUpdateItem = async (req, res) => {
  updateItem(req.params.id, req.body)
  res.status(200).send();
}

const handleDeleteItem = async (req, res) => {
  await removeItem(req.params.id)
  res.status(200).send();
}

module.exports = {
  handleGetItems,
  handleAddItem,
  handleUpdateItem,
  handleDeleteItem
}