const Item = require("../models/item.model");

const getAllItems = async () => {
  return Item.find(); 
}

const createItem = async (itemInfo) => {
  console.log(itemInfo)
  return Item.create(itemInfo);
}

const updateItem = async (itemInfo) => {
  query = { "_id": itemInfo._id }
  return Item.findOneAndUpdate(query, itemInfo, { upsert: true }, (err) => {
    if (err) console.log(err);
  })
}

const removeItem = async (itemInfo) => {
  return Item.findByIdAndRemove(itemInfo._id, (err) => {
    if (err) console.log(err)
  })
}

module.exports = {
  getAllItems,
  createItem,
  updateItem,
  removeItem
}