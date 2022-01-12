const Item = require("../models/item.model");

const getAllItems = async (query = {}) => {
  return Item.find(query); 
}

const createItem = async (itemInfo) => {
  console.log(itemInfo)
  return Item.create(itemInfo);
}

const updateItem = async (id, updatedItem) => {
  return Item.findByIdAndUpdate(id, updatedItem, { upsert: true });
}

const removeItem = async (itemId) => {
  return Item.findByIdAndRemove(itemId);
}

module.exports = {
  getAllItems,
  createItem,
  updateItem,
  removeItem
}