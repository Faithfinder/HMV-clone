import mongoose from "mongoose";
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI, {
    keepAlive: true
});

export { default as Item } from "./item";
export { default as ItemCategory } from "./itemCategory";
