import express from "express";
const app = express();
import http from "http";
import https from "https";
import fs from "fs";
import path from "path";
import passport from "passport";
import errorHandler from "./handlers/error";
import routes from "./routes/";

let server = createServerByEnvironment(app);

app.use(express.json());

app.use("/items", routes.items);
app.use("/itemCategories", routes.itemCategories);
app.use("/bundles", routes.bundles);

app.get("/", (req, res) => {
    res.send("Hello world");
});

app.use((req, res, next) => {
    let err = new Error("Resource not found");
    err.status = 404;
    next(err);
});

app.use(errorHandler);

server.listen(process.env.PORT, () => {
    console.log(`Server is starting on port ${process.env.PORT}`);
});

function createServerByEnvironment(app) {
    let server;
    if (process.env.NODE_ENV === "production") {
        server = http.createServer(app);
    } else {
        server = https.createServer(
            {
                pfx: fs.readFileSync(path.resolve("cert.pfx")),
                passphrase: process.env.CERT_PASS
            },
            app
        );
    }
    return server;
}
