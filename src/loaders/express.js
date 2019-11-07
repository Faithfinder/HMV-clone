import express from "express";
import path from "path";
import mongoose from "mongoose";
import connectStore from "connect-mongo";
import session from "express-session";
import config from "../config";
import passport from "passport";
import passportInit from "./passport";
import socketio from "socket.io";
import routes from "../routes";
import errorHandler from "../handlers/routes/error";

export default (app, server) => {
    app.enable("trust proxy");
    app.use(express.static(path.resolve("client/build")));
    app.use(express.json());

    const MongoStore = connectStore(session);
    configureSession(app, MongoStore);

    app.use(passport.initialize());
    app.use(passport.session());
    passportInit();

    const io = socketio(server);
    app.set("io", io);

    app.use(config.api.prefix, routes());

    app.get("/*", (req, res) => {
        res.sendFile("client/build/index.html", { root: path.resolve("") });
    });

    app.use((req, res, next) => {
        let err = new Error(`Resource ${req.originalUrl} not found`);
        err.status = 404;
        next(err);
    });

    app.use(errorHandler);
};

function configureSession(app, MongoStore) {
    app.use(
        session({
            name: "sid",
            secret: config.session.secret,
            store: new MongoStore({
                mongooseConnection: mongoose.connection,
                collection: "session"
            }),
            resave: false,
            saveUninitialized: true,
            cookie: {
                sameSite: true,
                secure: true
            }
        })
    );
}
