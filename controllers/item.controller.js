const { getAllItems, createItem } = require("../services/item.service");

const getItems = async (req, res) => {
  await getAllItems().then((items) => {
    console.log(items)
    res.send(items)
  });
}

const addItem = async (req, res) => {
  if (!req.body)
    res.status(400).send();
  createItem(req.body); 
  res.status(200).send();
}

const updateItem = async (req, res) => {

}

const deleteItem = async (req, res) => {

}

module.exports = {
  getItems,
  addItem,
  updateItem,
  deleteItem
}