const { getExpressRouter } = require("../server");
const { getProcessInfo } = require("../utils/utils");

const router = getExpressRouter();

// router.get("/process-info", (req, res) => {
//   res.status(200).json(getProcessInfo());
// });

module.exports = router;
