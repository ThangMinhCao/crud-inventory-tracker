const { getAllItems } = require("../services/item.service");

const renderPage = async (req, res) => {
  await getAllItems().then((items) => {
    console.log(items)
    res.render("index", {
      title: "CRUD Inventory Tracker",
      itemList: items,
    });
  });
}

module.exports = {
  renderPage
}