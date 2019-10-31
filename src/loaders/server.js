import config from "../config";
import http from "http";
import https from "https";
import fs from "fs";
import path from "path";

export default app => {
    let server;
    if (config.environment === "production") {
        server = http.createServer(app);
    } else {
        server = https.createServer(
            {
                pfx: fs.readFileSync(path.resolve("cert.pfx")),
                passphrase: config.clientCert.password
            },
            app
        );
    }
    return server;
};
