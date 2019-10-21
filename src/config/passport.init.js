import { serializeUser, deserializeUser, use } from "passport";
import { Strategy as FacebookStrategy } from "passport-facebook";

export default () => {
    serializeUser((user, done) => done(null, user));
    deserializeUser((obj, done) => done(null, obj));

    const done = (accessToken, refreshToken, profile, callback) => {
        return callback(null, profile);
    };

    use(
        new FacebookStrategy(
            {
                clientID: process.env.FACEBOOK_CLIENT,
                clientSecret: process.env.FACEBOOK_SECRET,
                profileFields: ["id", "emails"]
            },
            done
        )
    );
};
