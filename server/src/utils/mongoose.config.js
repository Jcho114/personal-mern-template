const mongoose = require("mongoose");

require("dotenv").config();
const {
    MONGO_USERNAME,
    MONGO_PASSWORD,
    MONGO_CLUSTER,
    MONGO_DATABASE,
} = process.env;

async function connect() {
    return await mongoose.connect(`mongodb+srv://${MONGO_USERNAME}:${MONGO_PASSWORD}@${MONGO_CLUSTER}.4qgzzy5.mongodb.net/${MONGO_DATABASE}?retryWrites=true&w=majority`);
}

async function disconnect() {
    await mongoose.disconnect();
}

// performs given actions sequentially
async function perform(...actions) {
    await connect();
    for (let action in actions) {
        action();
    }
    await disconnect();
}

module.exports = {
    connect,
    disconnect,
    perform
};