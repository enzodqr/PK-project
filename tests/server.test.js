// Third party packages
const supertest = require("supertest");
const assert = require("assert");

// Project files
const Server = require("../server");


const myServer = new Server();
const app = myServer.getExpressApp()


// Endpoint's Testing
describe("Test the root path", () => {
    test("It should response the GET method", (done) => {
        supertest(app)
            .get("/")
            .then((res) => {
                expect(res.statusCode).toBe(200);
                done();
            });
    });
});
