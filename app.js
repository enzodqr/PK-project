const myServer = require("./server");
const routes = require("./router/routes");

myServer.setConfig()
myServer.startServer()

const app = myServer.getExpressApp();


app.use(routes);
