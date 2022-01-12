const {
  getAllItems,
  createItem,
  updateItem,
  removeItem,
} = require("../services/item.service");

const handleGetItems = async (req, res, next) => {
  const query = Object.fromEntries(
    Object.entries(req.query).filter(([key, value]) => value !== "")
  );

  req.queryRes = getAllItems(query);
  next();
};

const handleAddItem = async (req, res, next) => {
  req.queryRes = createItem(req.body);
  next();
};

const handleUpdateItem = async (req, res, next) => {
  req.queryRes = updateItem(req.params.id, req.body);
  next();
};

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
