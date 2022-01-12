const Item = require("../models/item.model");

/**
 * Query database based on the provided query.
 * 
 * If a parameter is empty, database will get all documents of that parameter. 
 */
const getAllItems = async (query = {}) => {
  return Item.find(query); 
}

/**
 * Create a new Item with provided info.
 * 
 * @param itemInfo Information object of a new Item to be created.
 */
const createItem = async (itemInfo) => {
  return Item.create(itemInfo);
}

/**
 * Update an existing item with new info.
 * @param id Id of the existing item.
 * @param updatedItem Updated information of the item.
 */
const updateItem = async (id, updatedItem) => {
  return Item.findByIdAndUpdate(id, updatedItem, { upsert: true });
}

/**
 * Remove an item from the database based on the id.
 * @param itemId Id of the item to be deleted.
 */
const removeItem = async (itemId) => {
  return Item.findByIdAndRemove(itemId);
}

module.exports = {
  getAllItems,
  createItem,
  updateItem,
  removeItem
}