import express from "express";
const router = express.Router({ mergeParams: true });
import passport from "passport";
import { facebook } from "../handlers/auth";

const facebookAuth = passport.authenticate("facebook", { scope: "email" });

router.get("/facebook/callback", facebookAuth, facebook);

router.use((req, res, next) => {
    req.session.socketId = req.query.socketId;
    next();
});

router.get("/facebook", facebookAuth);

export default router;
