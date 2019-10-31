import express from "express";
import path from "path";
import mongoose from "mongoose";
import connectStore from "connect-mongo";
import session from "express-session";
import config from "../config";
import passport from "passport";
import passportInit from "./passport";
import socketio from "socket.io";

export default (app, server) => {
    app.enable("trust proxy");
    app.use(express.static(path.resolve("client/build")));
    app.use(express.json());

    const MongoStore = connectStore(session);
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

    app.use(passport.initialize());
    app.use(passport.session());
    passportInit();

    const io = socketio(server);
    app.set("io", io);
};
