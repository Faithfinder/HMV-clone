import mongoose from "mongoose";
import autoNumber from "mongoose-auto-number";
import config from "../config";

export default async () => {
    await mongoose.connect(config.databaseURL, {
        keepAlive: true,
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true,
        useCreateIndex: true
    });
    autoNumber.init(mongoose.connection);
};
