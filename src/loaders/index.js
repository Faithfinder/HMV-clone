import serverLoader from "./server";
import expressLoader from "./express";
import mongooseLoader from "./mongoose";
import eventLoader from "./eventAttacher";

export default async expressApp => {
    await mongooseLoader();
    const server = serverLoader(expressApp);

    expressLoader(expressApp, server);
    eventLoader();
    return server;
};
