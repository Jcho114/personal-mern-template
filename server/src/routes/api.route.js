const router = require("express").Router();

const {
    placeHolder
} = require("../controllers/api.controller");

router.get("/placeholder", placeHolder);

module.exports = router;