const { getAllItems } = require("../services/item.service");

const renderPage = async (req, res) => {
  res.render("index", { title: "CRUD Inventory Tracker" });
};

module.exports = {
  renderPage,
};
