import mongoose from "mongoose";

mongoose.set("debug", true);
mongoose.connect(process.env.MONGODB_URI, {
    keepAlive: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true
});

export const Item = require("./item");
export const ItemCategory = require("./itemCategory");
//Weird export/import behaviour
