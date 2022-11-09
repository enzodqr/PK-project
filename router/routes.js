const { getExpressRouter } = require("../server");
const { getProcessInfo } = require("../utils/utils");

const healthController = require("../controllers/health/healthChecker.controller");

const router = getExpressRouter();

// router.get("/process-info", (req, res) => {
//   res.status(200).json(getProcessInfo());
// });

router.get("/health", healthController.appHealth);

module.exports = router;
