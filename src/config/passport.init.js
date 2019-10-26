import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";

export default () => {
    passport.serializeUser((user, cb) => cb(null, user));
    passport.deserializeUser((obj, cb) => cb(null, obj));

    const done = (accessToken, refreshToken, profile, cb) => {
        return cb(null, profile);
    };

    passport.use(
        new FacebookStrategy(
            {
                clientID: process.env.FACEBOOK_CLIENT,
                clientSecret: process.env.FACEBOOK_SECRET,
                callbackURL: "/api/auth/facebook/callback",
                profileFields: ["id", "emails"]
            },
            done
        )
    );
};
