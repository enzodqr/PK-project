const healthService = require("../../services/health/healthChecker.service");

module.exports = {
  appHealth(req, res) {
    const appStatus = {
      nodejs: healthService.nodeHealth(),
    };

    if (appStatus.nodejs.message === "Healthy") {
      res.status(200).send(appStatus);
    } else {
      res.status(503).send(appStatus);
    }
  },
};
