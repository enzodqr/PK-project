// Third-party modules
const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");

// App's modules
const utils = require("./utils/utils");
const Response = require("./models/classes/response.model");

const port = 3000;

class Server {
    constructor() {
        const envConfig = utils.getEnvConfig();

        this.host = envConfig.host;
        this.port = envConfig.port;
        this.app = express();
        this.setConfig();
    }

    setConfig() {
        this.app.use(bodyParser.json({ limit: "10mb", extended: true }));
        this.app.use(bodyParser.urlencoded({ limit: "10mb", extended: true }));
        this.app.use(cors());

        this.app.get("/", (req, res) => {
            const response = new Response(res, 200, "Hello World!");
            response.sendResult();
        });
    }

    getExpressApp() {
        return this.app;
    }

    startServer() {
        this.app.listen(port, () => {
            console.log(`App listening on port ${port}!`);
        });
    }
}

module.exports = Server;
