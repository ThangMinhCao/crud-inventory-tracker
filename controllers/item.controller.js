const { getAllItems, createItem } = require("../services/item.service");

const getItems = async (req, res) => {
  await getAllItems().then((items) => {
    console.log(items)
    return items;
  });
}

const addItem = async (req, res) => {
  console.log(req.body);
  // createItem() 
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