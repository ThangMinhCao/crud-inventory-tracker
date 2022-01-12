const {
  getAllItems,
  createItem,
  updateItem,
  removeItem,
} = require("../services/item.service");

/**
 * Get items from database using the query of the request.
 */
const handleGetItems = async (req, res, next) => {
  const query = Object.fromEntries(
    Object.entries(req.query).filter(([key, value]) => value !== "")
  );

  req.queryRes = getAllItems(query);
  next();
};

/**
 * Create and add to database a new item with information provided in the request.
 */
const handleAddItem = async (req, res, next) => {
  req.queryRes = createItem(req.body);
  next();
};

/**
 * Update the corresponding item with the provided updated information.
 */
const handleUpdateItem = async (req, res, next) => {
  req.queryRes = updateItem(req.params.id, req.body);
  next();
};

/**
 * Delete the corresponding item from database based on the provided id.
 */
const handleDeleteItem = async (req, res, next) => {
  req.queryRes = removeItem(req.params.id);
  next();
};

module.exports = {
  handleGetItems,
  handleAddItem,
  handleUpdateItem,
  handleDeleteItem,
};
