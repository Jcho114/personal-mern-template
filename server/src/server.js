const express = require("express");
const app = express();

const cors = require("cors");
app.use(cors());
app.use(express.json());

require("dotenv").config();
const PORT = process.env.PORT || 3001;

// create mongoose connection
const { connect, disconnect } = require("./utils/mongoose.util");
connect();

const authCheck = require('./utils/auth.util');
app.get('/api/protected', authCheck, (req, res) => {
    // Handle the protected endpoint logic
    res.json({ message: 'You accessed a protected endpoint!' });
});

app.use("/api/v1/user", require("./modules/user/user.router"));

app.use((error, req, res, next) => {
    console.error(error.message);
    res.status(500).json({
        message: error.message,
    });
});

const server = app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});

// disconnect from mongoose on close or SIGTERM
server.on("close", disconnect);
process.on("SIGTERM", disconnect);

module.exports = server;