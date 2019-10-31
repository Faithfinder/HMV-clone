import express from "express";

import config from "./config";
import load from "./loaders";

(async () => {
    try {
        const app = express();
        const server = await load(app);

        server.listen(config.port, () => {
            console.log(`Server is starting on port ${config.port}`);
        });
    } catch (err) {
        console.log(err);
    }
})();
