const server = require("../../index");
const request = require("supertest");

beforeEach(() => {
    console.log("before test");
});

afterEach(() => {
    console.log("after test");
});

afterAll(done => {
    console.log("tests done");
    server.close();
    done();
});

describe("GET /api/placeholder", () => {
    it("should return a message placeholder", async () => {
        const res = await request(server).get("/api/placeholder");
        expect(res.statusCode).toBe(200);
    });
});