import express from "express";
const router = express.Router({ mergeParams: true });
import passport from "passport";
import { facebook, facebookFailure, logout, check } from "../handlers/routes/auth";

const facebookAuth = passport.authenticate("facebook", {
    scope: "email",
    failureRedirect: "/api/auth/facebook/failure"
});

const attachsocketIdToSession = (req, res, next) => {
    req.session.socketId = req.query.socketId;
    next();
};

router.get("/facebook", attachsocketIdToSession, facebookAuth);
router.get("/facebook/callback", facebookAuth, facebook);
router.get("/facebook/failure", facebookFailure);

router.post("/logout", logout);
router.get("/check", check);

export default routerCombiner => {
    routerCombiner.use("/auth", router);
};
