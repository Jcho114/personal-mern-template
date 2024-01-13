const express = require("express");
const app = express();
const cors = require("cors");
app.use(cors());
app.use(express.json());
require("dotenv").config();
const PORT = process.env.PORT || 3000;

app.use("/api", require("./src/routes/api.route"));

app.listen(PORT, () => {
    console.log(`server listening on port ${PORT}`);
});