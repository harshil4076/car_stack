const mongoose = require("mongoose");
mongoose.set("debug", true);
mongoose.Promise = Promise;

const url = process.env.DATABASEURL || "mongodb://localhost:27017/carstack_cars" 
mongoose.connect(url, 
    {useUnifiedTopology: true, useNewUrlParser: true, useCreateIndex: true });

module.exports.User = require("./users");
module.exports.NewAd = require("./newad")