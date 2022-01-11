const { renderPage } = require("../controllers/page.controller");
const router = express.Router();

router.get("/", renderPage);

module.exports = router;