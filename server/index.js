const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use("/api", require("./src/routes/api.route"));

app.use((error, res, req, next) => {
    console.error(error.message);
    res.status(500).json({
        "message": "error",
    });
});

const server = app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});

module.exports = server;