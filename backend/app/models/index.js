const dbConfig = require("../config/db.config.js");

const mongoose = require("mongoose");

mongoose.Promise = global.Promise;

const db = {};

db.mongoose = mongoose;

db.refreshToken = require("./refreshToken.model");

db.url = dbConfig.url;

db.products = require("./product.model.js")(mongoose);
db.orders = require("./order.model.js")(mongoose);
db.users = require("./user.model.js")(mongoose);
db.categories = require("./category.model.js")(mongoose);

module.exports = db;
