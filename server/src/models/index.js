import mongoose from "mongoose";
mongoose.set("debug", true);
mongoose.Promise = Promise;
mongoose.connect(process.env.MONGODB_URI, {
    keepAlive: true
});

export * from "./item";
export * from "./itemCategory";
