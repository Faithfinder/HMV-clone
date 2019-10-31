import mongoose from "mongoose";
import config from "../config";

export default async () => {
    await mongoose.connect(config.databaseURL, {
        keepAlive: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
};
