import express from "express";
const router = express.Router({ mergeParams: true });
import passport from "passport";
import { facebook, facebookFailure, logout } from "../handlers/auth";

const facebookAuth = passport.authenticate("facebook", {
    scope: "email",
    failureRedirect: "/api/auth/facebook/failure"
});

router.get("/facebook/callback", facebookAuth, facebook);

router.get("/facebook/failure", facebookFailure);

router.post("/logout", logout)

router.use((req, res, next) => {
    req.session.socketId = req.query.socketId;
    next();
});

router.get("/facebook", facebookAuth);

export default router;
