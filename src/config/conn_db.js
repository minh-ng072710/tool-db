const mongoose = require("mongoose");
const bluebird = require("bluebird");
const {
    Pool,
    Client
} = require('pg');
require("dotenv").config();
//Posgresql
var config = {
    user: process.env.APP_API_USERNAME,
    host: process.env.APP_API_HOST,
    database: process.env.APP_API_DB_NAME,
    password: process.env.APP_API_PASSWORD,
    port: process.env.APP_API_PORT,
}
var pool = new Pool(config)

//MongoDB
var connectDB = async () => {
    mongoose.bluebird = bluebird;
    var mongoDB = process.env.MONGO_HOST + process.env.MONGO_PORT + process.env.MONGO_DB_NAME
    mongoose.connect(mongoDB, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    mongoose.Promise = global.Promise;
    return mongoose.connection;
};
module.exports = {
    connectDB,
    pool
};