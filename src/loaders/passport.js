import passport from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";
import { User } from "../models";
import config from "../config";

export default () => {
    passport.serializeUser((user, cb) => cb(null, user));
    passport.deserializeUser((obj, cb) => cb(null, obj));

    const done = async (accessToken, refreshToken, profile, cb) => {
        const dbUser = await findOrCreateUser(profile);
        const user = {
            userid: dbUser._id,
            email: dbUser.email,
            isAdmin: dbUser.isAdmin
        };
        return cb(null, user);
    };

    passport.use(
        new FacebookStrategy(
            {
                clientID: config.facebook.client,
                clientSecret: config.facebook.secret,
                callbackURL: "/api/auth/facebook/callback",
                profileFields: ["id", "emails"]
            },
            done
        )
    );
};

const findOrCreateUser = async ({ id, emails }) => {
    let user = await User.findOne({ facebookId: id });
    if (!user) {
        const newUser = await User.create({
            email: emails[0].value,
            facebookId: id
        });
        user = await newUser.save();
    }
    return user;
};
