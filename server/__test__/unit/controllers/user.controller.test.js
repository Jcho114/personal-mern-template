const {
    getUsers,
    addUser
} = require("../../../src/modules/user/user.controller");

// mocking users model in database
const User = require("../../../src/modules/user/user.model");
jest.mock("../../../src/modules/user/user.model");

// stubbing: creating mock data
const request = {
    body: {
        username: "fake_username",
        password: "fake_password"
    },
    query: {
        username: "fake_username"
    }
}
// accounting for chained functions
const response = {
    json: jest.fn().mockReturnThis(),
    status: jest.fn().mockReturnThis()
};

describe("[GET] /api/v1/user", () => {
    it("should send a status code of 200", async () => {
        // accounting for chained functions
        User.find = jest.fn().mockReturnValueOnce({ limit: jest.fn().mockReturnValueOnce({}) });
        await getUsers(request, response);
        expect(response.status).toHaveBeenCalledWith(200);
        expect(response.json).toHaveBeenCalledTimes(1);
    });
});

describe("[POST] /api/v1/user/add", () => {
    it("should send a status code of 201 when user does not already exist", async () => {
        User.findOne = jest.fn().mockReturnValueOnce(undefined);
        User.create = jest.fn().mockImplementation(body => body);
        await addUser(request, response);
        expect(response.status).toHaveBeenCalledWith(201);
        expect(response.json).toHaveBeenCalledTimes(1);
    });
});

describe("[POST] /api/v1/user/add", () => {
    it("should send a status code of 400 when user already exists", async () => {
        User.findOne = jest.fn().mockReturnValueOnce({ username: "already_here", password: "already_here" });
        await addUser(request, response);
        expect(response.status).toHaveBeenCalledWith(400);
        expect(response.json).toHaveBeenCalledTimes(1);
    });
});