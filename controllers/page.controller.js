/**
 * Render the ejs front-end page.
 */
const renderPage = async (req, res) => {
  res.render("index", { title: "CRUD Inventory Tracker" });
};

module.exports = {
  renderPage,
};
