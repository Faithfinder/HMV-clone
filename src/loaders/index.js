import serverLoader from "./server";
import expressLoader from "./express";
import mongooseLoader from "./mongoose";

export default async expressApp => {
    await mongooseLoader();
    const server = serverLoader(expressApp);

    expressLoader(expressApp, server);
    return server;
};
