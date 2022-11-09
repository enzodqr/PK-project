const utils = require("../../utils/utils");
const responseMsg = require("../../constants/responseMsg.constants");

module.exports = {
  nodeHealth() {
    const response = utils.deepCopy(responseMsg.healthCheck);
    try {
      response.message = "Healthy";
      return response;
    } catch (err) {
      response.message = "Down";
      return response;
    }
  },
};
