import mongoose from "mongoose";
import Item from "./item";

mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

module.exports.Item = require("./item");
module.exports.ItemCategory = require("./itemCategory");
//Weird export/import behaviour