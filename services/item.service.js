const Item = require("../models/item.model");

const getAllItems = async () => {
  return Item.find(); 
}

const createItem = async (itemInfo) => {
  console.log(itemInfo)
  return Item.create(itemInfo);
}

const updateItem = async (id, updatedItem) => {
  Item.findByIdAndUpdate(id, updatedItem, { upsert: true }, (err) => {
    if (err) console.log(err);
  })
}

const removeItem = async (itemId) => {
  Item.findByIdAndRemove(itemId, (err) => {
    if (err) console.log(err)
  });
}

module.exports = {
  getAllItems,
  createItem,
  updateItem,
  removeItem
}