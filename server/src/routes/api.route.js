const router = require("express").Router();

const {
    placeHolder
} = require("../controllers/api.controller");

router.get("/", placeHolder);

module.exports = router;