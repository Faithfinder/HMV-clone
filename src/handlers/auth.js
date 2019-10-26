import { User } from "../models";

export async function facebook(req, res) {
    const user = await findOrCreateUser(req.user);
    emit(req, res, { user });
}

export function facebookFailure(req, res) {
    emit(req, res, {
        message: "Failed to authenticate through Facebook. Please try again."
    });
}

export function logout(req, res) {
    req.logout();
    res.sendStatus(204);
}

const emit = (req, res, obj) => {
    const io = req.app.get("io");
    io.in(req.session.socketId).emit("facebook", obj);
    res.end();
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
