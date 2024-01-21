const router = require("express").Router();
const userController = require("./user.controller");

// attach controller callbacks to router endpoints
router.get("/", userController.getUsers);
router.post("/add", userController.addUser);

module.exports = router;