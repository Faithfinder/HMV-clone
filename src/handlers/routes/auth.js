import events from "../../config/events";

export const facebook = async (req, res) => {
    emit(req, res, { user: req.user });
};

export const facebookFailure = (req, res) => {
    emit(req, res, {
        message: "Failed to authenticate through Facebook. Please try again."
    });
};

export const logout = (req, res) => {
    try {
        req.session.destroy(err => {
            if (err) throw err;
            req.logout();
            res.clearCookie("sid");
            res.sendStatus(204);
        });
    } catch (err) {
        res.status(422).send(err);
    }
};

export const check = (req, res) => {
    res.send(req.user);
};

const emit = (req, res, obj) => {
    const io = req.app.get("io");
    io.in(req.session.socketId).emit(events.auth.facebook, obj);
    res.end();
};
