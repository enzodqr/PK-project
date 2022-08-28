// Third-party modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// App's modules
const utils = require("./utils/utils");

const envConfig = utils.getEnvConfig();
const host = envConfig.host;
const port = envConfig.port;
const app = express();
const router = express.Router();

module.exports = {
  setConfig() {
    app.use(bodyParser.json({ limit: "10mb", extended: true }));
    app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
    app.use(cors());

    app.get("/", (req, res) => {
      res.status(200).send("Hello World!");
    });

    app.get("/process-info", (req, res) => {
      res.status(200).json(app.settings)
    })
  },

  startServer() {
    app.listen(port, () => {
      console.log(`App listening on port ${port}!`);
    });
  },

  getExpressApp() {
    return app;
  },

  getExpressRouter() {
    return router;
  },
};
