const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT || 3001;

// create mongoose connection
const { connect, disconnect } = require("./utils/mongoose.config");
connect();

app.use("/api/v1/user", require("./modules/user/user.router"));

app.use((error, res, req, next) => {
    console.error(error.message);
    res.status(500).json({
        "message": "error",
    });
});

const server = app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});

// disconnect from mongoose on close or SIGTERM
server.on("close", disconnect);
process.on("SIGTERM", disconnect);

module.exports = server;