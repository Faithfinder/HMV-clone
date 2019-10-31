import express from "express";

import path from "path";

import errorHandler from "./handlers/error";
import config from "./config";
import load from "./loaders";

(async () => {
    try {
        const app = express();
        const server = await load(app);        

        app.get("/api", (req, res) => {
            res.send("Hello world");
        });

        app.get("/", (req, res) => {
            res.sendFile("client/build/index.html", { root: path.resolve("") });
        });

        app.use((req, res, next) => {
            let err = new Error("Resource not found");
            err.status = 404;
            next(err);
        });

        app.use(errorHandler);

        server.listen(config.port, () => {
            console.log(`Server is starting on port ${config.port}`);
        });
    } catch (err) {
        console.log(err);
    }
})();
