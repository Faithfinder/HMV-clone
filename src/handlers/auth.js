export const facebook = async (req, res) => {
    emit(req, res, { user: req.user });
};

export const facebookFailure = (req, res) => {
    emit(req, res, {
        message: "Failed to authenticate through Facebook. Please try again."
    });
};

export const logout = (req, res) => {
    req.logout();
    res.sendStatus(204);
}

const emit = (req, res, obj) => {
    const io = req.app.get("io");
    io.in(req.session.socketId).emit("facebook", obj);
    res.end();
};
